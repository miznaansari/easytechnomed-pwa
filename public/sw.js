const CACHE_NAME = "easytechnomed-pwa-v4";
const OFFLINE_URL = "/offline.html";

// Core routes and critical static assets to pre-cache on install
const PRECACHE_ROUTES = [
  OFFLINE_URL,
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/logo/logobg.png",
  "/logo/customer_login_bg.png",
  "/auth/login",
  "/dashboard",
  "/registration",
  "/test-report",
  "/doctor-summary",
  "/settings",
  "/members",
];

// Helper: Fast fetch with short timeout to prevent navigation freezes on dead connections
function fetchWithTimeout(request, timeoutMs = 450) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error("NetworkTimeout"));
    }, timeoutMs);

    fetch(request, { signal: controller.signal })
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Install event: cache offline fallback page and core dashboard routes
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        console.log("[Service Worker] Pre-caching core offline assets & routes...");
        await Promise.allSettled(
          PRECACHE_ROUTES.map(async (route) => {
            try {
              // 1. Pre-cache standard page HTML / asset
              const res = await fetch(route, { cache: "reload" });
              if (res.ok) {
                await cache.put(route, res);
              }

              // 2. Pre-cache RSC data for app routes so first-time offline navigation is instant
              if (route.startsWith("/") && !route.includes(".")) {
                try {
                  const rscRes = await fetch(route, {
                    headers: { RSC: "1" },
                    cache: "reload",
                  });
                  if (rscRes.ok) {
                    await cache.put(`${route}?_rsc=1`, rscRes.clone());
                    await cache.put(route, rscRes);
                  }
                } catch {}
              }
            } catch (err) {
              console.warn(`[Service Worker] Pre-cache failed for: ${route}`, err);
            }
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event: clean up older caches and claim clients immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("[Service Worker] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event: handle offline navigation, Next.js RSC requests, and asset caching
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore unsupported schemes (e.g. chrome-extension, data:)
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Never cache API requests in Service Worker - persistent offline data belongs in IndexedDB!
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/adminstration/api/")) {
    return;
  }

  // 1. Next.js React Server Component (RSC) requests (used for client-side navigation between pages)
  const isRSCRequest =
    url.searchParams.has("_rsc") ||
    event.request.headers.get("RSC") === "1" ||
    event.request.headers.get("Next-Router-State-Tree");

  if (isRSCRequest) {
    event.respondWith(
      (async () => {
        // A. If already offline, skip network entirely -> Instant 0ms response from cache
        if (typeof self.navigator !== "undefined" && !self.navigator.onLine) {
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached) return pathnameCached;

          const dashboardRsc = await caches.match("/dashboard", { ignoreSearch: true });
          if (dashboardRsc) return dashboardRsc;

          return new Response("", { status: 503, statusText: "Offline" });
        }

        // B. If online: Race network with 450ms timeout so disconnected network doesn't hang UI
        try {
          const networkResponse = await fetchWithTimeout(event.request, 450);
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              cache.put(url.pathname, networkResponse.clone());
            });
          }
          return networkResponse;
        } catch {
          // Network timed out or failed (disconnected WiFi/internet) -> Fallback to Cache instantly
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached) return pathnameCached;

          const dashboardRsc = await caches.match("/dashboard", { ignoreSearch: true });
          if (dashboardRsc) return dashboardRsc;

          return new Response("", { status: 503, statusText: "Offline" });
        }
      })()
    );
    return;
  }

  // 2. Full Page HTML Navigation Requests (Reloads, entering URLs, hard navigations)
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        // A. If offline, serve cached shell immediately (0ms)
        if (typeof self.navigator !== "undefined" && !self.navigator.onLine) {
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached) return pathnameCached;

          const fallbackCache = await caches.open(CACHE_NAME);
          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback) return dashboardFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;

          return new Response("Offline - Please reconnect to internet", {
            status: 503,
            headers: { "Content-Type": "text/plain" },
          });
        }

        // B. If online, fetch with 500ms timeout
        try {
          const networkResponse = await fetchWithTimeout(event.request, 500);
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              cache.put(url.pathname, networkResponse.clone());
            });
          }
          return networkResponse;
        } catch {
          // Fallback to cache immediately on network timeout
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached) return pathnameCached;

          const fallbackCache = await caches.open(CACHE_NAME);
          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback) return dashboardFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;

          return new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } });
        }
      })()
    );
    return;
  }

  // 3. Static Assets (Next.js JS bundles, CSS, Fonts, Images, Manifest) - Stale-While-Revalidate / Cache-First
  const isStaticAsset =
    url.pathname.startsWith("/_next/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".ttf") ||
    url.pathname.endsWith(".webmanifest");

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Fetch from network in background to revalidate cache
        const networkFetch = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        // Return cached version immediately (0ms) if present, otherwise await network fetch
        return cachedResponse || networkFetch;
      })
    );
    return;
  }

  // 4. Default fallback for other non-API requests
  event.respondWith(
    fetch(event.request).catch(async () => {
      const cached = await caches.match(event.request, { ignoreSearch: true });
      if (cached) return cached;
      return new Response("", { status: 408, statusText: "Offline" });
    })
  );
});

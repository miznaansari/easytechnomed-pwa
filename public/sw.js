const CACHE_NAME = "easytechnomed-pwa-v3";
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

// Install event: cache offline fallback page and core dashboard routes
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        console.log("[Service Worker] Pre-caching core offline assets & routes...");
        // Use Promise.allSettled so one missing image/route doesn't fail the entire install
        await Promise.allSettled(
          PRECACHE_ROUTES.map((route) =>
            fetch(route, { cache: "reload" })
              .then((res) => {
                if (res.ok) return cache.put(route, res);
              })
              .catch((err) => {
                console.warn(`[Service Worker] Pre-cache failed for: ${route}`, err);
              })
          )
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
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              // Also store under plain pathname for fallback lookup
              cache.put(url.pathname, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log("[Service Worker] RSC fetch failed (offline), attempting cached response for:", url.pathname);
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname);
          if (pathnameCached) return pathnameCached;

          // If no cached RSC found, return an empty 200 response so Next.js client router doesn't crash with "This page couldn't load"
          return new Response("", {
            status: 200,
            headers: { "Content-Type": "text/x-component" },
          });
        })
    );
    return;
  }

  // 2. Full Page HTML Navigation Requests (Reloads, entering URLs, hard navigations)
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              cache.put(url.pathname, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log("[Service Worker] Navigation fetch failed (offline), attempting cached route for:", url.pathname);
          // Try exact request
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          // Try pathname
          const pathnameCached = await caches.match(url.pathname);
          if (pathnameCached) return pathnameCached;

          // Fallback to pre-cached dashboard shell or offline.html
          const fallbackCache = await caches.open(CACHE_NAME);
          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback) return dashboardFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;

          return new Response("Offline - Please reconnect to internet", {
            status: 503,
            headers: { "Content-Type": "text/plain" },
          });
        })
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

        // Return cached version immediately if present, otherwise await network fetch
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

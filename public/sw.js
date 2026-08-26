const CACHE_NAME = "easytechnomed-pwa-v6";
const OFFLINE_URL = "/offline.html";

// Core routes and critical static assets to pre-cache on install
const PRECACHE_ROUTES = [
  OFFLINE_URL,
  "/",
  "/auth/login",
  "/dashboard",
  "/registration",
  "/test-report",
  "/doctor-summary",
  "/settings",
  "/members",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/logo/logobg.png",
  "/logo/customer_login_bg.png",
];

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
              // 1. Pre-cache standard page HTML document
              const res = await fetch(route, { cache: "reload" });
              if (res.ok) {
                await cache.put(route, res);
              }

              // 2. Pre-cache RSC data separately for app routes so client-side navigation is instant
              if (route.startsWith("/") && !route.includes(".")) {
                try {
                  const rscRes = await fetch(route, {
                    headers: { RSC: "1" },
                    cache: "reload",
                  });
                  if (rscRes.ok) {
                    await cache.put(`${route}?_rsc=1`, rscRes);
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

// Helper: Check if response is valid HTML
function isHtmlResponse(response) {
  if (!response || !response.headers) return false;
  const ct = response.headers.get("content-type") || "";
  return ct.includes("text/html");
}

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
              cache.put(`${url.pathname}?_rsc=1`, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Network failed -> return cached RSC payload
          const cached = await caches.match(event.request);
          if (cached) return cached;

          const rscCached = await caches.match(`${url.pathname}?_rsc=1`);
          if (rscCached) return rscCached;

          const dashboardRsc = await caches.match("/dashboard?_rsc=1");
          if (dashboardRsc) return dashboardRsc;

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
          if (networkResponse && networkResponse.status === 200 && isHtmlResponse(networkResponse)) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              cache.put(url.pathname, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Network failed (offline / lost connection) -> Fallback to Cache
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached && isHtmlResponse(cached)) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached && isHtmlResponse(pathnameCached)) return pathnameCached;

          const fallbackCache = await caches.open(CACHE_NAME);
          const rootFallback = await fallbackCache.match("/");
          if (rootFallback && isHtmlResponse(rootFallback)) return rootFallback;

          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback && isHtmlResponse(dashboardFallback)) return dashboardFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;

          return new Response(
            "<!DOCTYPE html><html><head><title>EasyTechnoMed - Offline</title><meta name='viewport' content='width=device-width, initial-scale=1'></head><body style='font-family:sans-serif;text-align:center;padding:40px;'><h2>You are currently offline</h2><p>Please check your connection or open your cached dashboard.</p><a href='/dashboard' style='color:#0f766e;font-weight:bold;'>Go to Dashboard</a></body></html>",
            {
              status: 200,
              headers: { "Content-Type": "text/html" },
            }
          );
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

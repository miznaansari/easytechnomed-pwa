const CACHE_NAME = "easytechnomed-pwa-v4";
const OFFLINE_URL = "/offline.html";
const OFFLINE_PRINT_URL = "/offline-print.html";

// Core routes and critical static assets to pre-cache on install
const PRECACHE_ROUTES = [
  OFFLINE_URL,
  OFFLINE_PRINT_URL,
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

// Fetch event: handle offline navigation, RSC requests, print fallbacks, and asset caching
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore unsupported schemes (e.g. chrome-extension, data:)
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // 1. Handle Print Document Routes (/api/print-report/, /api/print-bill/, /api/print-subscription-invoice/)
  const isPrintRequest =
    url.pathname.startsWith("/api/print-report/") ||
    url.pathname.startsWith("/api/print-bill/") ||
    url.pathname.startsWith("/api/print-subscription-invoice/");

  if (isPrintRequest) {
    event.respondWith(
      fetch(event.request).catch(async () => {
        console.log("[Service Worker] Serving offline print template for:", url.pathname);
        const cache = await caches.open(CACHE_NAME);
        const offlinePrintDoc = await cache.match(OFFLINE_PRINT_URL);
        if (offlinePrintDoc) return offlinePrintDoc;
        const offlineGeneral = await cache.match(OFFLINE_URL);
        if (offlineGeneral) return offlineGeneral;
        return new Response("Offline document not available.", { status: 503, headers: { "Content-Type": "text/plain" } });
      })
    );
    return;
  }

  // 2. Bypass standard data APIs (offline data handled via IndexedDB)
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/adminstration/api/")) {
    return;
  }

  // 3. Next.js React Server Component (RSC) requests
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
              cache.put(url.pathname, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log("[Service Worker] RSC fetch failed (offline) for:", url.pathname);
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname);
          if (pathnameCached) return pathnameCached;

          return new Response("", {
            status: 200,
            headers: { "Content-Type": "text/x-component" },
          });
        })
    );
    return;
  }

  // 4. Full Page HTML Navigation Requests (Reloads, direct URL visits)
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
          console.log("[Service Worker] Navigation offline for:", url.pathname);
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached) return cached;

          const pathnameCached = await caches.match(url.pathname);
          if (pathnameCached) return pathnameCached;

          const fallbackCache = await caches.open(CACHE_NAME);
          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback) return dashboardFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;

          return new Response("Offline - Please reconnect to internet", {
            status: 200,
            headers: { "Content-Type": "text/html" },
          });
        })
    );
    return;
  }

  // 5. Static Assets (Next.js JS bundles, CSS, Fonts, Images, Manifest)
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
      caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
        if (cachedResponse) {
          // Revalidate in background if connected
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            return new Response("", { status: 200 });
          });
      })
    );
    return;
  }

  // 6. Default Fallback
  event.respondWith(
    fetch(event.request).catch(async () => {
      const cached = await caches.match(event.request, { ignoreSearch: true });
      if (cached) return cached;
      return new Response("", { status: 200 });
    })
  );
});

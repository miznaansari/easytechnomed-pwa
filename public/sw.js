const CACHE_NAME = "easytechnomed-cache-v2";
const OFFLINE_URL = "/offline.html";

// Core routes and assets to pre-cache on install
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
];

// Install event: cache offline fallback page and core dashboard routes
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Pre-caching core offline assets & routes");
        return cache.addAll(PRECACHE_ROUTES).catch((err) => {
          console.warn("[Service Worker] Some precache items failed:", err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event: clean up older caches
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

// Fetch event: handle offline navigation and asset caching
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore unsupported schemes (e.g. chrome-extension, data)
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Never cache API responses in service worker - persistent data belongs in IndexedDB!
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // 1. Navigation requests (HTML page loads) - Network-first with cache fallback
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log("[Service Worker] Navigation fetch failed, attempting cached route for:", url.pathname);
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }

          // Fallback to pre-cached matching path or offline.html
          const fallbackCache = await caches.open(CACHE_NAME);
          const matchedFallback = await fallbackCache.match(url.pathname);
          if (matchedFallback) {
            return matchedFallback;
          }

          return fallbackCache.match(OFFLINE_URL);
        })
    );
    return;
  }

  // 2. Static assets (images, CSS, JS, fonts, Next static bundles) - Cache-first with network fallback
  const isStaticAsset =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".webmanifest");

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return networkResponse;
          })
          .catch(() => {
            // Silent catch for static assets when offline
          });
      })
    );
    return;
  }

  // 3. Default fallback for other requests
  event.respondWith(fetch(event.request).catch(() => {}));
});

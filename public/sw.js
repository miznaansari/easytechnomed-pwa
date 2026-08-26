const CACHE_NAME = "easytechnomed-pwa-v6";
const OFFLINE_PRINT_URL = "/offline-print.html";
const APP_SHELL_KEY = "/__app_shell__";

// Static assets to precache on install
const PRECACHE_ASSETS = [
  OFFLINE_PRINT_URL,
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/logo/logobg.png",
  "/logo/customer_login_bg.png",
];

// Install event: cache offline fallback assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        console.log("[Service Worker] Pre-caching core offline assets...");
        await Promise.allSettled(
          PRECACHE_ASSETS.map((asset) =>
            fetch(asset, { cache: "reload" })
              .then((res) => {
                if (res && res.ok) {
                  return cache.put(asset, res);
                }
              })
              .catch((err) => {
                console.warn(`[Service Worker] Pre-cache failed for: ${asset}`, err);
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
        try {
          const cache = await caches.open(CACHE_NAME);
          const offlinePrintDoc = await cache.match(OFFLINE_PRINT_URL);
          if (offlinePrintDoc) return offlinePrintDoc;
        } catch (e) {
          console.warn("[Service Worker] Print fallback error:", e);
        }
        return new Response("Offline document not available.", {
          status: 200,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
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
            const clone1 = networkResponse.clone();
            const clone2 = networkResponse.clone();
            caches.open(CACHE_NAME).then(async (cache) => {
              try {
                await cache.put(event.request, clone1);
                await cache.put(url.pathname, clone2);
              } catch (e) {}
            }).catch(() => {});
          }
          return networkResponse;
        })
        .catch(async () => {
          try {
            const cached = await caches.match(event.request, { ignoreSearch: true });
            if (cached) return cached;
            const pathnameCached = await caches.match(url.pathname);
            if (pathnameCached) return pathnameCached;
          } catch (e) {}

          return new Response("", {
            status: 200,
            headers: { "Content-Type": "text/x-component" },
          });
        })
    );
    return;
  }

  // 4. Full Page HTML Navigation Requests (Reloads, direct URL visits, page shifts)
  // Instead of showing a "No Internet" screen, serve the cached Next.js App Shell so React loads offline from IndexedDB!
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone1 = networkResponse.clone();
            const clone2 = networkResponse.clone();
            const clone3 = networkResponse.clone();
            caches.open(CACHE_NAME).then(async (cache) => {
              try {
                await cache.put(event.request, clone1);
                await cache.put(url.pathname, clone2);
                await cache.put(APP_SHELL_KEY, clone3);
              } catch (e) {}
            }).catch(() => {});
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log("[Service Worker] Offline navigation fallback (Serving App Shell) for:", url.pathname);
          try {
            const cache = await caches.open(CACHE_NAME);

            // 1. Try exact request
            const cachedExact = await cache.match(event.request, { ignoreSearch: true });
            if (cachedExact) return cachedExact;

            // 2. Try pathname
            const pathnameCached = await cache.match(url.pathname);
            if (pathnameCached) return pathnameCached;

            // 3. Try global App Shell
            const appShell = await cache.match(APP_SHELL_KEY);
            if (appShell) return appShell;

            // 4. Try any cached dashboard route
            for (const route of ["/dashboard", "/test-report", "/registration", "/doctor-summary", "/settings", "/"]) {
              const fallback = await cache.match(route);
              if (fallback) return fallback;
            }

            // 5. Try any cached HTML file in Cache Storage
            const keys = await cache.keys();
            for (const key of keys) {
              const item = await cache.match(key);
              if (item && item.headers && item.headers.get("content-type")?.includes("text/html")) {
                return item;
              }
            }
          } catch (e) {
            console.warn("[Service Worker] App shell cache match error:", e);
          }

          return new Response("<!DOCTYPE html><html><head><meta http-equiv='refresh' content='2'></head><body>Loading EasyTechnoMed App...</body></html>", {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" },
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
                const clone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, clone).catch(() => {});
                }).catch(() => {});
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone).catch(() => {});
              }).catch(() => {});
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
      try {
        const cached = await caches.match(event.request, { ignoreSearch: true });
        if (cached) return cached;
      } catch (e) {}
      return new Response("", { status: 200 });
    })
  );
});

const CACHE_NAME = "easytechnomed-pwa-v10";
const OFFLINE_URL = "/offline.html";

// Core routes and critical static assets to pre-cache on install
const PRECACHE_ROUTES = [
  OFFLINE_URL,
  "/",
  "/dashboard",
  "/registration",
  "/test-report",
  "/doctor-summary",
  "/settings",
  "/settings/address",
  "/settings/tests",
  "/settings/pdf",
  "/settings/payments",
  "/members",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/logo/logobg.png",
  "/logo/customer_login_bg.png",
];

// Helper: Extract all JS/CSS asset URLs from HTML string
function extractAssetsFromHtml(htmlText) {
  const assets = new Set();
  // Match <script src="...">
  const scriptRegex = /<script[^>]+src=["'](\/_next\/static\/[^"']+)["']/g;
  let match;
  while ((match = scriptRegex.exec(htmlText)) !== null) {
    assets.add(match[1]);
  }
  // Match <link rel="preload" href="..."> and <link rel="stylesheet" href="...">
  const linkRegex = /<link[^>]+href=["'](\/_next\/static\/[^"']+)["']/g;
  while ((match = linkRegex.exec(htmlText)) !== null) {
    assets.add(match[1]);
  }
  // Match chunk filenames mentioned in JSON / RSC flight scripts
  const chunkRegex = /"\/_next\/static\/chunks\/[^"]+\.js"/g;
  while ((match = chunkRegex.exec(htmlText)) !== null) {
    const clean = match[0].replace(/"/g, "");
    assets.add(clean);
  }
  return Array.from(assets);
}

// Install event: cache offline fallback page, core dashboard routes, AND all JS chunks
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        console.log("[Service Worker] Pre-caching core offline assets & routes...");
        const extractedAssets = new Set();

        await Promise.allSettled(
          PRECACHE_ROUTES.map(async (route) => {
            try {
              // 1. Pre-cache standard page HTML document
              const res = await fetch(route, { cache: "reload" });
              if (res.ok) {
                const text = await res.clone().text();
                await cache.put(route, res);

                // Extract all JS chunks and CSS files referenced in this page
                const assets = extractAssetsFromHtml(text);
                assets.forEach((a) => extractedAssets.add(a));
              }

              // 2. Pre-cache RSC data separately for app routes so client-side navigation is instant
              if (route.startsWith("/") && !route.includes(".")) {
                try {
                  const rscRes = await fetch(route, {
                    headers: { RSC: "1" },
                    cache: "reload",
                  });
                  if (rscRes.ok) {
                    const rscText = await rscRes.clone().text();
                    await cache.put(`${route}?_rsc=1`, rscRes);

                    const rscAssets = extractAssetsFromHtml(rscText);
                    rscAssets.forEach((a) => extractedAssets.add(a));
                  }
                } catch {}
              }
            } catch (err) {
              console.warn(`[Service Worker] Pre-cache failed for: ${route}`, err);
            }
          })
        );

        // 3. Pre-cache all discovered Next.js JS chunks and stylesheets
        console.log(`[Service Worker] Pre-caching ${extractedAssets.size} JS chunks & assets...`);
        await Promise.allSettled(
          Array.from(extractedAssets).map(async (assetUrl) => {
            try {
              const aRes = await fetch(assetUrl, { cache: "reload" });
              if (aRes.ok) {
                await cache.put(assetUrl, aRes);
              }
            } catch {}
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
  if (url.pathname.startsWith("/api/")) {
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
            const clone1 = networkResponse.clone();
            const clone2 = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone1);
              cache.put(`${url.pathname}?_rsc=1`, clone2);
            }).catch(() => {});
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
      (async () => {
        // A. If offline, instantly serve cached HTML page
        if (typeof self.navigator !== "undefined" && !self.navigator.onLine) {
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached && isHtmlResponse(cached)) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached && isHtmlResponse(pathnameCached)) return pathnameCached;

          const fallbackCache = await caches.open(CACHE_NAME);
          if (url.pathname.startsWith("/registration")) {
            const regFallback = await fallbackCache.match("/registration");
            if (regFallback && isHtmlResponse(regFallback)) return regFallback;
          }
          if (url.pathname.startsWith("/test-report")) {
            const trFallback = await fallbackCache.match("/test-report");
            if (trFallback && isHtmlResponse(trFallback)) return trFallback;
          }
          if (url.pathname.startsWith("/members")) {
            const memFallback = await fallbackCache.match("/members");
            if (memFallback && isHtmlResponse(memFallback)) return memFallback;
          }
          if (url.pathname.startsWith("/settings")) {
            const setFallback = await fallbackCache.match("/settings");
            if (setFallback && isHtmlResponse(setFallback)) return setFallback;
          }
          if (url.pathname.startsWith("/doctor-summary")) {
            const docFallback = await fallbackCache.match("/doctor-summary");
            if (docFallback && isHtmlResponse(docFallback)) return docFallback;
          }

          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback && isHtmlResponse(dashboardFallback)) return dashboardFallback;

          const rootFallback = await fallbackCache.match("/");
          if (rootFallback && isHtmlResponse(rootFallback)) return rootFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;
        }

        // B. If online, fetch from network and cache
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200 && isHtmlResponse(networkResponse)) {
            const clone1 = networkResponse.clone();
            const clone2 = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone1);
              cache.put(url.pathname, clone2);
            }).catch(() => {});
          }
          return networkResponse;
        } catch {
          // Network failed (offline / lost connection) -> Fallback to Cache
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached && isHtmlResponse(cached)) return cached;

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached && isHtmlResponse(pathnameCached)) return pathnameCached;

          const fallbackCache = await caches.open(CACHE_NAME);
          if (url.pathname.startsWith("/registration")) {
            const regFallback = await fallbackCache.match("/registration");
            if (regFallback && isHtmlResponse(regFallback)) return regFallback;
          }
          if (url.pathname.startsWith("/test-report")) {
            const trFallback = await fallbackCache.match("/test-report");
            if (trFallback && isHtmlResponse(trFallback)) return trFallback;
          }
          if (url.pathname.startsWith("/members")) {
            const memFallback = await fallbackCache.match("/members");
            if (memFallback && isHtmlResponse(memFallback)) return memFallback;
          }
          if (url.pathname.startsWith("/settings")) {
            const setFallback = await fallbackCache.match("/settings");
            if (setFallback && isHtmlResponse(setFallback)) return setFallback;
          }
          if (url.pathname.startsWith("/doctor-summary")) {
            const docFallback = await fallbackCache.match("/doctor-summary");
            if (docFallback && isHtmlResponse(docFallback)) return docFallback;
          }

          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback && isHtmlResponse(dashboardFallback)) return dashboardFallback;

          const rootFallback = await fallbackCache.match("/");
          if (rootFallback && isHtmlResponse(rootFallback)) return rootFallback;

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return offlineFallback;

          return new Response(
            "<!DOCTYPE html><html><head><meta http-equiv='refresh' content='0; url=/dashboard'><script>window.location.replace('/dashboard');</script></head><body></body></html>",
            {
              status: 200,
              headers: { "Content-Type": "text/html" },
            }
          );
        }
      })()
    );
    return;
  }

  // 3. Static Assets (Next.js JS bundles, CSS, Fonts, Images, Manifest) - Cache-First with Network Revalidation & Offline Fallback
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
      caches.match(event.request).then(async (cachedResponse) => {
        if (cachedResponse) {
          // Revalidate in background if online
          if (typeof self.navigator !== "undefined" && self.navigator.onLine) {
            fetch(event.request)
              .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                  const clone = networkResponse.clone();
                  caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                }
              })
              .catch(() => {});
          }
          return cachedResponse;
        }

        // Not in cache: Try network
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        } catch (fetchErr) {
          // Fallback for failed JS chunk when offline: Return a valid empty JS module so React/Webpack doesn't throw fatal ChunkLoadError!
          if (url.pathname.endsWith(".js")) {
            return new Response("/* Offline Empty Chunk Fallback */", {
              status: 200,
              headers: { "Content-Type": "application/javascript" },
            });
          }
          if (url.pathname.endsWith(".css")) {
            return new Response("/* Offline CSS */", {
              status: 200,
              headers: { "Content-Type": "text/css" },
            });
          }
          return new Response("", { status: 408, statusText: "Offline" });
        }
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

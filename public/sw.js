const CACHE_NAME = "easytechnomed-pwa-v12";
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
  "/auth/login",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/logo/logobg.png",
  "/logo/customer_login_bg.png",
  "/site.webmanifest",
  "/manifest.json",
];

// Helper: Extract all JS/CSS asset URLs from HTML string
function extractAssetsFromHtml(htmlText) {
  const assets = new Set();
  const scriptRegex = /<script[^>]+src=["'](\/_next\/static\/[^"']+)["']/g;
  let match;
  while ((match = scriptRegex.exec(htmlText)) !== null) {
    assets.add(match[1]);
  }
  const linkRegex = /<link[^>]+href=["'](\/_next\/static\/[^"']+)["']/g;
  while ((match = linkRegex.exec(htmlText)) !== null) {
    assets.add(match[1]);
  }
  const chunkRegex = /"\/_next\/static\/chunks\/[^"]+\.js"/g;
  while ((match = chunkRegex.exec(htmlText)) !== null) {
    const clean = match[0].replace(/"/g, "");
    assets.add(clean);
  }
  return Array.from(assets);
}

// Helper: Sanitize responses for iOS WebKit (Safari throws if redirected === true)
function createCleanResponse(body, headers = {}, status = 200) {
  return new Response(body, {
    status,
    statusText: status === 200 ? "OK" : "Status",
    headers: {
      "Content-Type": headers["content-type"] || "text/html; charset=utf-8",
      ...headers,
    },
  });
}

function sanitizeResponse(response) {
  if (!response) return null;
  // If response has redirected flag or status >= 300, recreate clean 200 response so Safari doesn't throw
  if (response.redirected || (response.status >= 300 && response.status < 400)) {
    return new Response(response.body, {
      status: 200,
      statusText: "OK",
      headers: response.headers,
    });
  }
  return response;
}

// Install event: cache offline fallback page, core dashboard routes, and JS chunks
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        console.log("[Service Worker] Pre-caching core offline assets & routes for iOS/PWA...");
        const extractedAssets = new Set();

        await Promise.allSettled(
          PRECACHE_ROUTES.map(async (route) => {
            try {
              // 1. Pre-cache page HTML (Sanitize to prevent iOS WebKit redirect errors)
              const res = await fetch(route, { cache: "reload", redirect: "follow" });
              if (res.ok) {
                const text = await res.text();
                const cleanRes = createCleanResponse(text, {
                  "content-type": res.headers.get("content-type") || "text/html; charset=utf-8",
                });
                await cache.put(route, cleanRes);

                // Extract all JS chunks and CSS files referenced in this page
                const assets = extractAssetsFromHtml(text);
                assets.forEach((a) => extractedAssets.add(a));
              }

              // 2. Pre-cache RSC data separately for client-side navigation
              if (route.startsWith("/") && !route.includes(".")) {
                try {
                  const rscRes = await fetch(route, {
                    headers: { RSC: "1" },
                    cache: "reload",
                    redirect: "follow",
                  });
                  if (rscRes.ok) {
                    const rscText = await rscRes.text();
                    const cleanRsc = new Response(rscText, {
                      status: 200,
                      headers: { "Content-Type": "text/x-component" },
                    });
                    await cache.put(`${route}?_rsc=1`, cleanRsc);

                    const rscAssets = extractAssetsFromHtml(rscText);
                    rscAssets.forEach((a) => extractedAssets.add(a));
                  }
                } catch { }
              }
            } catch (err) {
              console.warn(`[Service Worker] Pre-cache failed for: ${route}`, err);
            }
          })
        );

        // 3. Pre-cache all discovered Next.js JS chunks and stylesheets
        await Promise.allSettled(
          Array.from(extractedAssets).map(async (assetUrl) => {
            try {
              const aRes = await fetch(assetUrl, { cache: "reload", redirect: "follow" });
              if (aRes.ok) {
                const cleanAsset = aRes.redirected
                  ? new Response(await aRes.blob(), { status: 200, headers: aRes.headers })
                  : aRes;
                await cache.put(assetUrl, cleanAsset);
              }
            } catch { }
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

function isHtmlResponse(response) {
  if (!response || !response.headers) return false;
  const ct = response.headers.get("content-type") || "";
  return ct.includes("text/html");
}

// Fetch event: handle offline navigation, Next.js RSC requests, and asset caching
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Never intercept API endpoints in service worker - IndexedDB handles offline data!
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // 1. Next.js React Server Component (RSC) requests
  const isRSCRequest =
    url.searchParams.has("_rsc") ||
    event.request.headers.get("RSC") === "1" ||
    event.request.headers.get("Next-Router-State-Tree");

  if (isRSCRequest) {
    event.respondWith(
      fetch(event.request, { redirect: "follow" })
        .then(async (networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.ok)) {
            const bodyText = await networkResponse.text();
            const cleanRes1 = new Response(bodyText, {
              status: 200,
              headers: { "Content-Type": "text/x-component" },
            });
            const cleanRes2 = new Response(bodyText, {
              status: 200,
              headers: { "Content-Type": "text/x-component" },
            });
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, cleanRes1);
              cache.put(`${url.pathname}?_rsc=1`, cleanRes2);
            }).catch(() => { });
            return new Response(bodyText, {
              status: 200,
              headers: { "Content-Type": "text/x-component" },
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return sanitizeResponse(cached);

          const rscCached = await caches.match(`${url.pathname}?_rsc=1`);
          if (rscCached) return sanitizeResponse(rscCached);

          const dashboardRsc = await caches.match("/dashboard?_rsc=1");
          if (dashboardRsc) return sanitizeResponse(dashboardRsc);

          return new Response("", {
            status: 200,
            headers: { "Content-Type": "text/x-component" },
          });
        })
    );
    return;
  }

  // 2. Full Page HTML Navigation Requests (iOS Safari / PWA Compatible)
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        // A. If offline, serve clean cached HTML
        if (typeof self.navigator !== "undefined" && !self.navigator.onLine) {
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached && isHtmlResponse(cached)) return sanitizeResponse(cached);

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached && isHtmlResponse(pathnameCached)) return sanitizeResponse(pathnameCached);

          const fallbackCache = await caches.open(CACHE_NAME);
          if (url.pathname.startsWith("/registration")) {
            const regFallback = await fallbackCache.match("/registration");
            if (regFallback && isHtmlResponse(regFallback)) return sanitizeResponse(regFallback);
          }
          if (url.pathname.startsWith("/test-report")) {
            const trFallback = await fallbackCache.match("/test-report");
            if (trFallback && isHtmlResponse(trFallback)) return sanitizeResponse(trFallback);
          }
          if (url.pathname.startsWith("/members")) {
            const memFallback = await fallbackCache.match("/members");
            if (memFallback && isHtmlResponse(memFallback)) return sanitizeResponse(memFallback);
          }
          if (url.pathname.startsWith("/settings")) {
            const setFallback = await fallbackCache.match("/settings");
            if (setFallback && isHtmlResponse(setFallback)) return sanitizeResponse(setFallback);
          }
          if (url.pathname.startsWith("/doctor-summary")) {
            const docFallback = await fallbackCache.match("/doctor-summary");
            if (docFallback && isHtmlResponse(docFallback)) return sanitizeResponse(docFallback);
          }

          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback && isHtmlResponse(dashboardFallback)) return sanitizeResponse(dashboardFallback);

          const rootFallback = await fallbackCache.match("/");
          if (rootFallback && isHtmlResponse(rootFallback)) return sanitizeResponse(rootFallback);

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return sanitizeResponse(offlineFallback);
        }

        // B. If online, fetch from network with redirect sanitization for iOS Safari
        try {
          const networkResponse = await fetch(event.request, { redirect: "follow" });

          // CRITICAL iOS Safari FIX: If response was redirected, reconstruct a clean 200 response
          if (networkResponse && networkResponse.redirected) {
            const bodyText = await networkResponse.text();
            const cleanRedirectResponse = createCleanResponse(bodyText, {
              "content-type": networkResponse.headers.get("content-type") || "text/html; charset=utf-8",
            });

            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, cleanRedirectResponse.clone()).catch(() => { });
            cache.put(url.pathname, cleanRedirectResponse.clone()).catch(() => { });
            return cleanRedirectResponse;
          }

          if (networkResponse && networkResponse.status === 200 && isHtmlResponse(networkResponse)) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
              cache.put(url.pathname, clone.clone());
            }).catch(() => { });
          }
          return networkResponse;
        } catch {
          // Network failed (offline / lost connection) -> Fallback to Cache
          const cached = await caches.match(event.request, { ignoreSearch: true });
          if (cached && isHtmlResponse(cached)) return sanitizeResponse(cached);

          const pathnameCached = await caches.match(url.pathname, { ignoreSearch: true });
          if (pathnameCached && isHtmlResponse(pathnameCached)) return sanitizeResponse(pathnameCached);

          const fallbackCache = await caches.open(CACHE_NAME);
          if (url.pathname.startsWith("/registration")) {
            const regFallback = await fallbackCache.match("/registration");
            if (regFallback && isHtmlResponse(regFallback)) return sanitizeResponse(regFallback);
          }
          if (url.pathname.startsWith("/test-report")) {
            const trFallback = await fallbackCache.match("/test-report");
            if (trFallback && isHtmlResponse(trFallback)) return sanitizeResponse(trFallback);
          }
          if (url.pathname.startsWith("/members")) {
            const memFallback = await fallbackCache.match("/members");
            if (memFallback && isHtmlResponse(memFallback)) return sanitizeResponse(memFallback);
          }
          if (url.pathname.startsWith("/settings")) {
            const setFallback = await fallbackCache.match("/settings");
            if (setFallback && isHtmlResponse(setFallback)) return sanitizeResponse(setFallback);
          }
          if (url.pathname.startsWith("/doctor-summary")) {
            const docFallback = await fallbackCache.match("/doctor-summary");
            if (docFallback && isHtmlResponse(docFallback)) return sanitizeResponse(docFallback);
          }

          const dashboardFallback = await fallbackCache.match("/dashboard");
          if (dashboardFallback && isHtmlResponse(dashboardFallback)) return sanitizeResponse(dashboardFallback);

          const rootFallback = await fallbackCache.match("/");
          if (rootFallback && isHtmlResponse(rootFallback)) return sanitizeResponse(rootFallback);

          const offlineFallback = await fallbackCache.match(OFFLINE_URL);
          if (offlineFallback) return sanitizeResponse(offlineFallback);

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

  // 3. Static Assets (Next.js JS bundles, CSS, Fonts, Images, Manifest)
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
    url.pathname.endsWith(".webmanifest") ||
    url.pathname.endsWith(".json");

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then(async (cachedResponse) => {
        if (cachedResponse) {
          if (typeof self.navigator !== "undefined" && self.navigator.onLine) {
            fetch(event.request, { redirect: "follow" })
              .then(async (networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                  const clone = networkResponse.clone();
                  const cache = await caches.open(CACHE_NAME);
                  cache.put(event.request, clone);
                }
              })
              .catch(() => { });
          }
          return sanitizeResponse(cachedResponse);
        }

        try {
          const networkResponse = await fetch(event.request, { redirect: "follow" });
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return sanitizeResponse(networkResponse);
        } catch {
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
    fetch(event.request, { redirect: "follow" })
      .then((res) => sanitizeResponse(res))
      .catch(async () => {
        const cached = await caches.match(event.request, { ignoreSearch: true });
        if (cached) return sanitizeResponse(cached);
        return new Response("", { status: 408, statusText: "Offline" });
      })
  );
});

// 5. Message Event: Immediate skipWaiting & cache purge for hard refresh
self.addEventListener("message", (event) => {
  if (event.data) {
    if (event.data.type === "SKIP_WAITING" || event.data.action === "skipWaiting") {
      console.log("[SW] Received SKIP_WAITING message, activating immediately.");
      self.skipWaiting();
    }
    if (event.data.type === "CLEAR_ALL_CACHES") {
      console.log("[SW] Received CLEAR_ALL_CACHES message, purging CacheStorage.");
      event.waitUntil(
        caches.keys().then((keys) => {
          return Promise.all(keys.map((key) => caches.delete(key)));
        })
      );
    }
  }
});


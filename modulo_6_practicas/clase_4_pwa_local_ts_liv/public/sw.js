const CACHE_NAME = "pwa-cache-v3";
const urlsToCache = ["/", "/index.html", "/main.js","/icons/icon-192x192.png"];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
const CACHE_NAME = "cache-v1";
const urlsToCache = ["/", "/index.html", "/icons/ico-512x512.png"];

self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated", event.request);
});

//
self.addEventListener("fetch", (event) => {
  console.log("interceptando la solicitud:", event.request.url);
  //cache first
  // event.respondWith(
  //   caches.match(event.request).then(response => {
  //     return response || fetch(event.request);
  //   })
  // )
  //network first
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => caches.match(event.request))
  );
});



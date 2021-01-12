/******
 * Installing the service worker
 * Caching everything of the project
 * Returning the cached files
 */
self.addEventListener('install', event => {
    console.log("Installed the app service worker!");
    event.waitUntil(
        caches.open("static")
            .then(cache => {
                return cache.addAll(
                    [
                        "./",
                        "./src/app.css",
                        "./images/logo192.png",
                        "./images/logo512.png"
                    ]
                );
            })
    );
});

/*****
 * Fecth the cached files
 * Looking for a match with the request
 * return the response
 */
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    )
})


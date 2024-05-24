self.addEventListener("install", (e) => {

  e.waitUntil(
    caches
      .open("archivosApp")
      .then((cache) => {
        return cache.addAll([
            "./",
          "./src/css/styles.css",
          "./src/assets/calc-icon.svg",
          "./src/assets/calc-icon-sm.svg",
          "./src/assets/delete-icon.svg",
          "./src/js/index.js",
          "./manifest.json",
        ]);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        return res ? res : e.request;
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

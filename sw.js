var CACHE_NAME = 'apwa-site';
var urlsToCache = [
  '/',
  'packages/config.js',
  'packages/system.js',
  'build/shell.js',
  '//fonts.googleapis.com/icon?family=Material+Icons'
];

var installServiceWorker = function() {
  return caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    });
};

var handleInstall = function(event){
  event.waitUntil(installServiceWorker());
};

self.addEventListener('install',handleInstall);

var handleFetch = function(event){
 console.log('Fetch');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
};

self.addEventListener('fetch',handleFetch);

const CACHE_NAME = 'weather-app-cache-v1';
const CACHE_URLS = [
  '/',
  'PrashunLama_2359871.html',
  '2359871.js',
  '2359871_prashunLama.php',
  'get_weather_data.php',
  'connect.php',  // Replace with your HTML file name
  // Add other resources like CSS, images, and JavaScript files
  // '/styles.css',
  // '/script.js',
  // ...
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_URLS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

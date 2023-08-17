'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "136a89384f8fc2b7a3e43afb2aa825b7",
"assets/AssetManifest.json": "5fb01e023c1e528b8fdea2e628e9c696",
"assets/assets/balloon.png": "72e01de43edb30eb3cf2f2f491855b74",
"assets/assets/divertissement.jpg": "9f16a5d69e9e6fe0aa591bf1f59564c8",
"assets/assets/dommage.jpg": "ee429e24a25c1a50df25de0cde6abd50",
"assets/assets/gagner.jpg": "fc5948cd2d2e6b8820b6cb2999451d5f",
"assets/assets/geography.png": "34f52a272717179daa44d4c5273c1181",
"assets/assets/histoire.jpg": "d991b648ee059f7c8eed86985f7219c3",
"assets/assets/questions.json": "c9a4659979088f467004f8872d01f61f",
"assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ad752f482caa82453d146a2d518109c0",
"assets/NOTICES": "a79434aacc0fe4eb0395b811dea46b23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"github/.git/COMMIT_EDITMSG": "d39d8df974f8d45e3d23499dc20ea763",
"github/.git/config": "48125470ada7631674f797f5b38b0b2f",
"github/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"github/.git/FETCH_HEAD": "20aada49d50fa4a120eeddab2711a083",
"github/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"github/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"github/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"github/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"github/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"github/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"github/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"github/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"github/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"github/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"github/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"github/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"github/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"github/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"github/.git/index": "826684bb4c4134968d5055b2058369f7",
"github/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"github/.git/logs/HEAD": "ec768e2cf756138c6b3917f94fadedab",
"github/.git/logs/refs/heads/main": "ec768e2cf756138c6b3917f94fadedab",
"github/.git/logs/refs/remotes/origin/HEAD": "13a5d4007bbdced918a674a788203cc9",
"github/.git/logs/refs/remotes/origin/main": "a9a4e490bcf84378213e2f22f2764700",
"github/.git/objects/2e/02ea459b681d95a317865800f4ee6fac17d934": "e00ea1267289ef6281a1f5cf3e65ffda",
"github/.git/objects/a9/8bdd15cbc0e4237c58143cea639116aa59197e": "b07ed273eff2a3e69717629a4f8b7c40",
"github/.git/objects/aa/b40016c9bf1c9736ade40e503f703fab64580f": "8352860528db5a633ab6d1ba57564749",
"github/.git/objects/b9/14bd4fe6a7f9ea31093a4dbe7303f2037ed607": "37cc76dd9c0832ce3c6a62ff816d8998",
"github/.git/objects/d1/99c41d6a3d665ed423280e40b066586f3b3dbb": "0a1dd4b48c13f6a8cf0100435662a548",
"github/.git/objects/pack/pack-5a0a72a56c3b5883f84b3f92b4c7e0afca71bed9.idx": "a08df0a524f12b122b48442bb3e1ce44",
"github/.git/objects/pack/pack-5a0a72a56c3b5883f84b3f92b4c7e0afca71bed9.pack": "3e197005998f6be53da3e11c494b406f",
"github/.git/packed-refs": "d4fcb0409106c4ef6361ec9b7e810595",
"github/.git/refs/heads/main": "a90f4b58cfae2e7f3a6897ca6a3b1cd9",
"github/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"github/.git/refs/remotes/origin/main": "a90f4b58cfae2e7f3a6897ca6a3b1cd9",
"github/assets/AssetManifest.bin": "136a89384f8fc2b7a3e43afb2aa825b7",
"github/assets/AssetManifest.json": "5fb01e023c1e528b8fdea2e628e9c696",
"github/assets/assets/balloon.png": "72e01de43edb30eb3cf2f2f491855b74",
"github/assets/assets/divertissement.jpg": "9f16a5d69e9e6fe0aa591bf1f59564c8",
"github/assets/assets/dommage.jpg": "ee429e24a25c1a50df25de0cde6abd50",
"github/assets/assets/gagner.jpg": "fc5948cd2d2e6b8820b6cb2999451d5f",
"github/assets/assets/geography.png": "34f52a272717179daa44d4c5273c1181",
"github/assets/assets/histoire.jpg": "d991b648ee059f7c8eed86985f7219c3",
"github/assets/assets/questions.json": "c9a4659979088f467004f8872d01f61f",
"github/assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"github/assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"github/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"github/assets/fonts/MaterialIcons-Regular.otf": "ad752f482caa82453d146a2d518109c0",
"github/assets/NOTICES": "a79434aacc0fe4eb0395b811dea46b23",
"github/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"github/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"github/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"github/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"github/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"github/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"github/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"github/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"github/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"github/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"github/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"github/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"github/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"github/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"github/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"github/index.html": "5c07067085487b0bcc4f190bab3b4240",
"/": "54661620c48b91d15e92b59d7f371df8",
"github/main.dart.js": "8428996fe0dba789eeef57d841496afa",
"github/manifest.json": "6cb202965e841b2c6d822bba838b56c7",
"github/version.json": "223f25c122b550439faf26334850b856",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54661620c48b91d15e92b59d7f371df8",
"main.dart.js": "daa37aa0eeb347d279baa32f357fbaa1",
"manifest.json": "6cb202965e841b2c6d822bba838b56c7",
"version.json": "223f25c122b550439faf26334850b856"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

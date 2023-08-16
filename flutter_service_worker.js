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
"github/.git/AUTO_MERGE": "baa5d4fe8d746d3acb819313f60586c4",
"github/.git/COMMIT_EDITMSG": "ed76cc5eceda213a7b191159d4f4e6e5",
"github/.git/config": "125213845b910558ada049d25a0fc3f5",
"github/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"github/.git/FETCH_HEAD": "0884c303d43e2cb856867f0747d85c74",
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
"github/.git/index": "a64c9fc7a4d6a202cbc29210985b46d7",
"github/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"github/.git/logs/HEAD": "64ea025f847562204457117afb88d571",
"github/.git/logs/refs/heads/main": "64ea025f847562204457117afb88d571",
"github/.git/logs/refs/remotes/origin/HEAD": "1fac843b47585e477b0c7ea48a83ede6",
"github/.git/logs/refs/remotes/origin/main": "28653146337ef670c106feca04f556c8",
"github/.git/objects/0b/e7bf0086bc3cb017588ecf9b161250cabb338b": "6e51c60a67e92fc3087b1a6f646b9d9f",
"github/.git/objects/1f/2d63b7238e9eae5945121059238ab8ab48cde9": "9a7a2d4a10df9d8c5352fd0d769b98f9",
"github/.git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
"github/.git/objects/32/b7fc9b96ae50287906ab0c20311b69e55e90de": "5e5e7f6d951b2f96cb0a65473de810b7",
"github/.git/objects/3a/83b95808c6d2efae2610c4f403ed930495e382": "0cffb6ccaaa9cd7b0974cd81418bb88e",
"github/.git/objects/6e/acdf42bee4896b79dc2d93523c220c0db40793": "8d5250724c4bdc4f08136736bee4364e",
"github/.git/objects/b5/f2fbe60a597c09a42bc15b1199a20354c56f36": "8e858cbbd65ba3e3c4cdb68fa1c3c950",
"github/.git/objects/b9/31e2f68109bf0aaa252a67c9719f7031af1da9": "9d3f9933f4632f09e8b19540ee289b86",
"github/.git/objects/ba/f330929a9bedaf7e3d25811e5ddd055ee22f91": "15ad5e5bc92bd42d0e923924eb481df7",
"github/.git/objects/cd/82f3526a5f97b0b184813d7b8a1bf83dac45a9": "265ab1028940222cff34c26011f2b441",
"github/.git/objects/fe/b8c579652f9a2e69300981fcebd110e5bf259b": "6c1c6bcc2ca4e70e6b35033aedbdb71a",
"github/.git/objects/ff/166a8b47e393f90018dd61343819aefc70edb6": "1325de95563ab36023d5dbab839c8bad",
"github/.git/objects/pack/pack-7377a8b8cb201f1419f59caf1f0e739224f1733c.idx": "0ca839d8accba2c1b6cb490499ef3958",
"github/.git/objects/pack/pack-7377a8b8cb201f1419f59caf1f0e739224f1733c.pack": "c82b3eefed9f3a9528e51904d3e6090e",
"github/.git/packed-refs": "1e98ce9abac98f070d5d73b34784183f",
"github/.git/refs/heads/main": "7bdf02fd387fee752471f5c2e8dad3bc",
"github/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"github/.git/refs/remotes/origin/main": "7bdf02fd387fee752471f5c2e8dad3bc",
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
"github/index.html": "7ed59f0ac028d2f9f9f9552fb9566c00",
"/": "d4b092a36587fc78801a80a09816659f",
"github/main.dart.js": "4212d075c025d63e13b299e764fc4242",
"github/manifest.json": "6cb202965e841b2c6d822bba838b56c7",
"github/version.json": "223f25c122b550439faf26334850b856",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d4b092a36587fc78801a80a09816659f",
"main.dart.js": "6f34accf387e8fd843d408b724ed7083",
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

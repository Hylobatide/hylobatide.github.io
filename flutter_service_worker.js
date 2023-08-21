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
"assets/assets/questions.json": "ae77bea5b68e0577ee88fee20b18c787",
"assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ad752f482caa82453d146a2d518109c0",
"assets/NOTICES": "b5640aec529e732efba637205c550a41",
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
"github/.git/COMMIT_EDITMSG": "02cbaf8a2cfc41b7fffb4602e781264d",
"github/.git/config": "48125470ada7631674f797f5b38b0b2f",
"github/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"github/.git/FETCH_HEAD": "c6d6f8003cdd8484c31702cd0b414f7b",
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
"github/.git/index": "a2babc23ee390f4716080b61bc390dbc",
"github/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"github/.git/logs/HEAD": "3c3d0ec9e16a91f0efd2f19940b1cfaa",
"github/.git/logs/refs/heads/main": "3c3d0ec9e16a91f0efd2f19940b1cfaa",
"github/.git/logs/refs/remotes/origin/HEAD": "e5072d106938d0d50e18b4f73fb560ee",
"github/.git/logs/refs/remotes/origin/main": "33c91f41f6e7187665477afd990c6e4e",
"github/.git/objects/04/1db29a032b2936b780af1d73d2252817ccf8f7": "ebbf68ccb42b44335d7842f69010788e",
"github/.git/objects/06/dee55b4c96d173a391f0cb01891cb85dc7e3c7": "3ef0c7ef2946048445fee11357720f4d",
"github/.git/objects/07/4305ac9fb0eb5e6114ed38c4aea6fa6136f7a9": "7dbd8ca256b7aceed6f657f197374ca6",
"github/.git/objects/08/14a92a5c2213a492c1ffb847fe2e8752667904": "c49db27d01d31e8c575db5d5ae80782a",
"github/.git/objects/08/db10fc5442faa55389779e5b135bd9209aa174": "075205336ba534144b40e47a637501ce",
"github/.git/objects/25/a283a476b259dc708cf36f1399e592862b61e4": "8eeb3aacfd31d45ecd675801839f9266",
"github/.git/objects/2e/02ea459b681d95a317865800f4ee6fac17d934": "e00ea1267289ef6281a1f5cf3e65ffda",
"github/.git/objects/35/ea2a0795769d86a6108268a6c971744db629f3": "d819936598c7260e612b596c3ea43579",
"github/.git/objects/38/b979cd0e4687b74058e1552f997a2c2d01d26f": "711fc13f36a4579ba47652090ff0d200",
"github/.git/objects/38/cde5d61496c89bc0272953054cae83d3ecb8b5": "4306b9ced465f9ac5fe47f1ed2d5a248",
"github/.git/objects/47/a0d7f12efb5bb857afda317ecacc4ea06c5442": "988ae9acb73934428922e1b2c1d70c02",
"github/.git/objects/4e/03c76375401e5b62292cab813ab4a35139d0fc": "d09749ca6cb3e378eec00b4e6230db69",
"github/.git/objects/57/7bbe03f2853ade4195da21212d7b75431fc4af": "91f563a35c60a1fb9aa3f4710c77a2a7",
"github/.git/objects/6f/566a88fea03771b0404258f83bf683a2a86da4": "afcb495ab4851884c05d260118341d23",
"github/.git/objects/6f/db06b7afed411db9cbbc034140fcb5f4a9c515": "8d1c2a7f246441f01b0a86bd6c1f7b15",
"github/.git/objects/75/0fd4501d4d47d5661a9b92536fa0dcd025cdcb": "d29b1667406561058f50c67a42e38d2a",
"github/.git/objects/7d/47f606c7d248a03125cc4797648f5f8986106f": "a609f9dde4e379447a4d1ad9cb410cda",
"github/.git/objects/8a/e5894147ede033be134488b5e1adf8226167fd": "ab8d33cf27947a2527cfa592e4b68176",
"github/.git/objects/8d/ef9ecbd6330e57f51e633ce021e27d1f4f0c28": "0543fae063a27a8f455ca8a234754bf4",
"github/.git/objects/a0/8c5cd360a1bc5dd00851b38fb2db6a27cedade": "8e43f1d241303ed1c3d4bcba3d6d872b",
"github/.git/objects/a1/e4607363d00db53a813a364b51e3383db7c686": "cf3d2b5808d208c41d8dd1f12ac00c47",
"github/.git/objects/a9/8bdd15cbc0e4237c58143cea639116aa59197e": "b07ed273eff2a3e69717629a4f8b7c40",
"github/.git/objects/aa/b40016c9bf1c9736ade40e503f703fab64580f": "8352860528db5a633ab6d1ba57564749",
"github/.git/objects/ad/e631d9b08200794f6e671691a1a0a5703159c4": "f0f08d9c69e2110cce794e43a9881302",
"github/.git/objects/ae/6ec6d2fdde9a34782b6ca03daa712a2a5b04ca": "c4a4ea86578e6ccdab51f171689462b2",
"github/.git/objects/b4/ef55b8741f362a7a92d66177f7843afc028fa7": "06de081b92ac1106146158f68acdd6d7",
"github/.git/objects/b5/8289a49101777cdb7ee091033b0ac1f02d923c": "6d707467cb4a6ccbd8622d61fd7cbaee",
"github/.git/objects/b9/14bd4fe6a7f9ea31093a4dbe7303f2037ed607": "37cc76dd9c0832ce3c6a62ff816d8998",
"github/.git/objects/d1/99c41d6a3d665ed423280e40b066586f3b3dbb": "0a1dd4b48c13f6a8cf0100435662a548",
"github/.git/objects/eb/ee865388156279e572b017a3e997d1fdbd032e": "c5c58cebef09bc2126045d2f36383a2f",
"github/.git/objects/ec/8768540d7cbba5f4c3e66f9a27c0ee6b7db381": "9e0a388422979861523b0422ed4c77d3",
"github/.git/objects/f1/ee482cdec260bb40c2cb472f2e19385692a905": "53a1f6f75e239ed723a7eecb5d8a5a5e",
"github/.git/objects/f3/599ce2510b3ffc7b562410c750463a942b357c": "5a9ced7983007dddb0f75346c495fa7a",
"github/.git/objects/f4/7df8d5af54e80f7d15fcebb8ea781175177049": "9c8524d6f1cc77e95b2b69e7d257a674",
"github/.git/objects/pack/pack-5a0a72a56c3b5883f84b3f92b4c7e0afca71bed9.idx": "a08df0a524f12b122b48442bb3e1ce44",
"github/.git/objects/pack/pack-5a0a72a56c3b5883f84b3f92b4c7e0afca71bed9.pack": "3e197005998f6be53da3e11c494b406f",
"github/.git/packed-refs": "d4fcb0409106c4ef6361ec9b7e810595",
"github/.git/refs/heads/main": "58c7418d3c9edef50acb0020dd42738f",
"github/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"github/.git/refs/remotes/origin/main": "58c7418d3c9edef50acb0020dd42738f",
"github/assets/AssetManifest.bin": "136a89384f8fc2b7a3e43afb2aa825b7",
"github/assets/AssetManifest.json": "5fb01e023c1e528b8fdea2e628e9c696",
"github/assets/assets/balloon.png": "72e01de43edb30eb3cf2f2f491855b74",
"github/assets/assets/divertissement.jpg": "9f16a5d69e9e6fe0aa591bf1f59564c8",
"github/assets/assets/dommage.jpg": "ee429e24a25c1a50df25de0cde6abd50",
"github/assets/assets/gagner.jpg": "fc5948cd2d2e6b8820b6cb2999451d5f",
"github/assets/assets/geography.png": "34f52a272717179daa44d4c5273c1181",
"github/assets/assets/histoire.jpg": "d991b648ee059f7c8eed86985f7219c3",
"github/assets/assets/questions.json": "ae77bea5b68e0577ee88fee20b18c787",
"github/assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"github/assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"github/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"github/assets/fonts/MaterialIcons-Regular.otf": "ad752f482caa82453d146a2d518109c0",
"github/assets/NOTICES": "b5640aec529e732efba637205c550a41",
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
"github/index.html": "af5ef7a55ec0bd1475a1757c6b493f4d",
"/": "3ab637550b0cd6fc7260893db98242c5",
"github/main.dart.js": "74237e33b969ba1ac41c0795f86cd4f0",
"github/manifest.json": "6cb202965e841b2c6d822bba838b56c7",
"github/version.json": "223f25c122b550439faf26334850b856",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ab637550b0cd6fc7260893db98242c5",
"main.dart.js": "767316b7f67029511500372730c92d17",
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

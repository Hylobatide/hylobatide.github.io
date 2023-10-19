'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "19ea4be19f85269794012bf44ae622f1",
"assets/AssetManifest.json": "9b5d1ba7d6e7ad0ae0e392e2afe56a2c",
"assets/assets/bravo.png": "1ce2f1bcf5b4c697089cef557d25e44e",
"assets/assets/divertissement.png": "9f0a52f8109fa56e41f101a948435693",
"assets/assets/dommage.jpg": "d9cfb9342571dfa2d0b91e28f138e4e2",
"assets/assets/gagner.jpg": "90e91922f99d9fef7d4bb610b1718ec1",
"assets/assets/geographie.png": "d9e609dd4886a8e4cd097e860148c47d",
"assets/assets/histoire.png": "a41038872fb32094cef75c738f7f20a0",
"assets/assets/questions.json": "fb07328bceb4fcbaec088b9c33407b13",
"assets/assets/sciences.png": "381a10e98ff6d365107768c57de55d64",
"assets/assets/sport.png": "3da45b3924ac241d8703adb7cf823ad5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6888ae52a915bf5e0bdd8aeffb7c0ea1",
"assets/NOTICES": "bada05a2396320feb7901ce3c626682d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "fcbe29ae38b78b799e221cdc5dd0d096",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"github/.git/COMMIT_EDITMSG": "a83a0e0188b72d229bde23074f4feafc",
"github/.git/config": "48125470ada7631674f797f5b38b0b2f",
"github/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"github/.git/FETCH_HEAD": "0c2c38d057f9e339abe2b1b48477ce59",
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
"github/.git/index": "87582a84681113877421fb839529cbd4",
"github/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"github/.git/logs/HEAD": "2ecbccb8062f0e14ad7e0f27c05b59e0",
"github/.git/logs/refs/heads/main": "2ecbccb8062f0e14ad7e0f27c05b59e0",
"github/.git/logs/refs/remotes/origin/HEAD": "1bad669779d2fa4cd3770eb67242616b",
"github/.git/logs/refs/remotes/origin/main": "848571ee8a59625091ad60729fb56ede",
"github/.git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
"github/.git/objects/08/5a1dde5a51e65f3392330af19cded536bf464f": "780e73bb965ce3afa414857fb1570ec4",
"github/.git/objects/09/f8fbbff3b7c76e87e74a1474680e5b9bfd155f": "b8a2a10f9eff29e56b1281bc6769c52d",
"github/.git/objects/1d/bf0d9b43d22f7b71d76b160733e9a7e7a0c611": "cf3f610dfbd1a0c35419cc767dc75dbb",
"github/.git/objects/21/fc765d9a635ae91198ad17fa50643df2db9933": "c2c2753c72d3b650a1e63e6350c780a2",
"github/.git/objects/22/ccc9a86c16e057e30a84573047a34e4fc5cbc5": "5edfc75f808bc5cb81854bc12253f747",
"github/.git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
"github/.git/objects/3b/0d34a0e645876181cdf2d4676ac56dddd7c9a5": "1c999edad8ba626a78115131f097504b",
"github/.git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
"github/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"github/.git/objects/5e/271466a9eeb6fa060dd8404683de5b2581b5e2": "6b1a114b1a7414c349fa17fbbdc77d26",
"github/.git/objects/63/a55bbd6b4d6ee97f34453334b46f47d9dfd1cb": "91b46203fd22c73572096cef89f746dc",
"github/.git/objects/64/bb5fbbbe830eb5b6a035aa89e019ac50cd65c0": "a228ca18a91d6277a011718f5a7a1581",
"github/.git/objects/7b/75c53e1a20e6b1f570defb47f444b638f3e780": "241653493598b4a4ce3719e5c94b21e2",
"github/.git/objects/82/4acb32f1c568717e99fa9fd1598781d9b5ee63": "044b9acc28a8997654b5320353eb4d93",
"github/.git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
"github/.git/objects/87/c2396ab0cd7d4445a8437b88fe01d4a4349de5": "4ee3feaa04c7f1a8593e8f04cf035ef9",
"github/.git/objects/89/7ce81daaaccecb5ad3f426bb4580cf859c442c": "a17d728bc52737729e94213fdee6247a",
"github/.git/objects/94/290e781c7cbc154c702b1450a879f7ad75b326": "f360e5f92a61019be62d2ebc2eaeb036",
"github/.git/objects/94/ac4ab53cf144355e9a7d831411cae663578ce7": "75ffad515a62a751ca42a7ada30e2b80",
"github/.git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
"github/.git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
"github/.git/objects/a8/b0f53c8054064984cad38fc10402a904d90b45": "a7fb096a34bc06dc37057463abd3afdc",
"github/.git/objects/aa/5cb1dfc83856f88de643fae1fcbb08aa4c28f6": "9b451c3454306fb75090c52b607d8d0e",
"github/.git/objects/c2/ac4b7df75ead305c526d430055f7a677f33fb0": "a712dca29dc69f3eb46ff25ccebae376",
"github/.git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
"github/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"github/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"github/.git/objects/df/c1199e8930b788ba632fa06a7c345e28ef7ffe": "76cd5f33ca041bcaac7457312a51836d",
"github/.git/objects/e1/4bdf0f885c7dea7e056d21f9433c30cc527d9c": "47985c974553517d25bd2e3433399f70",
"github/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"github/.git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
"github/.git/objects/eb/dd7378f6f4e059ad381f82a37d33f58ae0f17e": "4a2976b5cae718b00adae508ec88fa81",
"github/.git/objects/f2/af3cf0874f1f90273e469660900663f84d2229": "2c9b76a84849a4330282d1d4bbfaa29c",
"github/.git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
"github/.git/objects/f8/34429826db8ede6405045ec1bf540c805fa699": "dbd9c378e887bf5a15f578f069fb1184",
"github/.git/objects/f8/9c8d516d77f6db562a043e4f4d567b0db90a06": "0ff36a775e7ef6d5a64a913e028eaad1",
"github/.git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
"github/.git/objects/pack/pack-19405ad76366dd405510859fa5dca03690b7ebbb.idx": "7166185eb58b870cfdceb3eaba95de3a",
"github/.git/objects/pack/pack-19405ad76366dd405510859fa5dca03690b7ebbb.pack": "1018074ea2c7143e2f47e078950a1760",
"github/.git/packed-refs": "da61e614fc0a0acb064c8c4cf0133d5a",
"github/.git/refs/heads/main": "fb8796dc5076bc9420ccdbf0bc6f1507",
"github/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"github/.git/refs/remotes/origin/main": "fb8796dc5076bc9420ccdbf0bc6f1507",
"github/assets/AssetManifest.bin": "19ea4be19f85269794012bf44ae622f1",
"github/assets/AssetManifest.json": "9b5d1ba7d6e7ad0ae0e392e2afe56a2c",
"github/assets/assets/balloon.png": "f096d9770365afb4ac0e603f91b59f67",
"github/assets/assets/bravo.png": "1ce2f1bcf5b4c697089cef557d25e44e",
"github/assets/assets/divertissement.jpg": "9f16a5d69e9e6fe0aa591bf1f59564c8",
"github/assets/assets/divertissement.png": "9f0a52f8109fa56e41f101a948435693",
"github/assets/assets/dommage.jpg": "d9cfb9342571dfa2d0b91e28f138e4e2",
"github/assets/assets/gagner.jpg": "90e91922f99d9fef7d4bb610b1718ec1",
"github/assets/assets/geographie.png": "d9e609dd4886a8e4cd097e860148c47d",
"github/assets/assets/geography.png": "75f176bb5c275f53deadb613b3f771a2",
"github/assets/assets/histoire.jpg": "d991b648ee059f7c8eed86985f7219c3",
"github/assets/assets/histoire.png": "a41038872fb32094cef75c738f7f20a0",
"github/assets/assets/questions.json": "19def812cd975b665f3396a07b07c8cf",
"github/assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"github/assets/assets/sciences.png": "381a10e98ff6d365107768c57de55d64",
"github/assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"github/assets/assets/sport.png": "3da45b3924ac241d8703adb7cf823ad5",
"github/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"github/assets/fonts/MaterialIcons-Regular.otf": "70604f70ec8f9c087956a551c95e8321",
"github/assets/NOTICES": "0674fb14fbcd55cb15caba060c45dfdb",
"github/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"github/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"github/canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"github/canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"github/canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"github/canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"github/canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"github/canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"github/canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"github/favicon.png": "fcbe29ae38b78b799e221cdc5dd0d096",
"github/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"github/icons/Icon-192.png": "8dac47c146659962a3ec571d2002d2b1",
"github/icons/Icon-512.png": "408d60ae3c8f1d151fd6450d2eb05d4b",
"github/icons/Icon-maskable-192.png": "8dac47c146659962a3ec571d2002d2b1",
"github/icons/Icon-maskable-512.png": "408d60ae3c8f1d151fd6450d2eb05d4b",
"github/index.html": "1a3059cc6c61974291825dcc991aa844",
"/": "b3aa1997ff9b9238f48c4bb06a75bbaf",
"github/main.dart.js": "5ed6b838e8e8d05c0d6e9674376df8b4",
"github/manifest.json": "6fe2ab37b82cd1f6d7f95e6a406875ae",
"github/version.json": "223f25c122b550439faf26334850b856",
"icons/Icon-192.png": "8dac47c146659962a3ec571d2002d2b1",
"icons/Icon-512.png": "408d60ae3c8f1d151fd6450d2eb05d4b",
"icons/Icon-maskable-192.png": "8dac47c146659962a3ec571d2002d2b1",
"icons/Icon-maskable-512.png": "408d60ae3c8f1d151fd6450d2eb05d4b",
"index.html": "b3aa1997ff9b9238f48c4bb06a75bbaf",
"main.dart.js": "8aca24cc664ecb939e34856e370ef90f",
"manifest.json": "6fe2ab37b82cd1f6d7f95e6a406875ae",
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

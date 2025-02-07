'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f85898938870e890211c935de4c2c6b",
"assets/AssetManifest.bin.json": "27d58c99961146342072a8b18ee7395c",
"assets/AssetManifest.json": "3a422c351be10485f612c093338455b9",
"assets/assets/animations/Animation%2520-%25201726836258049.json": "1ebc993ef1e9957b94c7ed4ff6782538",
"assets/assets/animations/animation_1737752834969.json": "74a1d401a2c88766491876dafe993eb1",
"assets/assets/animations/loading.json": "1ebc993ef1e9957b94c7ed4ff6782538",
"assets/assets/animations/sand_timer.json": "b174a7b1ba52c5879f8e033ed9995681",
"assets/assets/categories/assortment.png": "ccfefc9db15444b140830e9fcfc7687e",
"assets/assets/categories/assortment_selected.png": "a4fa9a0e7a6a4c3a79a1d7670f5c2491",
"assets/assets/categories/baby%2520verzorging.png": "5e97f3212f9525e933ea68360ad3bcf2",
"assets/assets/categories/baby%2520verzorging_selected.png": "21f27ec281660891fc1d2ec858d30b4f",
"assets/assets/categories/box.png": "b62b8c5bba048fd41da2012e0a809156",
"assets/assets/categories/box_selected.png": "825e6a660ca699f318a32d52a5ef1ecc",
"assets/assets/categories/dierenverzorging.png": "4b3bca15efdec792dd30f3194dd90e95",
"assets/assets/categories/dierenverzorging_selected.png": "781e6a8ce771c2e156540431b6f1c2cb",
"assets/assets/categories/dranken.png": "1267a24d77d4e6e1b0679abd3bcbf9b7",
"assets/assets/categories/dranken_selected.png": "be5b0edc23e69e827f01ddf954ee56c9",
"assets/assets/categories/koel%2520en%2520vriesprodukten.png": "6659db7ea2e21840d0792905339f05a3",
"assets/assets/categories/koel%2520en%2520vriesprodukten_selected.png": "2b25c540bca25fe76f91a9b005e5a584",
"assets/assets/categories/levensmiddelen.png": "5e201a77a47f930258bb73529ce984a1",
"assets/assets/categories/levensmiddelen_selected.png": "c003027e47a21d06ca1641f1d4135f4a",
"assets/assets/categories/other.png": "995c92cb5d6dbe86c21bfecb94f6e194",
"assets/assets/categories/other_selected.png": "719450a47f86ad599f9f553fc4f36920",
"assets/assets/categories/persoonlijke%2520verzorging.png": "e9b6c109d5cbdfa7c0f1ed2b33d5b366",
"assets/assets/categories/persoonlijke%2520verzorging_selected.png": "5f73a5f6fb036048d6c3a847bd737759",
"assets/assets/categories/schoonmaakmiddelen.png": "ce8167735da527a14dc868e1c954ee4e",
"assets/assets/categories/schoonmaakmiddelen_selected.png": "aaa7f0453d335ca29fab78ff66e8dc9e",
"assets/assets/categories/suikerwerken.png": "5807fb4ab68bab0c32dc22df58d7bc38",
"assets/assets/categories/suikerwerken_selected.png": "09fef9a349a1bd21c5c27164756f94f5",
"assets/assets/fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/assets/fonts/OpenSans-Light.ttf": "c87e3b21e46c872774d041a71e181e61",
"assets/assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/images/CGFS-Horizontal.png": "08471bbefc51070e9f57cde8504ee156",
"assets/assets/images/CGFS-Symbol-Only.png": "a171f242a53babb1b9fbb7fe4bfc10d8",
"assets/assets/images/Credit-GFS-Logo.png": "9bf4e2547ac39c0df4ce61c895a52059",
"assets/assets/images/flutter.png": "f884ebfeac3e403573c1ea22ef383c65",
"assets/assets/images/induction_logo.png": "301a7604d45b3e739efc881eb04896ea",
"assets/assets/images/java.png": "2521ccb32fb29c2a872b5bc75538976e",
"assets/assets/images/kotlin.png": "0d21e233a0d2b0cc910eda382fc66ba2",
"assets/assets/images/LI-In-Bug.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/images/LI-Logo.png": "c24cde2827448f08d40afd6909011e16",
"assets/assets/images/logo.png": "189b2f3d00e31fbd6d8fd8b8c79374e5",
"assets/assets/images/no_entries.png": "cf93f40ad2ddcf4f224fa768f680faa1",
"assets/assets/json/response_1734027976742.json": "364a9ad674c93f7336ad491b2402f5e7",
"assets/assets/svg/Android_Studio_Icon_3.6.svg": "2de20858e59f3f42a5f7de70bfb0855b",
"assets/assets/svg/arrow_backward.svg": "cceca6e1f13f670a9a19becfd716a508",
"assets/assets/svg/arrow_forward.svg": "43a1d7a165bc81c9b08b9da8aa73784e",
"assets/assets/svg/cgfs_horizontal.svg": "99fc9afaa16ec16fa49e315365272698",
"assets/assets/svg/cgfs_symbol_only.svg": "6e380abcc3ca1f7ad14c67237359f6e8",
"assets/assets/svg/credit_gfs_logo.svg": "55e2b82617867ea834bf8c7e8a20d9f2",
"assets/assets/svg/credit_gfs_logo_pattern_flat.svg": "782f689fc220d0ced1c32f88af32f0d5",
"assets/assets/svg/Dart_programming_language_logo_icon.svg": "ef26b12cc0b34cc83dfcde04e8bb1ea1",
"assets/assets/svg/Flutter_logo.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/svg/github-mark-white.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/svg/github-mark.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/svg/gmail.svg": "757301df1504ba378fe9df56ea4dc0b2",
"assets/assets/svg/gmail_logo.svg": "9dbc79dab48422c821c75bbfc21165ec",
"assets/assets/svg/Kotlin_Icon.svg": "fe42529a71a6eaa74e7254926f1cfc5b",
"assets/assets/svg/objective-c.svg": "bb9403c57a4391464b0fff715a2cd226",
"assets/assets/svg/Swift_logo_color.svg": "da81c9c97f3b02541c634b5e712eeaa1",
"assets/assets/svg/Visual_Studio_Code_1.35_icon.svg": "a0f33ad8ad533f1dd3a77bf2f100edae",
"assets/assets/svg/WhatsApp.svg": "4025a2c2826def311c3b73dfa38a9b20",
"assets/assets/svg/whats_app_logo.svg": "4025a2c2826def311c3b73dfa38a9b20",
"assets/assets/svg/Xcode.svg": "7333bec1d029d4a1f504aa9725d18ca1",
"assets/FontManifest.json": "67dd45d9290ddd5a1310051cc328a852",
"assets/fonts/MaterialIcons-Regular.otf": "d6fb359d9afe7223d98290a714933062",
"assets/NOTICES": "047bb6568a69bf54ad7225fa9ec88548",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "93e9702b0fd5e8713d6402e92aef6660",
"favicon.png": "c089e737f11010e12a211bc560bbd838",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8313de5c8029329eada9c27eaada5fd7",
"icons/Icon-192.png": "b7e035db873c31a33fb676711f076bbc",
"icons/Icon-512.png": "a46b04103e109a6803b4ca4cb91b6e9c",
"icons/Icon-maskable-192.png": "b7e035db873c31a33fb676711f076bbc",
"icons/Icon-maskable-512.png": "a46b04103e109a6803b4ca4cb91b6e9c",
"index.html": "c199ad3bbae30c9dd0c00431f7dbf358",
"/": "c199ad3bbae30c9dd0c00431f7dbf358",
"main.dart.js": "5108716c92954e34b2d6d2f0e80a0bc3",
"manifest.json": "810e8dd8d7735453579f1fdc22241417",
"version.json": "d8f465f8c500e5f9d153877ae5501d50"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

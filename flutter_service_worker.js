'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "129e3c44d1c0d09a343fc59ec786c7fb",
".git/config": "6cbb99ecbf4c2b2336db6332611f4975",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ad8fe3e1929c04e0ff67255127a5efeb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "60db782339e57dd626b3dd44c86886a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88e6d624f4c0f4fba6a9d846db5e7292",
".git/logs/refs/heads/main": "a2f0701494ed9947b55c88d60bdcf809",
".git/logs/refs/remotes/origin/main": "45890d6dc67a49bd087c81a9effa131a",
".git/objects/00/dd3236faaaf085ff920ce9613178ad5f14a848": "a66225074ed7d86b84954f7a04b8074c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/e618aa5db814251b0fa9c275ac9e207f20c91f": "6454a5cec13a77242ee4c454e37ee6e3",
".git/objects/06/ee826dea02ebabfe1151a99c163e2f60b4ccd3": "113974ef81adeb97b087ae41e32d002b",
".git/objects/0c/affb26a1d7e47fa3d867e5cb8f4f479b556c49": "91f82039686680b312ba6834d82b2ff9",
".git/objects/0e/855f6d9fd74f16e781493dc6634e64a9b7cb97": "430921bc97040e0b6a4fa7e9c921d3b0",
".git/objects/10/6e36fb16196f8eb29ed6714ba2ce566c046ddd": "172278ac2fe28a7437fda0123509a39c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/d773afae668091b42379e91400ee863427ec3a": "84408012a4f0ea125e9d84d1f7ae013a",
".git/objects/14/ebc36158f9b63c0f240f727423a3a923203e2c": "90593651b1d44f03917a4e775052f5c6",
".git/objects/16/0d55ae37006d8a8fecbf0ac7c6a6d6e21660d9": "5f7f788a87dfdf1c59f028952a707764",
".git/objects/16/6689b557efb3c4fd4c5a73f6d7c7b7bc370b0a": "4f1554102b68bcf8036a96e9dfbbb821",
".git/objects/1e/a8ea38938a736c2a3e5e7a3c365c9ffd995290": "cb4a5dc9dbfe270f6a2e0d88afcc3f5b",
".git/objects/21/baaba283ac4f81e94a431623a0c74b1cea875d": "d0e1cc003ff88ff28c4641591c953de6",
".git/objects/24/0d8d096d2cfd487f52c5e40481fc2d2a9eb76c": "4a3ac1e9c4caf6c75407a1900963777d",
".git/objects/28/26962badb947c7de3b008745683c001965168f": "3621bdbf18c5716cf1f95efa9da9acac",
".git/objects/28/aa6716b4215aa10a74143a72d0573aa77e9634": "f3eccd5e044b6cad5912b9d918733d2e",
".git/objects/32/7016e04ef1401cedab1a50aa1c56ccebf8fa78": "051687fe7e5309a56da2e12a994e5e8d",
".git/objects/33/0ac02a9834233c384a3c95358b5ba05b612aaf": "876ad2cec29c12415fff5ba02ea6d70c",
".git/objects/33/5a2b27057db76c6e1a1d84cec921b1a7103d23": "5cfa4f415aabca60e4ec4d705633b4c5",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/a633bb90f119d5fd9b894dbd32fbd24890eca6": "7d7d9ab940451cec4f4e76d5cae4173c",
".git/objects/41/c0b0c361234aa4d432528e90c0bb4654cceb8f": "5db4c659bfe60be1823e377fcb6c96a7",
".git/objects/42/25039f145fcdb171dec74057707ef8de0fb420": "5e8ab77af4e2dc40951b234a3aa4e9cc",
".git/objects/45/485b1cfb9eef12559ff22be875c6bd1ed78cf6": "1411029608ab7749a585295abf88f2f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/bd67031e9e11968e5866a49c0e547d112b9c9e": "f9b27cf1876e74634096c16316ccedd3",
".git/objects/4a/664b326196926eb75beffac2470c377046e954": "87d3bd25501b10d5a909d56a32c59aad",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/2b2e4da4f37d29bc72c73e376da239497939eb": "c9fa0f9c021bd0c5d94d4910ad4e7828",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/15a1aefe7d33b9a837fd17f0996954fdee67f3": "52da1e2fc77f6eaf6b33017cdbadd309",
".git/objects/66/9bd7746e6ff0a76d62db9e1547cd94314d94a1": "5a75f34e163112ac9ea98f4e5e17d9f8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/96e56bfdabd34ab7d695129b0f7bc00221a78c": "5ebcba57785fb47589b9cb85c93ffa4e",
".git/objects/71/b83b7fdc16c808d9c163b3771f6a143148d44e": "b618bfbc02bb9110220195cfc0532c95",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/ddda56e48d5028c6ab7c16bba94826ea0b707a": "479c37f736920dbccd60f75ada878e70",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/b68d9173fe01ad2aa15a3ae73bf5a554699bfb": "7eea92dee64c6797b10dcf28865a8b23",
".git/objects/7e/df79eea336a80536a7213946543e06742bb271": "52b7d5b95524a7da889ce3584395850e",
".git/objects/7f/8f230e7fdeba32b7d9f1964a488c95eb9c7084": "3fdd49742ed559264719e49a8d89fb62",
".git/objects/80/1e02443a93c48be77d749c8c6ed7f22607e7ce": "26ffd5eab0a5062aa130ffa7851da1ae",
".git/objects/82/cae05ec32bac9db41eea9618be7cefd66acd70": "02821e387a444285977e15589b37c210",
".git/objects/82/cb88a42c2115cb024a18b3399d0576aa6ce876": "4ac3cda85693c86e813ad5a30b722231",
".git/objects/87/b0b432673492c659cc249df81031ee371bd171": "a646b37bf35d494c4328a11a753985fc",
".git/objects/89/4901d50514384686718f5477d132cccec5fdb0": "b91cdbde1c5b2cd5a38683b9b4824051",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/e67d1c57eb636121a0ee1c8bbb238d680ef1e8": "f35725bcc7a361860ef23d8fb1f353a4",
".git/objects/90/bec66b2ff275846e0be3df61a47afd92fbc728": "ff2642044ac11b5fdb82d0343ba34ce1",
".git/objects/94/43525f60f5e69c00915acff60525fe7e23c49b": "fd7b966922abe39b457b7149059adc84",
".git/objects/96/a5c56a4c4e1b9128bf7ab7955f37a61237a358": "80cc3e2d97c94ece91775ec3eb313979",
".git/objects/96/bcd778ec2976ebee10942542c2756c295e46cd": "68d73415ca034a32f50e97f23cbb83a1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/96f3176db3275739c59b029f32d9c6dd434af9": "5608da6fe69c7c2bda8f06db3aaad1d6",
".git/objects/a7/de83d856c590a6307fb8926ebb5f452385f42d": "d5f522c8a8280b793414c970c64d70bb",
".git/objects/a9/0112dd0c07a094befeb69f3040dde0f5b78902": "0ff185f769d9c6d067774ace02366357",
".git/objects/a9/752467781ddcd95fb89880a4d829eea623979c": "085edc93575b1ed448a060ff2b843b44",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/78ceca80306aee0e95d7e612a1e77f611f141e": "55710f4d3dc2db8866ee6b7690c9d4e1",
".git/objects/b2/b3d86b2c728efbc871700b04a0dfc78ab7ede1": "26ba20b323a2366e4156639e19a751d2",
".git/objects/b3/59467f0a4105561c707b53c16f8289feb1e61e": "4a6a9649fb89dad9cf1cc21edbab125d",
".git/objects/b4/569a3cacf1cd5fb3e4a2859ce9501e8b0f72be": "b104be3e8b5450986adf19dae5a116da",
".git/objects/b4/82d0a6a5accdde2e5c61d76c71208527c58ca5": "f4cfcd89d1d09c0f7c2472d1e6a372fa",
".git/objects/b5/c03f419a427c96b550cecfd001eafe9961461d": "6eb58499b6d1099096c822e588d8cd99",
".git/objects/b8/e2369356b7b6233dd8adc5defbb61cc8850f43": "9900e90b710f1ed9863371b212f4a5ad",
".git/objects/bc/e84e9d786fa440867388715b0166e8e11d3ff9": "ca57130f89e4ad756495a90e829ae579",
".git/objects/c3/e34c43beaa4fd4b18fe8bb1a8a271711dd1f9e": "58604e9a374abcdf059a2ef32f310914",
".git/objects/c6/07d5673e647192277a008ea92567ce02a7108d": "d9efe0cc77d532f039d00d561ab20a2d",
".git/objects/c6/cd86f8a036db1ad8ee95368bb72065d877258b": "0767a9d869b642c9a45f54ad2ed185e9",
".git/objects/cc/4c0c1ea3b0eb5c5da91650b9e47bee12b67167": "d71b7f441547682051e87f5b0a309bfc",
".git/objects/d9/29580cc977612020885233cad76743086a1925": "56d1ab2b69a011083ed6cc96b0cb5fd1",
".git/objects/da/e864d7aaf53792ab77094972c7eab507e312e6": "87c7291d8c2476f72a03b6231bd9e200",
".git/objects/db/8bcfb234175aae9c76a2bb9eb21514c48348fa": "165dfe3e3bef57e65d2288392ccb9126",
".git/objects/de/e7a73e7e66ebfafa4d9fd401a3a161197b86f3": "76091275db5f1f783bf95880b01720e3",
".git/objects/df/97578228e5272ae4cb84259a7f0dc3b8ae9f7b": "6e991496bd70ceb1bfc263a32cc65abc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/5ab6bda32298f9eda077b7bbc84bf653b6f200": "29f25ac7739687922bbb88ff6b1f9e16",
".git/objects/ed/485241b5b4d0382e6f3bcede501aef1a2c5336": "c9062b688f9b6d4fcf3b0f3c29fa6e5e",
".git/objects/f4/e8d715539b63cdfe07b58a03f894ba5c7e7497": "ffe3c063b4318b7fc73b046e80526ea2",
".git/objects/f6/af9055f28e585dfa69dd3101bc500005b4ec9d": "687d38012b62a8ec2f2dd2c747ca8911",
".git/objects/f7/a95870aeaa367934d3e9f9f73d2a036f3254d8": "25f2b26ff5229904180b67ea2af3a406",
".git/objects/f7/b6b8022a7992b5f635d6c972d7b6662dedc65e": "e6c65a914e3aec0ffb9e8d6b6fc30c94",
".git/objects/fc/625a7a48b4513c0048faefd4effad2d66af7ca": "0366e72aa10cbb1eea3ac12acff3d35b",
".git/ORIG_HEAD": "b2076731ee3ea63feafbe04cc6e9e9ec",
".git/refs/heads/main": "acf5159bd22e4c7fd3fa3ab8bb93b9ca",
".git/refs/remotes/origin/main": "acf5159bd22e4c7fd3fa3ab8bb93b9ca",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7de9da7f7dd718630f9a090d59f52f55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "3720003282e44d7944b0d7da70bc6126",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "718117b4b10f707e24f1c2be9fd8b9fd",
"icons/Icon-512.png": "d59e0831427095d49d111c2fc9c31200",
"icons/Icon-maskable-192.png": "718117b4b10f707e24f1c2be9fd8b9fd",
"icons/Icon-maskable-512.png": "d59e0831427095d49d111c2fc9c31200",
"index.html": "dbc753b52b4488b5ee3ea97955e7de4e",
"/": "dbc753b52b4488b5ee3ea97955e7de4e",
"main.dart.js": "60d86db0f235a4301b387482cfb726a3",
"manifest.json": "e7643843da5f6f9f39867686cd65530c",
"version.json": "00f1bb692a557e15f9aaa411e2a9d175"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

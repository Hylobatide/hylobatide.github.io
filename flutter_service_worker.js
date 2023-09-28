'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "136a89384f8fc2b7a3e43afb2aa825b7",
"assets/AssetManifest.json": "5fb01e023c1e528b8fdea2e628e9c696",
"assets/assets/balloon.png": "f096d9770365afb4ac0e603f91b59f67",
"assets/assets/divertissement.jpg": "9f16a5d69e9e6fe0aa591bf1f59564c8",
"assets/assets/dommage.jpg": "d9cfb9342571dfa2d0b91e28f138e4e2",
"assets/assets/gagner.jpg": "bdcd83f0273c75b6d58830dc677ea902",
"assets/assets/geography.png": "75f176bb5c275f53deadb613b3f771a2",
"assets/assets/histoire.jpg": "d991b648ee059f7c8eed86985f7219c3",
"assets/assets/questions.json": "37df0aaa152963f5076a2b464c357de7",
"assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1d3e86ea6ae47b5fe8326eb297a587fe",
"assets/NOTICES": "3f5523585e0a786e0010c80bcefc05b1",
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
"github/.git/COMMIT_EDITMSG": "6bb9f6272d29d505f938bd2edb1619a8",
"github/.git/config": "48125470ada7631674f797f5b38b0b2f",
"github/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"github/.git/FETCH_HEAD": "80745c27431f9b0eefedfd2e7ae210cc",
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
"github/.git/index": "c4671b518701460b01f81f3cda47e504",
"github/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"github/.git/logs/HEAD": "74059b07b19ea9f9a3bccafe3862e1f7",
"github/.git/logs/refs/heads/main": "74059b07b19ea9f9a3bccafe3862e1f7",
"github/.git/logs/refs/remotes/origin/HEAD": "20797d893530541793855cb9143b660d",
"github/.git/logs/refs/remotes/origin/main": "1b4938956c10d10e434160cee37dbbd1",
"github/.git/objects/01/f1c791386883ae8bb476603669aae68f1d8886": "d2f4da0d60e0311eefa6d9c5d2992967",
"github/.git/objects/04/1db29a032b2936b780af1d73d2252817ccf8f7": "ebbf68ccb42b44335d7842f69010788e",
"github/.git/objects/04/49ca1effccfc545c4d10e5d8b10f38088a298d": "6123c24495fa754b3543f6ee455ac347",
"github/.git/objects/05/f3dc27ddbbe9a9e981e1d3db7502d1c9340dc1": "2509dfcd32e403194b4e0f2ee5f28b19",
"github/.git/objects/06/dee55b4c96d173a391f0cb01891cb85dc7e3c7": "3ef0c7ef2946048445fee11357720f4d",
"github/.git/objects/07/1602192a9fbe47ef111c68d75ec7a3babfd85b": "f6acd759b8c83f5fb32190915ca7753e",
"github/.git/objects/07/4305ac9fb0eb5e6114ed38c4aea6fa6136f7a9": "7dbd8ca256b7aceed6f657f197374ca6",
"github/.git/objects/08/14a92a5c2213a492c1ffb847fe2e8752667904": "c49db27d01d31e8c575db5d5ae80782a",
"github/.git/objects/08/db10fc5442faa55389779e5b135bd9209aa174": "075205336ba534144b40e47a637501ce",
"github/.git/objects/09/1d51fc3f2ba3b8063744d888434533ac23ec23": "e3cee800fdd5302181aa4cccf9316160",
"github/.git/objects/0d/80c1eb6648f6f8b77000a45737e8a351c27465": "d11873234de69a187dac028ad2d9c374",
"github/.git/objects/14/a8131fe859a5226f414192ce93fee02ba92442": "ccdac77191e23e5aacdcb18445ef08cf",
"github/.git/objects/19/6321e643492f11ac4ddb69b984adcd3cdb16f4": "bfd0d36957cd1a9f4222d0fdf80758b1",
"github/.git/objects/1f/0aa586f3499ffa95eda271c77301af13b1a7a7": "760d9ed272e4ba04d4ae3c42b0cb63d0",
"github/.git/objects/22/6cf7a019916a6a75d35af3cc963751f4100f2d": "c2eb72c148bf329c682ddb75a4fd14ae",
"github/.git/objects/23/d5ca1380d309fc02faa7fdae0a8ddadd15aa16": "1b6f6f4191319dc90b7f76291e6cca9f",
"github/.git/objects/25/a283a476b259dc708cf36f1399e592862b61e4": "8eeb3aacfd31d45ecd675801839f9266",
"github/.git/objects/28/c30898d86ec4944489777521ec5fc327a8821d": "9c9db06b21c0f2654c564228f0f101f9",
"github/.git/objects/2b/27f517e03814ef5de9933f7a4d8f26aef470d1": "008972925350f7001aec3aaebd39e139",
"github/.git/objects/2c/0dc7b341f9be8444ef35bc0e6e028f3ded1174": "188e60544c6b26682fbedd1b457aeecf",
"github/.git/objects/2c/f72a06342de8084022fc02aae52132ba66fa63": "cf74648d796a36532c1872d6e73e167a",
"github/.git/objects/2e/02ea459b681d95a317865800f4ee6fac17d934": "e00ea1267289ef6281a1f5cf3e65ffda",
"github/.git/objects/34/adc353b860916059c8bfecd25210d33c35227e": "d46dc277b9ae56e442f4ad340b123f85",
"github/.git/objects/35/60b87e522c6674fc6b5971f377f3cb05b43800": "a0665148841c101b718d50fa97b66c0c",
"github/.git/objects/35/ea2a0795769d86a6108268a6c971744db629f3": "d819936598c7260e612b596c3ea43579",
"github/.git/objects/38/b979cd0e4687b74058e1552f997a2c2d01d26f": "711fc13f36a4579ba47652090ff0d200",
"github/.git/objects/38/cde5d61496c89bc0272953054cae83d3ecb8b5": "4306b9ced465f9ac5fe47f1ed2d5a248",
"github/.git/objects/3b/d681d6b1868b62a75d35c940921c83b9cba46d": "6d1c38011922f5a6096dc680cf12d4fb",
"github/.git/objects/3c/7fab02cb6e27a43c1ceb811364ee1665a8b865": "fb2c07a3c2f303b804e27e12042a555f",
"github/.git/objects/3e/62dd32ed8dc7c2f944af2f2db04a605de2c48f": "f5342d1687610affc93cab3130b19f13",
"github/.git/objects/3f/af65a8615d029f6a3e6aae2f29cfa2ff855181": "6e72d0dc38cd9416963e4bab37a3e7c2",
"github/.git/objects/3f/ca1120e23e9dff94198cd1155a75b9bace77cc": "640465efe28dc87667517332f1734921",
"github/.git/objects/41/b941019613c6ee31278ad480dfa62ec4231a35": "55d73fd10ad7ea83c7cd9215e07964e3",
"github/.git/objects/44/cda2df2d2e665348d8b1313aa951a645c31dc7": "672f39c6e28b6403aa5e796ea98de072",
"github/.git/objects/47/82df89d8434a22439470e1357cb9ddd959fad9": "eb6c61a3b47e92233cd194a96187e7a5",
"github/.git/objects/47/a0d7f12efb5bb857afda317ecacc4ea06c5442": "988ae9acb73934428922e1b2c1d70c02",
"github/.git/objects/49/7f58c5220f862817a0ee32452cd4a4f70f7738": "b2add687935889fcaca25baf4d980f80",
"github/.git/objects/4c/411dc7f4a44930fb3215ae84f01c67a1d880b7": "2a144d4640e0afa4085e1b6cc5e7f772",
"github/.git/objects/4c/feab86a8bc4cc1c2b7074ff957f35f3546ed82": "93645a30fa488b80b00e1b710e928f39",
"github/.git/objects/4e/03c76375401e5b62292cab813ab4a35139d0fc": "d09749ca6cb3e378eec00b4e6230db69",
"github/.git/objects/51/156fcd9465e5df26fa6900ffecf9303f6d12a7": "e064e8d49169bdd195009a86f3d40235",
"github/.git/objects/53/6d40ff441e6f24e357ce281f29f274823c51ba": "dba2730c4af2c4b92a4792ce4f063073",
"github/.git/objects/57/49064817843171c31a20967c6f188839ae0f7f": "f8a789e364fba1cfa68b8860fecc780d",
"github/.git/objects/57/7bbe03f2853ade4195da21212d7b75431fc4af": "91f563a35c60a1fb9aa3f4710c77a2a7",
"github/.git/objects/59/3aac65157aa287e8af3d4003ad2a0de0eb1a5a": "dcba9541ac46d4daf27bd014a7ac3f94",
"github/.git/objects/5d/f2fc309407499bf4aacf7d41d349600cce8834": "4da93b4760deedf5089c109c2b6504f8",
"github/.git/objects/5e/b445fecfee9527e4b74a56d4ad79ccdab17854": "61488df3481dbef5fec2066443b76020",
"github/.git/objects/5f/82c394d4b21ae593d92194baf6d069708c5ff4": "df0e1b66635ff2f3b8ed6e3ac94404af",
"github/.git/objects/64/20fd915fe0286051177f35f39b3b011be5bfde": "dba141911160564c18cfa91cc901c273",
"github/.git/objects/66/d2b874a476481af9ac319585537c0d580cc304": "47934515b571fe96434c38c1eac21720",
"github/.git/objects/69/a362d41448e304e8e2dc9e557b22a85a327955": "f7053c2726c7a49a17dcfc90bfef685f",
"github/.git/objects/6b/ed553c9321ab3a1194cd47ff8b54e36946cd94": "0e72fd946828cc4d10fb7c701b1d79b8",
"github/.git/objects/6f/566a88fea03771b0404258f83bf683a2a86da4": "afcb495ab4851884c05d260118341d23",
"github/.git/objects/6f/8df12d7ba2f0fc2c2360cf64f196ba3d1424e1": "48e176fc0bdd87a5de8707bc8a5cb0ec",
"github/.git/objects/6f/db06b7afed411db9cbbc034140fcb5f4a9c515": "8d1c2a7f246441f01b0a86bd6c1f7b15",
"github/.git/objects/70/89d289f74a2d0e98e3947ba4a5f09eb3973961": "ed185c20a328699c4efcacbddff0d577",
"github/.git/objects/71/955e6b59698cc498fa56c33c81da5287b3515f": "ced019380440fde415356d662698fe5e",
"github/.git/objects/74/48ed2b1414737ead2a7fae3cb3e9ef950dee36": "55286e1908e3e2f14594e8d6d949e19c",
"github/.git/objects/75/0fd4501d4d47d5661a9b92536fa0dcd025cdcb": "d29b1667406561058f50c67a42e38d2a",
"github/.git/objects/77/2e94df64d017d3cc9e929c7aa99ff89c49e047": "32f63624437ef44bcc0cb937a69a74c3",
"github/.git/objects/78/d4e3cf15ee968dc3a5dc3ddaca5e870decd2e0": "ca75d1c4f8d2d5062eb31c416a27f036",
"github/.git/objects/7b/5d056ae531f60d8a827dcff174e6aa2897bbe4": "c7f063b07021c78e299af17f26b09e2a",
"github/.git/objects/7d/47f606c7d248a03125cc4797648f5f8986106f": "a609f9dde4e379447a4d1ad9cb410cda",
"github/.git/objects/7e/b11f791717dcec7aa7f50dad37dff860b3dcb1": "ef5158821835ce475168f61cd088b505",
"github/.git/objects/80/0982d1111fb065b72cc4f5d4aa51cac3115355": "f58b3978b2693244798f5f8ba28f426d",
"github/.git/objects/81/b055dbccee0419372a225c9ead491566d94d3c": "8d72218a7b781f38a2f981d5a2816fd1",
"github/.git/objects/81/e698dbce24da325696385b779bd5867f067e23": "a87a4c3233bdf95cf6ef8986b74b921b",
"github/.git/objects/8a/e5894147ede033be134488b5e1adf8226167fd": "ab8d33cf27947a2527cfa592e4b68176",
"github/.git/objects/8d/0cc384ede5102812a838eedd8c4a9227b1cd4f": "9e92c6c6d689eafeed6971a34554a667",
"github/.git/objects/8d/ef9ecbd6330e57f51e633ce021e27d1f4f0c28": "0543fae063a27a8f455ca8a234754bf4",
"github/.git/objects/90/336f80d5cb3c1dee2bf0d77a5f5de65d35c792": "c6fc24cc689cab217f13718c66bacdc3",
"github/.git/objects/91/039538d3787567c7ccb9afef880d43333d87eb": "7708cf9d94d6ed1713b9d79765004f70",
"github/.git/objects/91/affbecd3f9f1c03fa810e14278868b3c0e6e7e": "6362cdef8848a836079089407e7db4ac",
"github/.git/objects/91/d93d8f7e73c626b73a37a00924cdc68e211e66": "c466cd976e29b6218ef39a7c8550a83e",
"github/.git/objects/93/f33fdfb8b24a98acc0ef83dc63abb8b441c5dd": "2c9f0796204acf3a5df4de0e11d5e73f",
"github/.git/objects/98/2ddc98fffd35c2f0f897931d41bd8bbeb2a222": "6656a71b9dab6cc693c691c069a4e291",
"github/.git/objects/9c/48ef5cc88a07d83270bed7bb37a5539bd4a4f8": "e6e1f1f33059de1f50f01bc95e374dc0",
"github/.git/objects/9d/59347184a900f9a873e625da0da639531a392c": "f87254c436fc7c4c2cdab7d0453d8271",
"github/.git/objects/9e/a0a55347dfaac0b8a713c331e0670f268c486a": "d939a1b888432ac02c753f9ce9fdcd52",
"github/.git/objects/a0/8c5cd360a1bc5dd00851b38fb2db6a27cedade": "8e43f1d241303ed1c3d4bcba3d6d872b",
"github/.git/objects/a1/b1db0f0c5d87c90e4cb3791fe832b9b84eec08": "de910de3a1bb029da1daba4647ca950f",
"github/.git/objects/a1/e4607363d00db53a813a364b51e3383db7c686": "cf3d2b5808d208c41d8dd1f12ac00c47",
"github/.git/objects/a2/2dfe9c0e27a3f1248d94d758002cf785add289": "8cd4474eac18c55a2e51812d2db75da9",
"github/.git/objects/a5/390d90697403ad4ec4d6f013bc32267db7893a": "d12558602fd15ab93e8d2f6c2f8375bd",
"github/.git/objects/a6/273e54d6544e4b8424a79087fc41b2e8ccd8df": "71aa76a4ae28c48c3d85a6999d43cf71",
"github/.git/objects/a8/1da18aba3dc1b65738ea7532e397bebb75220e": "930438131c9ed73df2c3a234767bd02b",
"github/.git/objects/a9/0c58451c93719af00d33fdd615f6f37667f43a": "54f0d687cefa8614209344752748babb",
"github/.git/objects/a9/8bdd15cbc0e4237c58143cea639116aa59197e": "b07ed273eff2a3e69717629a4f8b7c40",
"github/.git/objects/aa/b40016c9bf1c9736ade40e503f703fab64580f": "8352860528db5a633ab6d1ba57564749",
"github/.git/objects/ad/adaa6378d0e33b2b870888c0b321c6ce0c1ce2": "1ce9eb65cea7ba4c1c153706c7e1eff0",
"github/.git/objects/ad/e631d9b08200794f6e671691a1a0a5703159c4": "f0f08d9c69e2110cce794e43a9881302",
"github/.git/objects/ae/6ec6d2fdde9a34782b6ca03daa712a2a5b04ca": "c4a4ea86578e6ccdab51f171689462b2",
"github/.git/objects/af/ceaf68aa9072bf0dc3a63f22319a3d00c0225e": "2909477ac3bd767b37e177a62665bb46",
"github/.git/objects/b0/869364de15bbba5fd3c02d3b448b66d74624b8": "ef5c93a1474c9cfc9fdcce0c3c7f81b2",
"github/.git/objects/b0/c69dee150269f7d512d641a96d701957846f53": "a1affdfae20a43f2382f49e06614396a",
"github/.git/objects/b2/c51e4521ca46795a147ab7198fe4364cd7c4a1": "11d80e24712a6f4641627bea3ea2d261",
"github/.git/objects/b3/1e523d341c151d0649081c49741e45706775f2": "da417038b1a57d7754b89565a17964d0",
"github/.git/objects/b4/ef55b8741f362a7a92d66177f7843afc028fa7": "06de081b92ac1106146158f68acdd6d7",
"github/.git/objects/b5/8289a49101777cdb7ee091033b0ac1f02d923c": "6d707467cb4a6ccbd8622d61fd7cbaee",
"github/.git/objects/b9/14bd4fe6a7f9ea31093a4dbe7303f2037ed607": "37cc76dd9c0832ce3c6a62ff816d8998",
"github/.git/objects/bb/887578dc1e4d5dafaa2592f7c6caf9d8c5a7f4": "2c12c7e062c817e806f984f05277d517",
"github/.git/objects/bc/0608555468de8c7c05e22f5eb88979fdd74157": "5d9289bbd052ed4f9a995c0d0ecd3140",
"github/.git/objects/be/599eb78a46890c6450d411dda620a237e8567c": "0795453f0b5ca2c9fc2cc9703231da92",
"github/.git/objects/ca/fad0045266a14b679bcbc951ad45198d49d075": "cfc6db19ad1640638f43b5908f666d08",
"github/.git/objects/cf/1637978906862b283ae2f99903fc951b8d4500": "b3500a8bba06a7d5035de0a3acdf2bb1",
"github/.git/objects/cf/1ebae9bd8a6f5e0a87c56a348cfc6f7bfaa874": "640a797356131c9cd41c6c922e8c1a7c",
"github/.git/objects/d1/99c41d6a3d665ed423280e40b066586f3b3dbb": "0a1dd4b48c13f6a8cf0100435662a548",
"github/.git/objects/d3/34db5abbe1c42e4214b46487a2af49ec38b44f": "e422c058c874def30b7960eb9a3b03c7",
"github/.git/objects/d4/4a38227ca0574409c85e3564fc0325f07e99ba": "f93bcc2bae2b1958b0822aad4029e226",
"github/.git/objects/d5/3a0ea0ef7935a8d1c53a15b17de14067412b06": "7b9d0d9642131861ba97f26c52884599",
"github/.git/objects/d8/0a502195de4f2124d6bf3636a1bc3021799731": "b4ece3da504e1596107f85999649408c",
"github/.git/objects/db/5453f0f7b4dc2332c597eb41e8dde031e01a88": "0d742c93d8552efa9b00693e81c66fdf",
"github/.git/objects/db/68b8389e5e3a2501be373251dff424276cf570": "1594cd72114f2128668ae79bb0fb03e8",
"github/.git/objects/db/8fdb5356a7dd3a666a13565dce853614fe8b7a": "4ec3ed0e3dba1cbb670bec8aea6cf2da",
"github/.git/objects/de/93199bda51ccc681bc40d4c3ca94b340411577": "65809392dddb9cb4ea8b3a6807ff1828",
"github/.git/objects/e1/68e46b3d683aab9f829b90b4b8b011ac03ce30": "60f7ab437db8bc9cae27fa5adaf68917",
"github/.git/objects/e3/032213f4fe000a44736ed39d9282860f53d43f": "e46391ed84be10e72546bec4d277309f",
"github/.git/objects/e3/4f8e361fe683941973b2a1860272ddb6a1faa9": "bebf7e89a6b61b3c62ebdd79f54e3a0c",
"github/.git/objects/e3/96249d42647d4eb055fd327f90c998b72ac44c": "f44a552acebea6ea33979b448e7a9bfb",
"github/.git/objects/e9/540e466bcf68c629f0e1f52faba3a294b86c79": "41d94f934ea92b607e44ae5b1ca9dd24",
"github/.git/objects/eb/b6bcc54fd46c75ed7a12b893ec793c9a184af9": "e8a9ac1e1ab5f28989806d358ae1d091",
"github/.git/objects/eb/ee865388156279e572b017a3e997d1fdbd032e": "c5c58cebef09bc2126045d2f36383a2f",
"github/.git/objects/ec/8768540d7cbba5f4c3e66f9a27c0ee6b7db381": "9e0a388422979861523b0422ed4c77d3",
"github/.git/objects/ec/a75358a2c652b42048ba907776a5309e72842b": "f0e715ad3a6a540050ca8a0f19fcbb09",
"github/.git/objects/ef/7ece561a1b2f0c63885593bb890f58965841b1": "70bd0e027e39cef1d7a533eec395b982",
"github/.git/objects/f1/1266da77f308dc0819e75fd6aaf0a719bcae8a": "11ad99f834dfec6d3202c003f4578d90",
"github/.git/objects/f1/ee482cdec260bb40c2cb472f2e19385692a905": "53a1f6f75e239ed723a7eecb5d8a5a5e",
"github/.git/objects/f3/599ce2510b3ffc7b562410c750463a942b357c": "5a9ced7983007dddb0f75346c495fa7a",
"github/.git/objects/f3/c56aeb6dbf303c71b99630cdc48bc7c11b676a": "1f7f75b7505bd3a102f5236b5925cf8c",
"github/.git/objects/f4/54a557743ec5bf974aac864bfd5ff801f13efb": "7aaf8584ab8b6d48d7bc50d197ffa239",
"github/.git/objects/f4/7df8d5af54e80f7d15fcebb8ea781175177049": "9c8524d6f1cc77e95b2b69e7d257a674",
"github/.git/objects/f5/055e3358fcd6ff99c88d0ab674a56d16e1c53b": "ed2a939c9c088484468a7569aecb9bc1",
"github/.git/objects/f9/9f890e45e45e51cac6a3bce0567360add23e15": "93302810f95f6f35dd202e53a2b7b513",
"github/.git/objects/fb/069e2d3f00c89eec7f6b0fe2c9dfd964e871da": "8bd2f6f906c9956110758b87604e6b34",
"github/.git/objects/fd/98e3db1b69f7ca1c9f2af4dce5e02a961c6955": "9f40df2488fb9e13b96428b0e86d6c35",
"github/.git/objects/pack/pack-5a0a72a56c3b5883f84b3f92b4c7e0afca71bed9.idx": "a08df0a524f12b122b48442bb3e1ce44",
"github/.git/objects/pack/pack-5a0a72a56c3b5883f84b3f92b4c7e0afca71bed9.pack": "3e197005998f6be53da3e11c494b406f",
"github/.git/packed-refs": "d4fcb0409106c4ef6361ec9b7e810595",
"github/.git/refs/heads/main": "8de43808aadca3e9e5a88c9fb674445f",
"github/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"github/.git/refs/remotes/origin/main": "8de43808aadca3e9e5a88c9fb674445f",
"github/assets/AssetManifest.bin": "136a89384f8fc2b7a3e43afb2aa825b7",
"github/assets/AssetManifest.json": "5fb01e023c1e528b8fdea2e628e9c696",
"github/assets/assets/balloon.png": "f096d9770365afb4ac0e603f91b59f67",
"github/assets/assets/divertissement.jpg": "9f16a5d69e9e6fe0aa591bf1f59564c8",
"github/assets/assets/dommage.jpg": "d9cfb9342571dfa2d0b91e28f138e4e2",
"github/assets/assets/gagner.jpg": "bdcd83f0273c75b6d58830dc677ea902",
"github/assets/assets/geography.png": "75f176bb5c275f53deadb613b3f771a2",
"github/assets/assets/histoire.jpg": "d991b648ee059f7c8eed86985f7219c3",
"github/assets/assets/questions.json": "37df0aaa152963f5076a2b464c357de7",
"github/assets/assets/sciences.jpg": "5241225819c571837c4794df44e730d9",
"github/assets/assets/sport.jpg": "eee272751b09f6cbb04bafb41fccca92",
"github/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"github/assets/fonts/MaterialIcons-Regular.otf": "1d3e86ea6ae47b5fe8326eb297a587fe",
"github/assets/NOTICES": "3f5523585e0a786e0010c80bcefc05b1",
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
"github/index.html": "afb43804e885d29f3ad6889a6950a0ef",
"/": "8cab43657bcaf76958bf5958084c55b3",
"github/main.dart.js": "e30e065ad02e697d77ecc00ad7057fde",
"github/manifest.json": "6cb202965e841b2c6d822bba838b56c7",
"github/version.json": "223f25c122b550439faf26334850b856",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cab43657bcaf76958bf5958084c55b3",
"main.dart.js": "e30e065ad02e697d77ecc00ad7057fde",
"manifest.json": "13b11a891c11d6fedd7b9e871514bed8",
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

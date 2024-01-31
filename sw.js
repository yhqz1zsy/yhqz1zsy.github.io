/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/17/hello-world/index.html","363a7a531b75db082796fba6f60c3f9d"],["/2024/01/19/我的第一篇博客blog/index.html","ecf54a66a228f305d9b7bc04454d31c2"],["/2024/01/23/哇酷哇酷/index.html","25f6f157e443c20fa4e4fec188f44e35"],["/2024/01/31/寒假日常/index.html","d0cc830833593053dd84d681c64ca1f3"],["/anzhiyu/random.js","c9362382d044516eb0a07e0676745f7d"],["/archives/2024/01/index.html","3226eb6850112d8c03edebb25b6a211b"],["/archives/2024/index.html","855f69f1f2513c614ae1ae33fd9d9d80"],["/archives/index.html","259384c3d7f12116ef7253f65b90dd86"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","dc288a6d9070645001fe0dace9cd4199"],["/categories/index.html","fbe58f281e2303947fb9326d4e61b5cd"],["/comments/index.html","c3f54b6673d8b5c0a5aecd69bb81ce20"],["/css/background.css","5a7b3a974424eff7bab4ddb774e42c8b"],["/css/cat.css","aab175ca10d0db134427922adca96d73"],["/css/custom.css","efefee143a79d8a5f3a5a38dbc1dae28"],["/css/index.css","acdaac0ed068ab316ca2280a46ff2635"],["/css/mycss.css","fec6249f4294215802f270f1ed270d6e"],["/css/runtime/runtime.css","72ab4ebd871ed84556c295d10ed850bd"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/一图流.css","b4f39d4e8468d600cad83887558e3efb"],["/css/鼠标移动特效.css","62f9443f82e5e1765b4c0a7a8bbc11a7"],["/gallery/index.html","6dde6d892df9ac522994f79ba436b0b1"],["/image1/cy/1.jpg","d1b31e473a9929e4a8cd74c42180cc73"],["/image1/cy/10.jpg","86ed1926748d1c125af7be556c7cf823"],["/image1/cy/11.jpg","691bf2bb855191ccff4438b016a4bb7d"],["/image1/cy/12.jpg","f21d3d548562c4af56c6902af65e7d01"],["/image1/cy/13.jpg","157e692a9c77daf5b9b83bb85e6678c2"],["/image1/cy/14.jpg","ea09b586dcbd7042c9d680866d4e9584"],["/image1/cy/15.jpg","02a1f313e455da7421c88f6902228085"],["/image1/cy/2.jpg","7b0bef523c130b06ba352ffeea6acdf8"],["/image1/cy/3.jpg","981410d1f07492ef240f8e802f2d756d"],["/image1/cy/4.jpg","e97bfb53fac786ff041c9091858240e4"],["/image1/cy/5.jpg","187a228a0a706df3db1922880a526969"],["/image1/cy/6.jpg","f35eacd67325f9a2e973b07686019304"],["/image1/cy/7.jpg","5780721816f31da5c79d3b826b48e2fd"],["/image1/cy/8.jpg","39d8d01962e26ae3200bf7b020e0aefe"],["/image1/cy/9.jpg","64091d454e465723d0a0203221ef7c92"],["/image1/cyq/1.jpg","7606683c67cba13e993875de2f4cf6e7"],["/image1/cyq/10.jpg","ba95bea99937573cdc7eb7f0444acbc4"],["/image1/cyq/11.jpg","2eb666c58253229ee2d1f7c1ddeda76c"],["/image1/cyq/12.jpg","4dbb5d9923e6d4db4682de1939a4355d"],["/image1/cyq/13.jpg","457696d73956f49f33e94c18acfcbc10"],["/image1/cyq/14.jpg","8f2615ba20a26f2675a03fe3e2424f1d"],["/image1/cyq/15.jpg","f7e94daaee0ff16901ade6b58e0c7960"],["/image1/cyq/16.jpg","0d220ac1a6eb3da2fc0a196f574db856"],["/image1/cyq/17.jpg","db15ee92c3cdb6bbbe5ed458c53a5818"],["/image1/cyq/18.jpg","e27d0245fd36bece187b671eb6b4dfa1"],["/image1/cyq/19.jpg","11bd76710612f84ddcf345c107579da3"],["/image1/cyq/2.jpg","cbec1e4852b2d1b0585ba94225826c82"],["/image1/cyq/3.jpg","c4e05a138a4e9c583f69643e4f52d740"],["/image1/cyq/4.jpg","2f295bdb65d61f2c67f8e942f1ec9e79"],["/image1/cyq/5.jpg","f61ce046458eff0e4cacb6f2ffa9be6e"],["/image1/cyq/6.jpg","858afbd3d97fe4a7d7842af29ea6ec07"],["/image1/cyq/7.jpg","07618171c8cdf91e8f421326f7e4fe3d"],["/image1/cyq/8.jpg","4182a442cbded45afeea95851b650d0c"],["/image1/dyf/1.jpg","9c870c2d5b5476daf2c14653ddfcf791"],["/image1/dyf/10.jpg","0e651af939704279248393cc04914da1"],["/image1/dyf/11.jpg","6baa392255367f3ae77801c237f7dd96"],["/image1/dyf/12.jpg","8199327bde8e1e61534c662c034d6b95"],["/image1/dyf/13.jpg","1a68c8f2e5d17cc5e46bb646d6cc21f3"],["/image1/dyf/14.jpg","82843f3a1fba51263f49d6eab185e3cb"],["/image1/dyf/15.jpg","f4a027ba03fc87053a901dbbfa46fdcf"],["/image1/dyf/16.jpg","318e7fdd0a56e407d89564f9ff8d03ad"],["/image1/dyf/17.jpg","f169cecfaa12008d85e1fac8a48b86d5"],["/image1/dyf/18.jpg","9bfd2604b4562190fd9719c2f59d5d13"],["/image1/dyf/19.jpg","97ac1a76a923ebfb122840a783f92c70"],["/image1/dyf/2.jpg","15532a228974c8461b8c509f2427d77d"],["/image1/dyf/20.jpg","e10d1fe4211ba9b0fe8809713cf532fa"],["/image1/dyf/21.jpg","3f54670eb76f837e2cb2cfe39a22a6cf"],["/image1/dyf/22.jpg","1454fa829b3a14796dcde9cd6742cf14"],["/image1/dyf/23.jpg","2ca7d786e3a455da422b073acd59d5e7"],["/image1/dyf/24.jpg","ba0fbc137075c2f08b012d4f48270680"],["/image1/dyf/25.jpg","02f7941a2d3fcc22dfbe8a6abe24460a"],["/image1/dyf/26.jpg","361d24abc4e1ca4ebac7656d64ad56b7"],["/image1/dyf/27.jpg","367e2e63179198bff3858bab99f93400"],["/image1/dyf/28.jpg","2ae5dd7dd54347807cf52deb976c5a70"],["/image1/dyf/29.jpg","8d4184b43034dc80a93575c1e9c18cb2"],["/image1/dyf/3.jpg","a6210a337c676496cdfede33dc03577c"],["/image1/dyf/30.jpg","bc52f33c7a746e57a714592198f34189"],["/image1/dyf/31.jpg","b3cec2f486c08bbdffa2e18b4a7424f0"],["/image1/dyf/4.jpg","037e56c467c3f7dc63731655bce8d50b"],["/image1/dyf/5.jpg","719600fa0c59d46261236ffd63a4a155"],["/image1/dyf/6.jpg","7219541a1aec9864f54894cfc8191273"],["/image1/dyf/7.jpg","3733ac580e250757c1429066d32c8c9d"],["/image1/dyf/8.jpg","c5d25905617d47403204fc7f99dc3d3e"],["/image1/dyf/9.jpg","2642e23116d3f3ffeea6dc28af4f9ac7"],["/image1/gyr/1.jpg","3c9d6b1bee170d6c58aca145be707c69"],["/image1/gyr/10.jpg","4ce5f2d85921d4960fc33c0ed485d8be"],["/image1/gyr/11.jpg","4e5b335f0010be960dbe441fe86a5419"],["/image1/gyr/12.jpg","77fdfd31dd55d59a37f14af92616db00"],["/image1/gyr/13.jpg","15de2c52b8b8356cb21d83b032333eba"],["/image1/gyr/14.jpg","11ddc43995c12efcb5e64626b0d4fcfb"],["/image1/gyr/15.jpg","17058b65fc38e5003ae5741ea2ffc10d"],["/image1/gyr/16.jpg","4c22ba41aa084c830fdcaae0fcd086b2"],["/image1/gyr/17.jpg","0a906737f102cc6a853ce05fef728d21"],["/image1/gyr/18.jpg","01c3b2935eef068225bf39b2b2349db8"],["/image1/gyr/2.jpg","f1de38ee511b5c6122da0e3015e785de"],["/image1/gyr/3.jpg","b54b5c09588cc09b993f45c4190c8958"],["/image1/gyr/4.jpg","aa01d02be660372ca083f98914662c18"],["/image1/gyr/5.jpg","2fe5f78b029fd994f01e549006bfab13"],["/image1/gyr/6.jpg","859a41ee3abb202e5bef8ae060382ec8"],["/image1/gyr/7.jpg","771ca45c9ccb75df2e12b903f5943257"],["/image1/gyr/8.jpg","cfda5ab324ce89676efac38121092a8d"],["/image1/gyr/9.jpg","7ebb1841129fdf008e1b92fc93de6d36"],["/image1/jun/1.jpg","5e446982af623c6ef5f6b59fa9803414"],["/image1/jun/10.jpg","16d40e5ffb23822cff53977da8c22667"],["/image1/jun/11.jpg","92445526ecaac70fd0e47f0e8f468883"],["/image1/jun/12.jpg","661663165cf85408974d900e8098ec73"],["/image1/jun/13.jpg","5b54046874fc6ea01e0d67651e4e68ab"],["/image1/jun/14.jpg","2beefb989b2337e200291d33fa4a834b"],["/image1/jun/15.jpg","b21b98554207395f1fafa7c05505ce8d"],["/image1/jun/16.jpg","d26ef4e9e3c4af62b09c6483ddb5de37"],["/image1/jun/17.jpg","1dfb1e9f9b3660fed2432e890e108744"],["/image1/jun/18.jpg","4bb779b9f81ba5ef5dbaed3b8c08996b"],["/image1/jun/19.jpg","c04ad5d9dcb7e7a2e483c5904f6dc943"],["/image1/jun/2.jpg","1eb8268b594505f8d9c714b948311922"],["/image1/jun/20.jpg","db9d69b1fa8c12b6bdf2307a547b8f72"],["/image1/jun/21.jpg","3088127736f53ad4b279e24face53e6b"],["/image1/jun/22.jpg","295e0a83aef3485584032c52edf78d8d"],["/image1/jun/23.jpg","6e27b68e69e9f9e599d216286def37ba"],["/image1/jun/24.jpg","f25603000e754529e9cbfcc98a1b43de"],["/image1/jun/25.jpg","3bfea8ccb7be87527e6a24bace493773"],["/image1/jun/26.jpg","9f419b2108cf12e6e2ba8e91e8eb9d4b"],["/image1/jun/27.jpg","d2d60ef560257896df1a024e95e4b01c"],["/image1/jun/28.jpg","549807f13b34a069808b49a7d38a593e"],["/image1/jun/29.jpg","72df21c719fea0c4d8c397fe952dc99e"],["/image1/jun/3.jpg","abb0f5224ff401d627dad3b0e0ecc516"],["/image1/jun/30.jpg","34a69b7571719f4647798450946842e3"],["/image1/jun/31.jpg","ef87c294742804889116c3720c75befc"],["/image1/jun/32.jpg","0d915bbeb46c5f023afa6ea1403c7fe0"],["/image1/jun/33.jpg","2f297fd879831cc53b1812f450f9a15f"],["/image1/jun/34.jpg","b14f4076d993f446d7ce6e2667eec508"],["/image1/jun/35.jpg","d9529ed10f5c43b694846de79126171f"],["/image1/jun/36.jpg","7a7fa27669c9932fc78792ab9d57cc9c"],["/image1/jun/37.jpg","adc961952bdfb5fde42964a23ba618ae"],["/image1/jun/38.jpg","1e81282765724c37357e3d6345e4c20f"],["/image1/jun/39.jpg","f4ce2ba447e4e0121b505d80053386ab"],["/image1/jun/4.jpg","35025864f61a0a54f9fa54ad9a207b1f"],["/image1/jun/40.jpg","3b23b31268bd0542e2927e061e2246fb"],["/image1/jun/41.jpg","5b527cf29a6de9ee3d041d4f8515cb8c"],["/image1/jun/42.jpg","2ddfed3e77f42fa88c7c5826fcc73dbe"],["/image1/jun/43.jpg","3dd15e9d651bd7a1b0a989bb6ef3207a"],["/image1/jun/44.jpg","eeca6982ee8021c98a232e52502811e1"],["/image1/jun/5.jpg","1e28e346d0cdb2b53d999b3073c5a316"],["/image1/jun/6.jpg","200fe2239ccdbfd0072a547328233093"],["/image1/jun/7.jpg","ab52689b50fd84e89e61a2195ac4809c"],["/image1/jun/8.jpg","7614619802ac3663dd8c2eae6f062188"],["/image1/jun/9.jpg","4738802306ab32cc1e632e52d30da27c"],["/image1/life/1.jpg","6a993aa441aefb35e88902435d13f115"],["/image1/life/10.jpg","9538db24e50af425f50b8f9fa887ebdc"],["/image1/life/100.jpg","219e7abaab7ce5445bddbb51a9f8dda0"],["/image1/life/101.jpg","63cb4a917da494141dfaf8ed27400bea"],["/image1/life/102.jpg","8917aad38b1eb381abe558a5479d2975"],["/image1/life/103.jpg","455f894fd2457e2ab13274e4a25e58a0"],["/image1/life/104.jpg","5269b43af2cb3f1a9ecd9835b90a7969"],["/image1/life/105.jpg","40504890b1b4a371c2b52164cb90278b"],["/image1/life/106.jpg","479b3014a2de336058a7545a14e90d02"],["/image1/life/107.jpg","8101cdc3e077ef8ceaa0fcbfe2d40467"],["/image1/life/108.jpg","00b419ff8d49427b33f414c2216cf821"],["/image1/life/109.jpg","b8c85adf016af73c8c40a3e42bff883c"],["/image1/life/11.jpg","2de5f443d0c93b2e1028d40436794d02"],["/image1/life/110.jpg","c024578f63195e77e253eb2d43aab488"],["/image1/life/12.jpg","97ab9ab5f88592aa2e04717d8fa37cc3"],["/image1/life/13.jpg","07aff38140e0cddce37d0622c487042e"],["/image1/life/14.jpg","5ccb4c2ee081169f72b16c7d89deb6a7"],["/image1/life/15.jpg","25fbd5040cd86ad7361b93f61198448c"],["/image1/life/16.jpg","3801fb310eda426aec73909450866e77"],["/image1/life/17.jpg","1f89b98e8ed191bd32070731fed49e2c"],["/image1/life/18.jpg","38901332030158a36cd2457288a0c656"],["/image1/life/19.jpg","dd07e850ed42f9dbe0e4e6be0b2dccfc"],["/image1/life/2.jpg","6212d9b07176338597cadf70420ab5fa"],["/image1/life/20.jpg","7ea0b18e698dcc9dfc4657b8b22ba3c7"],["/image1/life/21.jpg","6d9cfa39c7dd3925a5215063865a60e0"],["/image1/life/22.jpg","d5c5ca49832e9bc28c64ec6f8146e934"],["/image1/life/23.jpg","f9fd359292e63c7b0fd80c62519e0b85"],["/image1/life/24.jpg","1b5cc0f3ff745769b00776e58d9e94b7"],["/image1/life/25.jpg","19bf32116bcb9a496ae9388f2c111367"],["/image1/life/26.jpg","5b7f25072b81b32575088528fdd61805"],["/image1/life/27.jpg","fca2a015345363c02ab15c8c774d432e"],["/image1/life/28.jpg","1b0425b42a9e983c251d4eb0dbbc6df8"],["/image1/life/29.jpg","9358c41c49318570b994cbdd11eb7d37"],["/image1/life/3.jpg","e3fc98345f8701d3e5a813bf5d48bbeb"],["/image1/life/30.jpg","3b67ef37be08292f73088430ba473db8"],["/image1/life/31.jpg","a24c467bfed2241dc8dda27cb5ff76c3"],["/image1/life/32.jpg","293dcd6460a0b1f8edcca8ebfc35e948"],["/image1/life/33.jpg","aee980fde59e5e7b6c55491953e2cb33"],["/image1/life/34.jpg","77964f9161ff3e6920291d0c200e3843"],["/image1/life/35.jpg","c1f7df9cd30520cbcdb55639e436074e"],["/image1/life/36.jpg","810b6fa065e231b7a7dba08b5f1b3036"],["/image1/life/37.jpg","6b08acd8c2672d273404c56022905039"],["/image1/life/38.jpg","e6542daade2024c395f1a4b0044a4404"],["/image1/life/39.jpg","d793d893fd06e5eadae855a1a642bfb6"],["/image1/life/4.jpg","ba1a8218c1224e276529ab7de26e0602"],["/image1/life/40.jpg","b65413febdbb920d60c06e3886941e86"],["/image1/life/41.jpg","b6fb97e3833a4f3997c459ea5b251320"],["/image1/life/42.jpg","9fc2a9388bc75ac9195c26087f232fe6"],["/image1/life/43.jpg","c605ecedef816bf7028d9a3d0398b8f4"],["/image1/life/44.jpg","1139cc8d2bc904bbdd422a621e54935f"],["/image1/life/45.jpg","b84acde0933061cd591a45b31553071f"],["/image1/life/46.jpg","d9cee111c4960e63f7bb953eaf1fba0b"],["/image1/life/47.jpg","65e2cc8a49938163a95ac995a9bba1b5"],["/image1/life/48.jpg","fe37c4c6b1aad4314c973deb4d743d25"],["/image1/life/49.jpg","c76ad32c239ffc004660fee5c3516450"],["/image1/life/5.jpg","26316b8fe5a2f2e2b9dea2f478cfcaae"],["/image1/life/50.jpg","1ab8f1601d3641761abe2dea063b328b"],["/image1/life/51.jpg","24aea8bc4e7ba25b4e149ec80413f4e7"],["/image1/life/52.jpg","6f0f494d58e35ad92a372fdb0abe4996"],["/image1/life/53.jpg","2ecef82f23896622cdbb0bfcc71f9020"],["/image1/life/54.jpg","a8a8dc66a401ba10142c6f610e23eab9"],["/image1/life/55.jpg","9f90c74a6f948e401e0a6d67353d5099"],["/image1/life/56.jpg","2fdd48dfa0ab66a89db1767883487e90"],["/image1/life/57.jpg","662d26aeb9dad30b5f4dd6ec8964c8de"],["/image1/life/58.jpg","19067228068008d9c95267251473514a"],["/image1/life/59.jpg","f1e41a2c2c0f4d5bd0fbc79c6e269b95"],["/image1/life/6.jpg","baefe6cd4c8a38c057f8dab40b31756d"],["/image1/life/60.jpg","ff503855dfa4209bd8c4c69d94754de8"],["/image1/life/61.jpg","afc5ee8c891b9de30383d03bac078254"],["/image1/life/62.jpg","c0177e16a51f375293f8817b52c1e55a"],["/image1/life/63.jpg","bece9e1b0cdb04374678dca3c06a37b3"],["/image1/life/64.jpg","4a1178b7a98eee9d16fc94d5cb39a3df"],["/image1/life/65.jpg","64f42cb7d3575c895ec0271fadb50069"],["/image1/life/66.jpg","33a4b9a46aaded0751705848dee33b68"],["/image1/life/67.jpg","ceed09eccbaae3108d103cc7d7cd044e"],["/image1/life/68.jpg","ae9017f50053f36171abf5c88284e91a"],["/image1/life/69.jpg","8a05c3fb2f7fdc5af8b4ea5a9fccf508"],["/image1/life/7.jpg","22df6510b8d92fe091ce4eb5f52d2e22"],["/image1/life/70.jpg","d4661774a9072e5d49cd7ddc15e2e9b1"],["/image1/life/71.jpg","31c21bfbee7b6fa1741653542724d110"],["/image1/life/72.jpg","2cbcccd534b61c192cd1caa50b766029"],["/image1/life/73.jpg","675216b2c8803b67304defc44b4141b6"],["/image1/life/74.jpg","ae13a67957469aeefc038ce9828bc90b"],["/image1/life/75.jpg","ad8570fd491ed4ae83ff1258911431ed"],["/image1/life/76.jpg","983f11524589fc7b9e115886a325b5c1"],["/image1/life/77.jpg","7a6ec69a75a60c3f5d825ead5e6b5ea4"],["/image1/life/78.jpg","9a11875871066d3541429bc84fbd3eab"],["/image1/life/79.jpg","b09e8ec51deb6750637091bb9ff734f9"],["/image1/life/8.jpg","9dac1c634503730ef403664812c446b0"],["/image1/life/80.jpg","27ad4387594dc3e640fa1991313c9fc6"],["/image1/life/81.jpg","213f052ee16d788ff9085aface0c0cd4"],["/image1/life/82.jpg","9f04a9668e453893853bcb493ee06720"],["/image1/life/83.jpg","1ccca7b52e4b6e5e3c306e78aea8505f"],["/image1/life/84.jpg","df8bc1554a29ddcb247c8250f40e7b41"],["/image1/life/85.jpg","e0b60ec78beacc24f16f5de725d709c9"],["/image1/life/86.jpg","a34fb6be8e25f7982898fccece137c2a"],["/image1/life/87.jpg","362b283e212fc57e49c11bb5a0b3aa78"],["/image1/life/88.jpg","f9871503fac51d7fa96fb90722446451"],["/image1/life/89.jpg","049fae0adf057a28e59b67e875e5edfc"],["/image1/life/9.jpg","81acb6c427e79fc6335b57c08c0979ef"],["/image1/life/90.jpg","d85dc9f9308e7ff6e53a84079e4efa32"],["/image1/life/91.jpg","abbcf72252f0a7c2cda38919e9139891"],["/image1/life/92.jpg","1ae86452d2e06c0b0c0c476df4b30095"],["/image1/life/93.jpg","1af0567b89a5783874ce34cf64894a3f"],["/image1/life/94.jpg","fd9aa5ab34aa744f1b4342d4dd057ecd"],["/image1/life/95.jpg","48d4c493755e0b9a1bf6b156463facfd"],["/image1/life/96.jpg","1c207e143de6b01696ee4e7aa29f6e98"],["/image1/life/97.jpg","7b3053dcc5464098ec77fdacdc4a628e"],["/image1/life/98.jpg","d9f836d50f11ee589994d7bd8c83236a"],["/image1/life/99.jpg","47103e8cf8875b0fd909322a365ba566"],["/image1/wh/1.jpg","9a2744f264a3f0da3438ae90c43aa390"],["/image1/wh/10.jpg","762ae865bedc226b0f1c7894236a7d09"],["/image1/wh/11.jpg","00ef45ff7cc323d8f61d3fad23a8991b"],["/image1/wh/12.jpg","f1c893de8f50d5f1d88e4e5f114dae4a"],["/image1/wh/13.jpg","30d7312fd2088b2e38bb47d59aca55bd"],["/image1/wh/14.jpg","9ecf33332ba0eba54495d5f15ed4ea3f"],["/image1/wh/2.jpg","49107479de432f5989aacb5461ac2f01"],["/image1/wh/3.jpg","b34a087bbee03806344a6f6d048fe465"],["/image1/wh/4.jpg","244ebc3a597c1a625c4cea2ff2da4cc7"],["/image1/wh/5.jpg","4920c26c6949eaeb72623e729a5ccc8a"],["/image1/wh/6.jpg","e240f10f8f6844bb1312556b41ec085d"],["/image1/wh/7.jpg","f4cfecde93431811c54a2fb8ef884bed"],["/image1/wh/8.jpg","eade12e0b7f49ae5abc95fd59575dd62"],["/image1/wh/9.jpg","b5304c27334bfa1e05338673ca775045"],["/image1/xzy/1.jpg","fdba8cf9b5ed5fcb0c5772f6438d2302"],["/image1/xzy/10.jpg","f70670fd8b3fe8baf4919d9c0d5ba0c0"],["/image1/xzy/2.jpg","8592d1ae0beef05c9132f7f3921fff9c"],["/image1/xzy/3.jpg","a1fc4e3ac5aa539bee4c52270b21884d"],["/image1/xzy/4.jpg","9dc6ea3f7a8b1bdab3156a9d8984627c"],["/image1/xzy/5.jpg","d96ac673ab067c3a3c22b42d8739b325"],["/image1/xzy/6.jpg","e21d54720859b3f7f8ddf53db170bde2"],["/image1/xzy/7.jpg","625f7cdfddb3cd803add6c5cfcadfde6"],["/image1/xzy/8.jpg","54f1a3ed2caf3394043d3fb2e4c78acc"],["/image1/xzy/9.jpg","e6c59e51e50127f259056af575b67bfb"],["/image1/zqy/1.jpg","e0a9a2b22f9135b5f189420b632b7801"],["/image1/zqy/10.jpg","3805ea9874525db00b83471f1add78f7"],["/image1/zqy/11.jpg","b3c59f173b262e3f47fd85d603115200"],["/image1/zqy/12.jpg","7381ed7fb8912fb6cec817dc87b7e2f2"],["/image1/zqy/2.jpg","2ccd15288f8efc487e5d051b8dddce00"],["/image1/zqy/4.jpg","95e8400303dee8738d5968fca67b2413"],["/image1/zqy/5.jpg","5981322ead30afbe0aabe99cab01717b"],["/image1/zqy/6.jpg","e51169d9624cad6f39fa99fa76c5efd2"],["/image1/zqy/7.jpg","d0b3236040b5f5e095b0cf57ed5ffa3a"],["/image1/zqy/8.jpg","c475fe910d12cec57ae3078aef449f0c"],["/image1/zqy/9.jpg","4d236632b1db73ba423562671dac02f5"],["/image1/zsy/1.jpg","ebacc00aa3c1bdc0b32feba94c58b9eb"],["/image1/zsy/10.jpg","8d616c394af06420b94f2784045fa769"],["/image1/zsy/11.jpg","cc47fa8eaf2aa0e52a84a8b56eca5d82"],["/image1/zsy/12.jpg","b84f7d5b8514d91a767e4916b29a133a"],["/image1/zsy/13.jpg","c9f97d357e954358bf169806adf3335f"],["/image1/zsy/14.jpg","1a3896bbe276730d92f926f5741bb9fe"],["/image1/zsy/15.jpg","a414c92167f8a7141243cc8e21506fd1"],["/image1/zsy/16.jpg","8f06854ed2c6bc699d8b2992cfb810ff"],["/image1/zsy/17.jpg","db1ddba06e88c1ed1a87261fda0c1052"],["/image1/zsy/18.jpg","a73b74c4fdfda298abc6a333e41a2e09"],["/image1/zsy/19.jpg","a4732bece1dc59d0c60fe7b452279c97"],["/image1/zsy/2.jpg","07d05b7d3b5bdd53c61c9961af3712ed"],["/image1/zsy/20.jpg","7edac244109d2c8054cbe436d39caaa0"],["/image1/zsy/21.jpg","313dc55c966162c6cb65f154fb5aae6d"],["/image1/zsy/22.jpg","58a8671223af6fe9340ab27ab8091d54"],["/image1/zsy/23.jpg","984b2a14e355bf3900f8a1ab83d040c9"],["/image1/zsy/24.jpg","a22f2b436b7aa57b8e0d588681686fe7"],["/image1/zsy/25.jpg","6e3a32f74508ee8c4385e4080b39e0a1"],["/image1/zsy/26.jpg","deefdd6b3ef569d206ebb278bbc001eb"],["/image1/zsy/27.jpg","ce403c9f707045a5179bdbfe1d73de42"],["/image1/zsy/28.jpg","c23c854048f72208539c66de05379d86"],["/image1/zsy/29.jpg","c35f62445f30eea7e007d6de5cb30e16"],["/image1/zsy/3.jpg","f63196c63bade48b96e4d6a780eb764b"],["/image1/zsy/4.jpg","adedd91febf9088ac8057fad68513d1a"],["/image1/zsy/5.jpg","2221443405b8e299d30e741073fd8487"],["/image1/zsy/6.jpg","564e779b134096fc2e2aa16b7a995cde"],["/image1/zsy/7.jpg","431fe07fdeb9e7f265208c1d6cfc9128"],["/image1/zsy/8.jpg","a3bea1e973508c664520478fa8818a13"],["/image1/zsy/9.jpg","f0b65885038e61018dc9324e0fb96137"],["/images/微信图片_20240120161002.jpg","4559fb3f2ca5a0db6e2874229501df08"],["/images/微信图片_20240124142816.jpg","623d799e4f31ab2e7a9c6e11676946ea"],["/images/微信图片_20240124142926.jpg","1797f5c867c83f9f0b4ee07b71751f6d"],["/images/微信图片_20240124143015.jpg","f7c7cc46a7d03be82e76f1e0dc8c6f7f"],["/images/微信图片_20240124143027.jpg","dbae4c241bf611bf8e8968b67e3a734e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/QQ图片20240118210515.jpg","eb2f8d28629ddc1f283f92c4fdc9056e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/微信图片_20240120155509.jpg","e819a7973769286f0ec54c5f5a5c3608"],["/img/微信图片_20240120161002.jpg","4559fb3f2ca5a0db6e2874229501df08"],["/img/微信图片_20240120161032.jpg","4f24239106011437195f931e9122920b"],["/img/微信图片_20240120161058.jpg","9ad9409c14e0fe84498a1f49c9bcfc41"],["/img/微信图片_20240120161121.jpg","297cb9d9201936ecec8048a88fa432e4"],["/img/微信图片_20240120161142.jpg","e00abdc53110896f3547861b9146facf"],["/img/微信图片_20240120163147.jpg","8ea31640c663542e73b36fb6c6fff685"],["/img/微信图片_20240120170948.jpg","1a9f3587e231d9e302d5b1d7c70c5dbe"],["/index.html","138b86930e7684c8e2c25d6bc4cfb032"],["/js/cat.js","41ae87bcde1fd4cd4466902af1503591"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/newYear.js","2d9cbb2bd9640ef0434e82c36a3e5e15"],["/js/runtime/cursor.js","b4e07f937d5464b160e31d6f6bf9c6ef"],["/js/runtime/runtime.js","1711715645a23fb96760e54397ae01eb"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","eb1be6df58a6e32e0da3487d1d61bba6"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/photos/index.html","5b2f81e7e8da7f0420524d86a14435c3"],["/sw-register.js","7aa4cfb82b1dced3d58a907cc410e9b7"],["/tags/index.html","e37f7ca151a55832b0a852ae14e55fee"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

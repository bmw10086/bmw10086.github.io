/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","dafe63fb5a6754ae316688dbbbf5f509"],["/2023/06/14/PyQt5学习/image-20231031174257188.png","83d264f750d4b3bc486d651dc333b325"],["/2023/06/14/PyQt5学习/image-20231031174320657.png","7a515521d43ef412b6a0c9355a0e6987"],["/2023/06/14/PyQt5学习/image-20231031174343735.png","0ee0d531b4fc2efd08bc69c79ff685d4"],["/2023/06/14/PyQt5学习/index.html","781c5a9f721d06655061168fe474b20c"],["/2023/06/16/古诗/index.html","9d4724f2d02f5e19a4216606d635f53b"],["/2023/06/19/tags/index.html","16c5fa40757ab6f3372f05a9edf45ab8"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","5c838e4c76c39d06b94aa9ae5648cc62"],["/2023/06/24/hello-world/index.html","e454a7c7da442dc3d2a55054df31b3a1"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","7b5cb18f2497f8a9b7fc116f1bcdd5e0"],["/2023/06/24/python学习/index.html","5d0e21e0ffaf101da4492370565dab69"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","1b0061598a5337c4d8b35ec892c53636"],["/2023/09/05/Git的使用/index.html","f6c496e46338850afed6b82c7cb08d60"],["/2023/09/05/hexo命令/index.html","444f91c041b1ff5b7de895d3f3ab636e"],["/2023/09/05/markdown语法学习/index.html","e219021999a6acfecc94895bb6c1a440"],["/2023/09/05/软件推荐/image-20231031174143081.png","084135d6da609e8b1bb0ae7a213edc26"],["/2023/09/05/软件推荐/index.html","2a8ed32f833b63eff15d1f175772864e"],["/2023/10/29/python基础（一）/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/image-20231030171312652.png","719f6864ec5537947204fa6902494cba"],["/2023/10/29/python基础（一）/image-20231030171354823.png","914f25d366946ca270f06b5492400053"],["/2023/10/29/python基础（一）/image-20231030171513124.png","3df506bad347bf52e75c94189fb3242d"],["/2023/10/29/python基础（一）/image-20231030171619978.png","694042abe32acc317a12baf6b044565b"],["/2023/10/29/python基础（一）/image-20231030171644917.png","8df204b3c14d05617cdbc221ba1b71b8"],["/2023/10/29/python基础（一）/image-20231030171724480.png","4664be210d5eeb40698ab8321701ae02"],["/2023/10/29/python基础（一）/image-20231030171747555.png","b5db272406e76dd75f7813d7540348fa"],["/2023/10/29/python基础（一）/index.html","9f97b37257156e00a1584220146b6542"],["/2023/10/29/python基础（二）/image-20230918214356921.png","dc89050cecff8bd65d843f0d704b1edf"],["/2023/10/29/python基础（二）/image-20230918214412107.png","8a1c159ee8f595bba9d56cdcd7075235"],["/2023/10/29/python基础（二）/image-20230918214543463.png","7fb11d0e2c24a10016904f048f407009"],["/2023/10/29/python基础（二）/image-20230918214659985.png","ddb2e839b0c9ae13aef7b5f592bf9c5d"],["/2023/10/29/python基础（二）/image-20230918214939756.png","fb494ce8af605bcbc0880e6d123301e6"],["/2023/10/29/python基础（二）/image-20230918215056391.png","01b404fad1ae08e82b08452cb8a5c77b"],["/2023/10/29/python基础（二）/image-20230918215126783.png","1396e360b75ce2da6b6c77357faa6521"],["/2023/10/29/python基础（二）/image-20230919195007351.png","72e6a3c8343065c9fb3705d9a5462a6f"],["/2023/10/29/python基础（二）/image-20230923234225607.png","32bd98544183798db38bbb01bb1e7f76"],["/2023/10/29/python基础（二）/image-20230924174136255.png","741af3d3d7181b70546b1112d9f75c9b"],["/2023/10/29/python基础（二）/image-20230924174735636.png","8e119165904627d1e882f11532eb33fc"],["/2023/10/29/python基础（二）/image-20230924175515851.png","32924729a3e96a4eda8d539ee8d97ba2"],["/2023/10/29/python基础（二）/image-20230924181156881.png","db05bcc51ae21eecdc22075ac83ce242"],["/2023/10/29/python基础（二）/image-20231012213044511.png","c2841679a3fbb526d221468380fef39a"],["/2023/10/29/python基础（二）/image-20231012213307793.png","411a728839efd02c01604a4c2c68e3db"],["/2023/10/29/python基础（二）/image-20231012213321455.png","606ca0fe7b1f4806bbe95dc6417ac3fb"],["/2023/10/29/python基础（二）/image-20231012220016432.png","9164d7f334c6633523a184fb8c46e26a"],["/2023/10/29/python基础（二）/image-20231028212330264.png","5a380bb63422bd2c1eb172db9d7fdc44"],["/2023/10/29/python基础（二）/image-20231031234351024.png","dc336f5bc922ab938ca95cc391e39157"],["/2023/10/29/python基础（二）/image-20231101183731862.png","8b2616f5cbcf470b7f785ac5a6b72d91"],["/2023/10/29/python基础（二）/image-20231101184902551.png","8028c7d527361b398a6059f5aa36eb5e"],["/2023/10/29/python基础（二）/image-20231101191240653.png","1fbe313731eed1aec018fe0999ad7e4c"],["/2023/10/29/python基础（二）/image-20231103192607126.png","e9e510281da02ec1754f951465f81c98"],["/2023/10/29/python基础（二）/index.html","9451b999976510117a472cdc87fbbf66"],["/2023/10/30/IDEA问题/image-20230723172645588.png","d6c638984ecf87f9db45bc11b544fca3"],["/2023/10/30/IDEA问题/image-20230723172919423.png","03f952d99bcc7266f2d71dd4f38af516"],["/2023/10/30/IDEA问题/image-20230723172957384.png","176d503078121ff22e667d251a039555"],["/2023/10/30/IDEA问题/image-20230723173008430.png","a71ef90a1f2769daec9f7b50e8b4366a"],["/2023/10/30/IDEA问题/image-20230723173144089.png","984eed0cd34c67933f192f1f7c0eb449"],["/2023/10/30/IDEA问题/index.html","bd10d54f305376a6478f8f9cbadc7cf6"],["/2023/10/30/修改任务栏中工具颜色/image-20230728103547408.png","e7cf1755372998273041372812cb5833"],["/2023/10/30/修改任务栏中工具颜色/index.html","a43e10a0122398c588cfdeb8661bb20a"],["/2023/10/30/程序的安装/image-20231029215320342.png","ef736a71d4e183fad56cba9fb607bade"],["/2023/10/30/程序的安装/image-20231029215409352.png","0e261ca387a465335cbb576aba5e4153"],["/2023/10/30/程序的安装/image-20231029215505778.png","b4a7266e75bd979e906e4d18f19c2a8f"],["/2023/10/30/程序的安装/image-20231029215627851.png","68ff3485246137311be4ae1a1d876090"],["/2023/10/30/程序的安装/image-20231029215734808.png","4c478f2f827dbeb1bf80949d95469dcf"],["/2023/10/30/程序的安装/image-20231029215942117.png","763bec33bf5c52b18e791c46574c2223"],["/2023/10/30/程序的安装/image-20231029220157744.png","3567a5cd23a182d5fe0466a0de388f20"],["/2023/10/30/程序的安装/index.html","704ab8a8aca332ec7ca6756358b8ea55"],["/2023/10/31/hexo博客问题/image-20231031171928721.png","dafa59ee4b1703605875d743d40d75e9"],["/2023/10/31/hexo博客问题/image-20231031173343986.png","8933d054b37ba53018eac0b158c8daf3"],["/2023/10/31/hexo博客问题/index.html","7c0963188dd73dca2d2932c4a0a66256"],["/2023/11/04/python基础（三）/image-20230918215201107.png","8a4fa2469008f9cea4b5313e61ff86b9"],["/2023/11/04/python基础（三）/image-20230918215250955.png","6eae6ce93aa67bef8d600831c9a55d13"],["/2023/11/04/python基础（三）/image-20230918215355042.png","4c2a8b5b9ecd062656bf561f63dd2e71"],["/2023/11/04/python基础（三）/image-20230921213134552.png","bfdd9ef9fc305c9afcfbec6f28ddad20"],["/2023/11/04/python基础（三）/image-20231030205214556.png","401fb429d20fcba76a6a91d3ce2b7ba5"],["/2023/11/04/python基础（三）/index.html","dd0aa37a94f37c4322a353b31a926c8c"],["/2023/11/04/python题目练习/1.png","5367697401533d89d7815105f2978bf1"],["/2023/11/04/python题目练习/image-20231104181758079.png","eeb1f1a7813737d56f74c3f3984ab9de"],["/2023/11/04/python题目练习/index.html","0ace8e2bdd5d91d832d6389be922f176"],["/2023/11/06/beauty/index.html","2916db155632c73fe9aa48fb83f8472b"],["/about/index.html","aa9980d74397c5312a3854663b2f44e6"],["/archives/2020/05/index.html","66f9a292790afc54c5382af6b92fd93b"],["/archives/2020/index.html","5e33cb73ec5eb1b1d28ca0a6a55c3b57"],["/archives/2023/06/index.html","aa3ea2252939ed7eb090ce9a43fdcd8a"],["/archives/2023/09/index.html","d34c7db854c3c3ecc183d84f3f6516c3"],["/archives/2023/10/index.html","23e595baf7afd36f87ae289acbe6d720"],["/archives/2023/11/index.html","c9a3da2ca730c1d713aa924a9ad10ddc"],["/archives/2023/index.html","e83bb9dff4176fec681280dab00e69ef"],["/archives/2023/page/2/index.html","4a10fab7fd91fea1d12318955ed6a4e6"],["/archives/2023/page/3/index.html","9271038911b44d4531ff0e01b4134067"],["/archives/index.html","e1fea5083edd3b9be3dea64ece1231c2"],["/archives/page/2/index.html","4f86f5e4c8304c01c959f380a30bad3f"],["/archives/page/3/index.html","652fa35ff2dc112bbdc5c5253f5c53a5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-4fA6nY2PfB.html","1ceae9501049ce5754d3f13fb75bbb63"],["/categories/IDEA/Question/index.html","71be42fe760018c2ada31f31449454f7"],["/categories/IDEA/index.html","2debddb7a6717ffb7a0cdf992981fca8"],["/categories/Question/index.html","dbe1297eb05a05ec0e3c39fea7ae8836"],["/categories/hexo/Question/index.html","8b1cc5979d563384c92e434ca9cdb592"],["/categories/hexo/index.html","eabbff07383baa157c51772fa3aeac8c"],["/categories/index.html","7e0baa606b3c7ea39026ad9da5f1d4e7"],["/categories/python/index.html","a9e32b85bac181b196e41f4b25e08dbf"],["/categories/古文鉴赏/index.html","c5448844b80b86bf58642ce7eaa1f50c"],["/categories/工具学习/index.html","55bd71ecc948114a91e7ed0496597926"],["/categories/开发环境/index.html","b5d37758a571742e841ddc6f9717f493"],["/categories/开发环境/程序/index.html","0c0e92ad29ce0a956f325b73b5ff365c"],["/categories/推荐/index.html","407d6a8b7d2e1fdf42c94a3daf5867c7"],["/categories/搭建教程/index.html","59d4d3d8d1f482765cdcda7e66919869"],["/categories/文案/index.html","f9abf2e8a47d90c74751e48bbf32c746"],["/categories/编程语言学习/index.html","d33e82746c1181471ca8d189065fa736"],["/css/backgound.css","aa9e8bc850d56f15ea89a95656ecbef9"],["/css/index.css","9e06170c582f041767100c442973793d"],["/css/jizai.css","f0c666b9a1ce604c4db9d2fe2071a204"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","cf74f4ff434a6aef5c223fe930020321"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","b43dfc83d76fe298ae1acbf5e8b1aed3"],["/img/2.jpg","fe1ad8a950a0d3189652da9e3e9a4ee7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/aaa.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/background.png","c943eacb08be8b73c6f21611dd70125a"],["/img/bbb.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","43e5d2b4b19189b44fb509ff6ed3139f"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","cd802448e6d740b4495017d92b9c620a"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","68faff77104c13f231426e1ff113bce6"],["/page/2/index.html","cb36331bc099f5912787f93bee40df12"],["/page/3/index.html","c9acc2ecce59558293624ad189b31895"],["/picture/beauty.html","f764542ef003cea76b308668d989ee8a"],["/picture/beauty/image-20231106145246675.png","eadbe0bcba7aa8b15f8509712df659e3"],["/picture/beauty/image-20231106145315880.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145331469.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145340015.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145359854.png","2372e9dec3d7988dafe172f7105f9836"],["/picture/beauty/image-20231106145519310.png","8946341ec3f8634728d2344a4c52ab05"],["/picture/beauty/image-20231106145612942.png","f3a966701ff6fc3187fac27a700c83b5"],["/picture/beauty/image-20231106145650731.png","547eeaf693cdda1a6a16e0078e09e07a"],["/picture/beauty/image-20231106145707231.png","2ce0af86e89cb1c81181c8f0a37a5714"],["/picture/beauty/image-20231106145914501.png","a405593a10fe87ad2bbe8360d70009c0"],["/picture/beauty/image-20231106150351310.png","8145837a31407299970dc01d065c81d7"],["/picture/beauty/image-20231106155928086.png","0bd3a7c41db5a3b1a28c88fba149b0c8"],["/picture/index.html","4bb40865ecb770d0c11be7ff89406eb7"],["/picture/zgu.jpg","7079e9082d64d0affe4145e52d07d579"],["/random/index.html","d32532dabdadc5f25cd406d5f96dd8bd"],["/resources/index.html","3aef0d66218a77f476c32a80f29ad906"],["/sw-register.js","5b5c00106bcf1494f85c4f1fa46982bb"],["/tags/Git/index.html","caacb9e610288fda94e82e767b62232f"],["/tags/Github/index.html","d325a3265b54d93148866fb6e1284464"],["/tags/IDEA/index.html","0aee3dcc20116ce306f56c534f12ad50"],["/tags/PyQt5/index.html","89e8f4ac5f5ed8a9fd152684df9a3dea"],["/tags/Qt-Designer/index.html","65d9d1cd914ee2a62631aa3f3219ed3b"],["/tags/Question/index.html","2f9dbc334c7b99add5ced4004bfef403"],["/tags/Windows/index.html","d45e3cb955e1af6388e2c9c2d63d3b1a"],["/tags/chatgpt/index.html","44098e0dafb64a66ed2ca5440bbd09ae"],["/tags/hexo/index.html","0cc19aa627a8eefa0e2bfebedd18d01e"],["/tags/index.html","11ae93883d533d51664086afbb03bd25"],["/tags/markdown/index.html","b8cdeb851e1f0edbeec34518c462955e"],["/tags/next/index.html","9f5a2742eb269c7b85b56714c5586a04"],["/tags/python/index.html","b8bf1b0ad7d7b43ab2e8041df1f6e5cf"],["/tags/tags/index.html","c2e2ddc49208393530b82d2097ae06a5"],["/tags/vercel/index.html","cec0f772a28088acc6ed0f43abc75903"],["/tags/命令/index.html","63a73e78a46ecc98c136b68e97a5de68"],["/tags/安装/index.html","e1b08e612b7ef808f55bec71870b49f0"],["/tags/工具/index.html","3228a6976adcedc238ccab245933feac"],["/tags/开发环境/index.html","5a99315f1a5eb76f86ccff4fb79d25d0"],["/tags/文本编辑/index.html","e77a7bbee8b804c974645be7b7374091"],["/tags/李白/index.html","35b3bdb43b2b3624bd2fc22cde728f0c"],["/tags/白玉京/index.html","f984f479b381661bc75de96a26ddf0ba"],["/tags/软件推荐/index.html","98cb734b763b7106c97c86ab7fcbc2ae"],["/tags/题目/index.html","b6c553d05c6bead666e7a41d2feb3e73"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","bea20b39b884b17daba452014fc59965"],["/2023/06/14/PyQt5学习/image-20231031174257188.png","83d264f750d4b3bc486d651dc333b325"],["/2023/06/14/PyQt5学习/image-20231031174320657.png","7a515521d43ef412b6a0c9355a0e6987"],["/2023/06/14/PyQt5学习/image-20231031174343735.png","0ee0d531b4fc2efd08bc69c79ff685d4"],["/2023/06/14/PyQt5学习/index.html","ff24eac41daf346e104f6916ae6a657e"],["/2023/06/16/古诗/index.html","ff04cb076a3df58faf1311c862b147aa"],["/2023/06/19/tags/index.html","ed3a505485917750d73199a87f9f4817"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","b929630b02a820dbe32ab87e06630793"],["/2023/06/24/hello-world/index.html","d11a46696225e2fb38a624f477bfcb05"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","7a4e0ddeed89043d35682c75a49bd5f1"],["/2023/06/24/python学习/index.html","9231eefc7b5688b27ae8a2040954376e"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","9dc4e0684f83c134b0cac6c6a835fad2"],["/2023/09/05/Git的使用/index.html","fa6d43e2daa33687a71db5da41f171b0"],["/2023/09/05/hexo命令/index.html","7ee48783cdd709f9dde63c6ffcce05db"],["/2023/09/05/markdown语法学习/index.html","a94fe24affaebbbcaa303c502343d8c8"],["/2023/09/05/软件推荐/image-20231031174143081.png","084135d6da609e8b1bb0ae7a213edc26"],["/2023/09/05/软件推荐/index.html","094630ec324a5a37eabc71a7a367fb44"],["/2023/10/29/python基础（一）/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/image-20231030171312652.png","719f6864ec5537947204fa6902494cba"],["/2023/10/29/python基础（一）/image-20231030171354823.png","914f25d366946ca270f06b5492400053"],["/2023/10/29/python基础（一）/image-20231030171513124.png","3df506bad347bf52e75c94189fb3242d"],["/2023/10/29/python基础（一）/image-20231030171619978.png","694042abe32acc317a12baf6b044565b"],["/2023/10/29/python基础（一）/image-20231030171644917.png","8df204b3c14d05617cdbc221ba1b71b8"],["/2023/10/29/python基础（一）/image-20231030171724480.png","4664be210d5eeb40698ab8321701ae02"],["/2023/10/29/python基础（一）/image-20231030171747555.png","b5db272406e76dd75f7813d7540348fa"],["/2023/10/29/python基础（一）/index.html","f6bf34c6781d00263e69978fc6b7d0d4"],["/2023/10/29/python基础（二）/image-20230918214356921.png","dc89050cecff8bd65d843f0d704b1edf"],["/2023/10/29/python基础（二）/image-20230918214412107.png","8a1c159ee8f595bba9d56cdcd7075235"],["/2023/10/29/python基础（二）/image-20230918214543463.png","7fb11d0e2c24a10016904f048f407009"],["/2023/10/29/python基础（二）/image-20230918214659985.png","ddb2e839b0c9ae13aef7b5f592bf9c5d"],["/2023/10/29/python基础（二）/image-20230918214939756.png","fb494ce8af605bcbc0880e6d123301e6"],["/2023/10/29/python基础（二）/image-20230918215056391.png","01b404fad1ae08e82b08452cb8a5c77b"],["/2023/10/29/python基础（二）/image-20230918215126783.png","1396e360b75ce2da6b6c77357faa6521"],["/2023/10/29/python基础（二）/image-20230919195007351.png","72e6a3c8343065c9fb3705d9a5462a6f"],["/2023/10/29/python基础（二）/image-20230923234225607.png","32bd98544183798db38bbb01bb1e7f76"],["/2023/10/29/python基础（二）/image-20230924174136255.png","741af3d3d7181b70546b1112d9f75c9b"],["/2023/10/29/python基础（二）/image-20230924174735636.png","8e119165904627d1e882f11532eb33fc"],["/2023/10/29/python基础（二）/image-20230924175515851.png","32924729a3e96a4eda8d539ee8d97ba2"],["/2023/10/29/python基础（二）/image-20230924181156881.png","db05bcc51ae21eecdc22075ac83ce242"],["/2023/10/29/python基础（二）/image-20231012213044511.png","c2841679a3fbb526d221468380fef39a"],["/2023/10/29/python基础（二）/image-20231012213307793.png","411a728839efd02c01604a4c2c68e3db"],["/2023/10/29/python基础（二）/image-20231012213321455.png","606ca0fe7b1f4806bbe95dc6417ac3fb"],["/2023/10/29/python基础（二）/image-20231012220016432.png","9164d7f334c6633523a184fb8c46e26a"],["/2023/10/29/python基础（二）/image-20231028212330264.png","5a380bb63422bd2c1eb172db9d7fdc44"],["/2023/10/29/python基础（二）/image-20231031234351024.png","dc336f5bc922ab938ca95cc391e39157"],["/2023/10/29/python基础（二）/image-20231101183731862.png","8b2616f5cbcf470b7f785ac5a6b72d91"],["/2023/10/29/python基础（二）/image-20231101184902551.png","8028c7d527361b398a6059f5aa36eb5e"],["/2023/10/29/python基础（二）/image-20231101191240653.png","1fbe313731eed1aec018fe0999ad7e4c"],["/2023/10/29/python基础（二）/image-20231103192607126.png","e9e510281da02ec1754f951465f81c98"],["/2023/10/29/python基础（二）/index.html","32dfa5cff9c9846cedcf234452898fdc"],["/2023/10/30/IDEA问题/image-20230723172645588.png","d6c638984ecf87f9db45bc11b544fca3"],["/2023/10/30/IDEA问题/image-20230723172919423.png","03f952d99bcc7266f2d71dd4f38af516"],["/2023/10/30/IDEA问题/image-20230723172957384.png","176d503078121ff22e667d251a039555"],["/2023/10/30/IDEA问题/image-20230723173008430.png","a71ef90a1f2769daec9f7b50e8b4366a"],["/2023/10/30/IDEA问题/image-20230723173144089.png","984eed0cd34c67933f192f1f7c0eb449"],["/2023/10/30/IDEA问题/index.html","cd5d25eb5dd02eaefca183409e329c48"],["/2023/10/30/修改任务栏中工具颜色/image-20230728103547408.png","e7cf1755372998273041372812cb5833"],["/2023/10/30/修改任务栏中工具颜色/index.html","af17e453d4a5442013610911868f8ea9"],["/2023/10/30/程序的安装/image-20231029215320342.png","ef736a71d4e183fad56cba9fb607bade"],["/2023/10/30/程序的安装/image-20231029215409352.png","0e261ca387a465335cbb576aba5e4153"],["/2023/10/30/程序的安装/image-20231029215505778.png","b4a7266e75bd979e906e4d18f19c2a8f"],["/2023/10/30/程序的安装/image-20231029215627851.png","68ff3485246137311be4ae1a1d876090"],["/2023/10/30/程序的安装/image-20231029215734808.png","4c478f2f827dbeb1bf80949d95469dcf"],["/2023/10/30/程序的安装/image-20231029215942117.png","763bec33bf5c52b18e791c46574c2223"],["/2023/10/30/程序的安装/image-20231029220157744.png","3567a5cd23a182d5fe0466a0de388f20"],["/2023/10/30/程序的安装/index.html","7fdf435fce46f06b78b0a8536845e6fa"],["/2023/10/31/hexo博客问题/image-20231031171928721.png","dafa59ee4b1703605875d743d40d75e9"],["/2023/10/31/hexo博客问题/image-20231031173343986.png","8933d054b37ba53018eac0b158c8daf3"],["/2023/10/31/hexo博客问题/index.html","c42b03c1cda756a2baa8f27df4a3aaad"],["/2023/11/04/python基础（三）/image-20230918215201107.png","8a4fa2469008f9cea4b5313e61ff86b9"],["/2023/11/04/python基础（三）/image-20230918215250955.png","6eae6ce93aa67bef8d600831c9a55d13"],["/2023/11/04/python基础（三）/image-20230918215355042.png","4c2a8b5b9ecd062656bf561f63dd2e71"],["/2023/11/04/python基础（三）/image-20230921213134552.png","bfdd9ef9fc305c9afcfbec6f28ddad20"],["/2023/11/04/python基础（三）/image-20231030205214556.png","401fb429d20fcba76a6a91d3ce2b7ba5"],["/2023/11/04/python基础（三）/index.html","ac9573976952546e37d4d3feda0141ac"],["/2023/11/04/python题目练习/1.png","5367697401533d89d7815105f2978bf1"],["/2023/11/04/python题目练习/image-20231104181758079.png","eeb1f1a7813737d56f74c3f3984ab9de"],["/2023/11/04/python题目练习/index.html","b074eea60c5d27edff003352fc263222"],["/about/index.html","989c957244ccd030f63912860bbb4a9b"],["/archives/2020/05/index.html","75799f8b3c0689d8bf9b13d192193287"],["/archives/2020/index.html","ede744deaa8f05e1e44c77682fb91dac"],["/archives/2023/06/index.html","3f1d91a4c4e4d81fdad8030d47007e95"],["/archives/2023/09/index.html","dbce9c02fa586907e353a867e01359ea"],["/archives/2023/10/index.html","566679bbfe560562c15c16bcbbf230e0"],["/archives/2023/11/index.html","899065eb7840367707ef8fc46026dc98"],["/archives/2023/index.html","68e87e34431f87529b716f4199fac0b7"],["/archives/2023/page/2/index.html","fe74f9bb2cadd4ef23200dcba1c90c15"],["/archives/index.html","719acde917ae7e1a6e534b43eb5243ca"],["/archives/page/2/index.html","4bfc0d75c2d84b680ecdabf717e91e18"],["/archives/page/3/index.html","b7571a47e5d3cd2861421108d114673e"],["/baidu_verify_codeva-4fA6nY2PfB.html","292eb7ea74f7cec2ac03885980956922"],["/categories/IDEA/Question/index.html","ed4f0c436bbb0c25c1f68407d24e1971"],["/categories/IDEA/index.html","1d4ff66b0f7fe61262b6cb081f6f0020"],["/categories/Question/index.html","931b523f01c6b8f03e27890800d6eef7"],["/categories/hexo/Question/index.html","5ed44b650d2739a80a2c35e3f41a6c1c"],["/categories/hexo/index.html","6ffff7225e607d3d739db7ab73d504c4"],["/categories/index.html","5d4d9020c59371b1ad768dde3689f0e7"],["/categories/python/index.html","2d185671c1864ea6a2d60bac00b1aa23"],["/categories/古文鉴赏/index.html","329c4b81d9e3e5dd31fdc2a1fdda9354"],["/categories/工具学习/index.html","69d2f6f28ef1345753c5642c6eae91b0"],["/categories/开发环境/index.html","427e15e12532c14e3ee2442ea9859be6"],["/categories/开发环境/程序/index.html","42541f4c83ea623d57c52093a574c375"],["/categories/推荐/index.html","1d4cfed0195b5185ca93aeda70828fd7"],["/categories/搭建教程/index.html","13dd272ae2e76104952503e9e668fb46"],["/categories/文案/index.html","049afcf93508df47280ed18269d48cb3"],["/categories/编程语言学习/index.html","4f63a478305aa727d2277fa0c3766bc5"],["/css/index.css","2cff5f8089711114752e49c283684d4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","d9568b72f8e78acad741eab64b77516e"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","b43dfc83d76fe298ae1acbf5e8b1aed3"],["/img/2.jpg","fe1ad8a950a0d3189652da9e3e9a4ee7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/aaa.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/bbb.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","c9fd03138604153e4f04a5410d457bf4"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","5d47614843a5b7529d2554be2a676cba"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","256f5ca5360456564e26f94614f1bffc"],["/page/2/index.html","0c2ad2aea408473997edacf3b12be819"],["/page/3/index.html","d1f108d10ca5cdd989ee43ed3d7b27c5"],["/resources/index.html","1056e1f03af7cbaa926c6842b8449a6f"],["/sw-register.js","dfccc39a7c28d8862ad6aa6d53055b42"],["/tags/Git/index.html","22d5adfbbfa6ef205c89d4156e3188c1"],["/tags/GitHub/index.html","94ab4367716d1d4266ab489f5c87a79a"],["/tags/IDEA/index.html","c1b28c27a4d00f6c856bb55ce756d26d"],["/tags/PyQt5/index.html","ce6ec7f2c33b9f5aa8047dbc1b29a653"],["/tags/Qt-Designer/index.html","1096b6c28df8415a54c4b2dd90147691"],["/tags/Question/index.html","a81371379840fc63cada935800dd3981"],["/tags/Windows/index.html","418efb2d00a4269487ff9de9a3c73362"],["/tags/chatgpt/index.html","72f2f3b0500b79c04d99c71f9362a919"],["/tags/hexo/index.html","15f66d93b3a3afcd170c3f4d24c5ffe3"],["/tags/index.html","81f127f6ff29fe66cc9e0f1c0d6ff5a2"],["/tags/markdown/index.html","1fa71d7bce2ea6f40d2703f048f93183"],["/tags/next/index.html","edf72a7560a93ddb7aada5aa6c8035e0"],["/tags/python/index.html","697ca2d6499070736ae1ada36bc185c4"],["/tags/tags/index.html","060003e6e0f5ed45e1eebaf8f4344b1d"],["/tags/vercel/index.html","b38259aa71b17942249ea386b6712322"],["/tags/命令/index.html","c4c143c87c6244970d3f4457ba7564b6"],["/tags/安装/index.html","390fcb0f66e24b2f294c1b7861de950f"],["/tags/工具/index.html","ea94c3e86b5f17ce5ab9d8c597de5730"],["/tags/开发环境/index.html","e7b563c7337468d3805fd1d1b7e9a71e"],["/tags/文本编辑/index.html","6ac4ddf86ba6f0a16e39886aa97987df"],["/tags/李白/index.html","854747c41e5fea143a384e517760afe0"],["/tags/白玉京/index.html","d4102576f1a4fc90f1e768c0f0a184f8"],["/tags/软件推荐/index.html","42960a778e31ccba0df56452a67358a5"],["/tags/题目/index.html","45f688fbd074b6417cdbeb8f59674eb2"]];
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

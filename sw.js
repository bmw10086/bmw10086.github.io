/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","2b1e090896df9a4a47294212739a80a1"],["/2023/06/14/PyQt5学习/image-20231031174257188.png","83d264f750d4b3bc486d651dc333b325"],["/2023/06/14/PyQt5学习/image-20231031174320657.png","7a515521d43ef412b6a0c9355a0e6987"],["/2023/06/14/PyQt5学习/image-20231031174343735.png","0ee0d531b4fc2efd08bc69c79ff685d4"],["/2023/06/14/PyQt5学习/index.html","a9121b59d2ff0151270fb030311ca385"],["/2023/06/16/古诗/index.html","d6ec657671f6a63530b7e9c949865216"],["/2023/06/19/tags/index.html","8b16e084b9025feb5806a44ce6b09c21"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","b723f8d70a002d78f3814f3d6eb84bab"],["/2023/06/24/hello-world/index.html","5a6d4fd6323ed405ab3c73fbe821d5eb"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","6f12706ce8f816a5b022f67e6c256f3b"],["/2023/06/24/python学习/index.html","ba247fe472161448a102e9cb85f1a58e"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","a8e8c773f092184c50f0770c76e3b2e1"],["/2023/09/05/Git的使用/index.html","cc91dd9dbf54346bc5120bb14867969c"],["/2023/09/05/hexo命令/index.html","8ad424d7568705319e7713859db1531c"],["/2023/09/05/markdown语法学习/index.html","b06a80cac839e10a89667332209a529a"],["/2023/09/05/软件推荐/image-20231031174143081.png","084135d6da609e8b1bb0ae7a213edc26"],["/2023/09/05/软件推荐/index.html","c17dfbd6a592f240e195e739b5a6eb80"],["/2023/10/29/python基础（一）/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/image-20231030171312652.png","719f6864ec5537947204fa6902494cba"],["/2023/10/29/python基础（一）/image-20231030171354823.png","914f25d366946ca270f06b5492400053"],["/2023/10/29/python基础（一）/image-20231030171513124.png","3df506bad347bf52e75c94189fb3242d"],["/2023/10/29/python基础（一）/image-20231030171619978.png","694042abe32acc317a12baf6b044565b"],["/2023/10/29/python基础（一）/image-20231030171644917.png","8df204b3c14d05617cdbc221ba1b71b8"],["/2023/10/29/python基础（一）/image-20231030171724480.png","4664be210d5eeb40698ab8321701ae02"],["/2023/10/29/python基础（一）/image-20231030171747555.png","b5db272406e76dd75f7813d7540348fa"],["/2023/10/29/python基础（一）/index.html","2a573fd812eefc40cfe078c2683abbe2"],["/2023/10/29/python基础（二）/image-20230918214356921.png","dc89050cecff8bd65d843f0d704b1edf"],["/2023/10/29/python基础（二）/image-20230918214412107.png","8a1c159ee8f595bba9d56cdcd7075235"],["/2023/10/29/python基础（二）/image-20230918214543463.png","7fb11d0e2c24a10016904f048f407009"],["/2023/10/29/python基础（二）/image-20230918214659985.png","ddb2e839b0c9ae13aef7b5f592bf9c5d"],["/2023/10/29/python基础（二）/image-20230918214939756.png","fb494ce8af605bcbc0880e6d123301e6"],["/2023/10/29/python基础（二）/image-20230918215056391.png","01b404fad1ae08e82b08452cb8a5c77b"],["/2023/10/29/python基础（二）/image-20230918215126783.png","1396e360b75ce2da6b6c77357faa6521"],["/2023/10/29/python基础（二）/image-20230919195007351.png","72e6a3c8343065c9fb3705d9a5462a6f"],["/2023/10/29/python基础（二）/image-20230923234225607.png","32bd98544183798db38bbb01bb1e7f76"],["/2023/10/29/python基础（二）/image-20230924174136255.png","741af3d3d7181b70546b1112d9f75c9b"],["/2023/10/29/python基础（二）/image-20230924174735636.png","8e119165904627d1e882f11532eb33fc"],["/2023/10/29/python基础（二）/image-20230924175515851.png","32924729a3e96a4eda8d539ee8d97ba2"],["/2023/10/29/python基础（二）/image-20230924181156881.png","db05bcc51ae21eecdc22075ac83ce242"],["/2023/10/29/python基础（二）/image-20231012213044511.png","c2841679a3fbb526d221468380fef39a"],["/2023/10/29/python基础（二）/image-20231012213307793.png","411a728839efd02c01604a4c2c68e3db"],["/2023/10/29/python基础（二）/image-20231012213321455.png","606ca0fe7b1f4806bbe95dc6417ac3fb"],["/2023/10/29/python基础（二）/image-20231012220016432.png","9164d7f334c6633523a184fb8c46e26a"],["/2023/10/29/python基础（二）/image-20231028212330264.png","5a380bb63422bd2c1eb172db9d7fdc44"],["/2023/10/29/python基础（二）/image-20231031234351024.png","dc336f5bc922ab938ca95cc391e39157"],["/2023/10/29/python基础（二）/image-20231101183731862.png","8b2616f5cbcf470b7f785ac5a6b72d91"],["/2023/10/29/python基础（二）/image-20231101184902551.png","8028c7d527361b398a6059f5aa36eb5e"],["/2023/10/29/python基础（二）/image-20231101191240653.png","1fbe313731eed1aec018fe0999ad7e4c"],["/2023/10/29/python基础（二）/image-20231103192607126.png","e9e510281da02ec1754f951465f81c98"],["/2023/10/29/python基础（二）/index.html","0638bdfe5bf4194416c9c69558873137"],["/2023/10/30/IDEA问题/image-20230723172645588.png","d6c638984ecf87f9db45bc11b544fca3"],["/2023/10/30/IDEA问题/image-20230723172919423.png","03f952d99bcc7266f2d71dd4f38af516"],["/2023/10/30/IDEA问题/image-20230723172957384.png","176d503078121ff22e667d251a039555"],["/2023/10/30/IDEA问题/image-20230723173008430.png","a71ef90a1f2769daec9f7b50e8b4366a"],["/2023/10/30/IDEA问题/image-20230723173144089.png","984eed0cd34c67933f192f1f7c0eb449"],["/2023/10/30/IDEA问题/index.html","a56f6d175534820ca140b23721d22bf1"],["/2023/10/30/修改任务栏中工具颜色/image-20230728103547408.png","e7cf1755372998273041372812cb5833"],["/2023/10/30/修改任务栏中工具颜色/index.html","e5ef3349a260916f33177e498e018ba8"],["/2023/10/30/程序的安装/image-20231029215320342.png","ef736a71d4e183fad56cba9fb607bade"],["/2023/10/30/程序的安装/image-20231029215409352.png","0e261ca387a465335cbb576aba5e4153"],["/2023/10/30/程序的安装/image-20231029215505778.png","b4a7266e75bd979e906e4d18f19c2a8f"],["/2023/10/30/程序的安装/image-20231029215627851.png","68ff3485246137311be4ae1a1d876090"],["/2023/10/30/程序的安装/image-20231029215734808.png","4c478f2f827dbeb1bf80949d95469dcf"],["/2023/10/30/程序的安装/image-20231029215942117.png","763bec33bf5c52b18e791c46574c2223"],["/2023/10/30/程序的安装/image-20231029220157744.png","3567a5cd23a182d5fe0466a0de388f20"],["/2023/10/30/程序的安装/index.html","57bda3561e67631479738cc18d446d0d"],["/2023/10/31/hexo博客问题/image-20231031171928721.png","dafa59ee4b1703605875d743d40d75e9"],["/2023/10/31/hexo博客问题/image-20231031173343986.png","8933d054b37ba53018eac0b158c8daf3"],["/2023/10/31/hexo博客问题/index.html","f5112b30478d51ef6273b3bbf8366056"],["/2023/11/04/python基础（三）/image-20230918215201107.png","8a4fa2469008f9cea4b5313e61ff86b9"],["/2023/11/04/python基础（三）/image-20230918215250955.png","6eae6ce93aa67bef8d600831c9a55d13"],["/2023/11/04/python基础（三）/image-20230918215355042.png","4c2a8b5b9ecd062656bf561f63dd2e71"],["/2023/11/04/python基础（三）/image-20230921213134552.png","bfdd9ef9fc305c9afcfbec6f28ddad20"],["/2023/11/04/python基础（三）/image-20231030205214556.png","401fb429d20fcba76a6a91d3ce2b7ba5"],["/2023/11/04/python基础（三）/index.html","6550777366ebb7223e0151533bf2d52b"],["/2023/11/04/python题目练习/1.png","5367697401533d89d7815105f2978bf1"],["/2023/11/04/python题目练习/image-20231104181758079.png","eeb1f1a7813737d56f74c3f3984ab9de"],["/2023/11/04/python题目练习/index.html","33713e24f16bd8372b78d15e6484d353"],["/2023/11/06/beauty/index.html","09a430314e8fa6c06d8af08b477261cc"],["/about/index.html","10da4fc909bb21fdf3cf318d9ed2614f"],["/archives/2020/05/index.html","be9f3b6b8ad9adac25f5c84f7458be32"],["/archives/2020/index.html","92437013ab42ae5fc505970f0caee2b0"],["/archives/2023/06/index.html","9de47562fea3c24916e0ee24eba58db0"],["/archives/2023/09/index.html","3050b9fc58147f605fa1e0fc98ebf2a9"],["/archives/2023/10/index.html","5172ce6811986bc1643b52336c4f4f24"],["/archives/2023/11/index.html","c9cb3125091917d824d046d81114823a"],["/archives/2023/index.html","22c05587f85f2fd7a829449659082b0d"],["/archives/2023/page/2/index.html","b2bc53bb9869af71f74414ecb0c858ab"],["/archives/2023/page/3/index.html","173d11f816b3bca6b2756357c66f9406"],["/archives/index.html","20e5aab50eb3bcbf7a72b8cf6e1fd708"],["/archives/page/2/index.html","20f1c29f70694fb9f3e3df67a3c14394"],["/archives/page/3/index.html","769214836f0411f0708c7ccca581c84f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-4fA6nY2PfB.html","2c40e5a812bce1fc9b93c98542ad264f"],["/categories/IDEA/Question/index.html","266dcb825ffd7a52b066dc47609140b8"],["/categories/IDEA/index.html","74094fc157090f3b4dc8657f70b15696"],["/categories/Question/index.html","5ad8a247976c8b36b0bd5ad80205a381"],["/categories/hexo/Question/index.html","ec5c4a6eb95f7795d6dcc1fd42926fdb"],["/categories/hexo/index.html","ffba264fa5e133de5b013c2e5ca5ee55"],["/categories/index.html","d8366c0f85ce471e27f0a9003e9b5c84"],["/categories/python/index.html","b1536a74ce0333b56d797bb80b43a356"],["/categories/古文鉴赏/index.html","e5ceeef503e0f5e3639d5b6d93d14d4b"],["/categories/工具学习/index.html","5c7567f870e7a7e495afd1a80129e1b2"],["/categories/开发环境/index.html","cefa076b1f9a8eb3d4284af8e876007f"],["/categories/开发环境/程序/index.html","aa07c9850aec1ee325f07f4fef024fc4"],["/categories/推荐/index.html","ddaf7392f56deaa9da7279d8662ef917"],["/categories/搭建教程/index.html","7854c501b04890f1e5fcf5a2c6aedaa4"],["/categories/文案/index.html","6f85ef3d3887c895883d53f03508b877"],["/categories/编程语言学习/index.html","eb512b92d3315c776ebaa06eb08d2661"],["/css/index.css","82dbc986ef7b4c6a25c8a7a127921af4"],["/css/jizai.css","f0c666b9a1ce604c4db9d2fe2071a204"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","be76556222cd76a2aa35a7a30c1323a5"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","b43dfc83d76fe298ae1acbf5e8b1aed3"],["/img/2.jpg","fe1ad8a950a0d3189652da9e3e9a4ee7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/aaa.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/bbb.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","e917413073fe48cb038c3d0a6b9d844b"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","7bff86ca59462e53b7b93818899257c6"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","bb3ef30bcb48408d898466d0669d94bb"],["/page/2/index.html","68e94381433a38b4f78c8e59c356303f"],["/page/3/index.html","b7ec99422774e5a7f59caa4e3c1cb284"],["/picture/beauty.html","1007971f7188afadceaba7f7fffd7b5e"],["/picture/beauty/image-20231106145246675.png","eadbe0bcba7aa8b15f8509712df659e3"],["/picture/beauty/image-20231106145315880.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145331469.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145340015.png","6ff17cebdf22c5695da8ff4a1ccb6154"],["/picture/beauty/image-20231106145359854.png","2372e9dec3d7988dafe172f7105f9836"],["/picture/beauty/image-20231106145519310.png","8946341ec3f8634728d2344a4c52ab05"],["/picture/beauty/image-20231106145612942.png","f3a966701ff6fc3187fac27a700c83b5"],["/picture/beauty/image-20231106145650731.png","547eeaf693cdda1a6a16e0078e09e07a"],["/picture/beauty/image-20231106145707231.png","2ce0af86e89cb1c81181c8f0a37a5714"],["/picture/beauty/image-20231106145914501.png","a405593a10fe87ad2bbe8360d70009c0"],["/picture/beauty/image-20231106150351310.png","8145837a31407299970dc01d065c81d7"],["/picture/beauty/image-20231106155928086.png","0bd3a7c41db5a3b1a28c88fba149b0c8"],["/picture/index.html","6e0acbfbe28f68bc313fc70f4de38696"],["/picture/zgu.jpg","7079e9082d64d0affe4145e52d07d579"],["/resources/index.html","958e9b3b06e2b8e920f83e592fd2684a"],["/sw-register.js","e96bbb6d36acb3053aeb7013e86fcffe"],["/tags/Git/index.html","e3b04367581a6572e5490a263381511b"],["/tags/GitHub/index.html","1688dd6bddd6276b511e04ec66a89bed"],["/tags/IDEA/index.html","1c6b6c879e3d1e82587ddbf5db4f6903"],["/tags/PyQt5/index.html","4b3853c0228e570f975d3ff13747f3e3"],["/tags/Qt-Designer/index.html","aec75c613da6a68111d2dcc2415b9a3f"],["/tags/Question/index.html","135b08d6e7520715f0b31f2f6901f168"],["/tags/Windows/index.html","78310ef5df96c048049b6a5acf4018d1"],["/tags/chatgpt/index.html","bbb2c1307cd2d65ef3755140d6263bd1"],["/tags/hexo/index.html","34862038acd313bac5fcd8473db24132"],["/tags/index.html","b71fc909d978544565e7fecd9fd24a4c"],["/tags/markdown/index.html","b938dfe654fb3d4a38d82dd8e7b40e92"],["/tags/next/index.html","395c610c6c2e9657726ec3d3d1677265"],["/tags/python/index.html","1655495fb9890d3a40ea5b6b4116bbb2"],["/tags/tags/index.html","a6011731ca262e8838d8a696a20b5d6b"],["/tags/vercel/index.html","e2adfb248a2c527e2ee4139a38781cce"],["/tags/命令/index.html","4d62b472715fa1fe2be1679d9d2bde34"],["/tags/安装/index.html","e85fd91428bb3fb7746e9b56dc2de37e"],["/tags/工具/index.html","a91bc6c8184c34065ded79cd80be878b"],["/tags/开发环境/index.html","d563a42b16fc0e8290ba9129358bad83"],["/tags/文本编辑/index.html","98f5165f8d41662f08fcf55b9f1c9faf"],["/tags/李白/index.html","e016afeffb871dcdae7896af8275421a"],["/tags/白玉京/index.html","aaf3da740318e5bcd24fa21d2060bcc0"],["/tags/软件推荐/index.html","96b910ba0a1c8cfd047e57eb3f6aec1f"],["/tags/题目/index.html","ebbf1de82a33603831e01a4a09ba8d0a"]];
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

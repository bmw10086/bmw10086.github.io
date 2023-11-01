/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","8e65a918eb1e8cf572005aeb34d58c65"],["/2023/06/14/PyQt5学习/image-20231031174257188.png","83d264f750d4b3bc486d651dc333b325"],["/2023/06/14/PyQt5学习/image-20231031174320657.png","7a515521d43ef412b6a0c9355a0e6987"],["/2023/06/14/PyQt5学习/image-20231031174343735.png","0ee0d531b4fc2efd08bc69c79ff685d4"],["/2023/06/14/PyQt5学习/index.html","38061c6db770d876bd2d4c149f7021a3"],["/2023/06/16/古诗/index.html","539b57d81317dacf16d2a9ffdcea2c56"],["/2023/06/19/tags/index.html","3703e2a0b2c27e32afbdf5a8b605a958"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","304eab351be1f9b1e4f9f3ffa547ec37"],["/2023/06/24/hello-world/index.html","be6e880c9afb0c09fcfd0af42f6607a0"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","db0cd35fbcc765fb99c48919b9c07342"],["/2023/06/24/python学习/index.html","55d97a20138f86147c310324192de32f"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","7fecc74a6d03f720657524bce4622b17"],["/2023/09/05/Git的使用/index.html","a078ead24a2138ffb2531673040f6b63"],["/2023/09/05/hexo命令/index.html","bda66f9af07e05af322f1fd1e4e0e222"],["/2023/09/05/markdown语法学习/index.html","bb13fbf1792220a626aa377543d845cb"],["/2023/09/05/软件推荐/image-20231031174143081.png","084135d6da609e8b1bb0ae7a213edc26"],["/2023/09/05/软件推荐/index.html","7d0117a88ccaa1f422d74424fe2b8da7"],["/2023/10/29/python基础（一）/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/image-20231030171312652.png","719f6864ec5537947204fa6902494cba"],["/2023/10/29/python基础（一）/image-20231030171354823.png","914f25d366946ca270f06b5492400053"],["/2023/10/29/python基础（一）/image-20231030171513124.png","3df506bad347bf52e75c94189fb3242d"],["/2023/10/29/python基础（一）/image-20231030171619978.png","694042abe32acc317a12baf6b044565b"],["/2023/10/29/python基础（一）/image-20231030171644917.png","8df204b3c14d05617cdbc221ba1b71b8"],["/2023/10/29/python基础（一）/image-20231030171724480.png","4664be210d5eeb40698ab8321701ae02"],["/2023/10/29/python基础（一）/image-20231030171747555.png","b5db272406e76dd75f7813d7540348fa"],["/2023/10/29/python基础（一）/index.html","9738a1603d7480c82007e31d93f6f1b2"],["/2023/10/29/python基础（二）/index.html","34cb5761e33483f2dad36847b69be5d0"],["/2023/10/30/IDEA问题/image-20230723172645588.png","d6c638984ecf87f9db45bc11b544fca3"],["/2023/10/30/IDEA问题/image-20230723172919423.png","03f952d99bcc7266f2d71dd4f38af516"],["/2023/10/30/IDEA问题/image-20230723172957384.png","176d503078121ff22e667d251a039555"],["/2023/10/30/IDEA问题/image-20230723173008430.png","a71ef90a1f2769daec9f7b50e8b4366a"],["/2023/10/30/IDEA问题/image-20230723173144089.png","984eed0cd34c67933f192f1f7c0eb449"],["/2023/10/30/IDEA问题/index.html","bdabd70529a2c7a73bdaac4036cae2e7"],["/2023/10/30/修改任务栏中工具颜色/image-20230728103547408.png","e7cf1755372998273041372812cb5833"],["/2023/10/30/修改任务栏中工具颜色/index.html","f84d096715ef97328d2f466c24d13743"],["/2023/10/30/程序的安装/image-20231029215320342.png","ef736a71d4e183fad56cba9fb607bade"],["/2023/10/30/程序的安装/image-20231029215409352.png","0e261ca387a465335cbb576aba5e4153"],["/2023/10/30/程序的安装/image-20231029215505778.png","b4a7266e75bd979e906e4d18f19c2a8f"],["/2023/10/30/程序的安装/image-20231029215627851.png","68ff3485246137311be4ae1a1d876090"],["/2023/10/30/程序的安装/image-20231029215734808.png","4c478f2f827dbeb1bf80949d95469dcf"],["/2023/10/30/程序的安装/image-20231029215942117.png","763bec33bf5c52b18e791c46574c2223"],["/2023/10/30/程序的安装/image-20231029220157744.png","3567a5cd23a182d5fe0466a0de388f20"],["/2023/10/30/程序的安装/index.html","b4abfe8f30447dbffcd2bdcc84f37d8f"],["/2023/10/31/hexo博客问题/image-20231031171928721.png","dafa59ee4b1703605875d743d40d75e9"],["/2023/10/31/hexo博客问题/image-20231031173343986.png","8933d054b37ba53018eac0b158c8daf3"],["/2023/10/31/hexo博客问题/index.html","946a5fa10fe362568368c365428b7b67"],["/about/index.html","948df77b62d5a4a66db785abc47c8e07"],["/archives/2020/05/index.html","18bf042ed59e25796bddb7104eebfa59"],["/archives/2020/index.html","1e03f65d14eb696a58f047caa15abefb"],["/archives/2023/06/index.html","08b6b4f2b50ff8e1a6dd3b2abb7735e8"],["/archives/2023/09/index.html","a76085577468a3d0e1e2195c71a80e6b"],["/archives/2023/10/index.html","42205eba495b6d693b2356def2fc4a94"],["/archives/2023/index.html","7d5d099f51155b3e9ecfbe584f22277c"],["/archives/2023/page/2/index.html","5a5f852fba363c054a0ac726dd2c92a4"],["/archives/index.html","c321fbb15a80c93fb568afda613af358"],["/archives/page/2/index.html","3ac74bcb1e0b732955b805ffe7b08412"],["/baidu_verify_codeva-4fA6nY2PfB.html","fe2b2bae15336bd811fec8f07e79e2b9"],["/categories/IDEA/Question/index.html","86b419b7ac437ba83ec05680415de179"],["/categories/IDEA/index.html","78f05851ce87b4bb7cd8c9b24ac77ecc"],["/categories/Question/index.html","beca2accd1ea9915c934f275f4f3821c"],["/categories/hexo/Question/index.html","1caf46f4047df2f4813ef9ee1612c04b"],["/categories/hexo/index.html","de8adcf1d868f00855c576933e795f0b"],["/categories/index.html","b343ac33bda56f0a380e6593aa275a07"],["/categories/古文鉴赏/index.html","d89c4139a59f33f49c13e23245caec7b"],["/categories/工具学习/index.html","b1b31d06e202f1262133e0f6b495d924"],["/categories/开发环境/index.html","0b2980ce9f17d2e0568174b70dad1701"],["/categories/开发环境/程序/index.html","797f5beea909d4b34d01922493507f05"],["/categories/推荐/index.html","d1c9ca330dbcdd3287efea10c3aa4829"],["/categories/搭建教程/index.html","a28616f2170e4b5e512ceafa3c2fb6c3"],["/categories/文案/index.html","f345adbd0ec1514add62f72dcc2ac63e"],["/categories/编程语言学习/index.html","eac06efbb504b9101ba07cffd4d8e922"],["/css/index.css","2cff5f8089711114752e49c283684d4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","65a31f9068c1edefe74a507405b58bdb"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","b43dfc83d76fe298ae1acbf5e8b1aed3"],["/img/2.jpg","fe1ad8a950a0d3189652da9e3e9a4ee7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/aaa.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/bbb.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","b5c479e8287175ce1b9fe46db0e8263c"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","fb7a22e8133f3994a4157da34feca0e1"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","73c5464f470e4b72433312c3a4f10922"],["/page/2/index.html","0675f1f4790e7e00011ca137fbaa3f4a"],["/resources/index.html","61f70d790a8f33ddcfeb89422008eb51"],["/sw-register.js","2ed26a260af6a29a57789a7e0ef2b5af"],["/tags/Git/index.html","57aa448ddcf43a88bef1fc3f21731e55"],["/tags/GitHub/index.html","aafa851fcc688480dd95179657ea3f30"],["/tags/IDEA/index.html","ab25e6f0ad787fa8e785926a971bcf9b"],["/tags/PyQt5/index.html","cbb3b6df5db7b2925d66598c6904fef4"],["/tags/Qt-Designer/index.html","0fa2a5cb11fb0426fad2b3bacd5f6164"],["/tags/Question/index.html","8925c49e32f70bd3fae28fa3c3dac135"],["/tags/Windows/index.html","2ecaf4386d7f24171d0f1671750ddcb8"],["/tags/chatgpt/index.html","e14b1f04ffae48e8179718000b4dfb6c"],["/tags/hexo/index.html","4ea2109fabe00551583286f3d4d4e345"],["/tags/index.html","ae9a29d97317b8493c190b926020c9d5"],["/tags/markdown/index.html","f6dee6a555046c37002b1339130c5095"],["/tags/next/index.html","86c738783ed739178d7de9ddc112e964"],["/tags/python/index.html","18c3c21a51a82ec486fd9d58af7e7d8d"],["/tags/tags/index.html","b3be5adf2695c76b89cc891d5702210f"],["/tags/vercel/index.html","16d698090b78d22accaa46a30952cbd9"],["/tags/命令/index.html","40fd6269489aa55fad538c24c3526b2c"],["/tags/安装/index.html","05227c2bafc1c8e586d85f60609b1116"],["/tags/工具/index.html","86b2dd329e1c4436e898515431bc93b0"],["/tags/开发环境/index.html","3c8020e8a6fedb5eb349e8bb8cd50d3f"],["/tags/文本编辑/index.html","96fb406f5777c1d223ea3ffaec88b03b"],["/tags/李白/index.html","5fc8f83d8e8fa59595b2c80f6af28cb7"],["/tags/白玉京/index.html","1c1f33ad1395cbd8e9f9b9b17bb1a91a"],["/tags/软件推荐/index.html","806eebfba9984d9041a610b58af13293"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","67159d57ec051ab262a81ad44ba27063"],["/2023/06/14/PyQt5学习/index.html","5156280fd9db71e91b378ed3c862e998"],["/2023/06/16/古诗/index.html","b1a848779b039418aacb326961496dfb"],["/2023/06/19/tags/index.html","b8cfb287989f235da2da6413ca9d926c"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","17f0ad48f0e167b62e988db77b997be9"],["/2023/06/24/hello-world/index.html","d2fafd2e14e80d3093c142443aa7868f"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","b33b625968140c591d7cfb0c7bcb20d5"],["/2023/06/24/python学习/index.html","27e7406fa79fd86516792226130c08dd"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","cf07938e475688505675d5d045456edf"],["/2023/09/05/Git的使用/index.html","c79d5b9ecc45f0c0b2195d83e9738744"],["/2023/09/05/hexo命令/index.html","22a4599276731e9a55cf56f0865fc215"],["/2023/09/05/markdown语法学习/index.html","0277d5f4b8ff46b90a34ac0dbe7a584b"],["/2023/09/05/软件推荐/index.html","f7a817eb997b927e75eaca6226a1e060"],["/2023/10/29/python基础（一）/index.html","cbb07e61553371201c6969a0524f1241"],["/2023/10/29/python基础（一）/index/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/index/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/index/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/index/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/index/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/index/index.html","1d5d21b545da4f4ff5733dabfddced0e"],["/2023/10/29/python基础（二）/index.html","42f0f26ce592ab040ab11619adc3da64"],["/about/index.html","8c5e71cab408de1fd9fb84cdc574246a"],["/archives/2020/05/index.html","fafe11b1d9faed8d0e747ae7989de9dc"],["/archives/2020/index.html","be86f6264c207a634fa896935f840280"],["/archives/2023/06/index.html","2b6002a931824677f7e118fcf6b60eb9"],["/archives/2023/09/index.html","55a72f6a776afeea40ed5a79d360bde7"],["/archives/2023/10/index.html","7f299600caa22b2174b14633b13ee973"],["/archives/2023/index.html","7c555087ca85494dcf9c5370eb60e31a"],["/archives/2023/page/2/index.html","47b4d1dcbeeb9e91fc8fb2496c6c26ca"],["/archives/index.html","e6a669211739c70823d64048a26a7493"],["/archives/page/2/index.html","35228963b46c33026578d5fc3ae949aa"],["/baidu_verify_codeva-4fA6nY2PfB.html","b815ddc2efa443a6c9f45e0b65d08b96"],["/categories/hexo/index.html","ed0781a6cc604945aebd494573681269"],["/categories/index.html","f80cc3a3f69a0f63c906d1bcac59b0fd"],["/categories/古文鉴赏/index.html","6fdc67a9027d6c3a9a0421d7194e9b7b"],["/categories/工具学习/index.html","10772030ef4f6318249f737384b0d6c9"],["/categories/推荐/index.html","6c3ed2d723dd9f4439ef5cf611529987"],["/categories/搭建教程/index.html","152ab66d8eaa1e89dd1ea52ac6b92aa9"],["/categories/文案/index.html","40000d905898af3511b5dbc3f3716cec"],["/categories/编程语言学习/index.html","8a3a78dea2d142091d1646448a75bfe6"],["/css/index.css","7658b558a754c2c91c8db3e9ac4a7b5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","f25dfb89671086df0d36c8c4609f03fc"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/2.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","bbd473ab5bbde68d60d2e08c38763f1f"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","ab692f228ea2ea795b328e1fa34f34ff"],["/page/2/index.html","ce60262a555d725321421cdae424c29d"],["/resources/index.html","b650695d2c7cc503b32d89e37e13af4c"],["/sw-register.js","d5ba1a769470cfb9ef15e8b0f95542b6"],["/tags/Git/index.html","a3ad1104ab626beb99251943604b70ee"],["/tags/GitHub/index.html","06440e3ba7a206117e7000354ca4bea9"],["/tags/PyQt5/index.html","23729cc8eeb8ff0da0a6177398540ea5"],["/tags/Qt-Designer/index.html","30fa374d1d0beb4d501b9d79c942d140"],["/tags/chatgpt/index.html","83c925cd8abd52841c2a910dc95160ef"],["/tags/hexo/index.html","949467155ed90dbb0cb5e1e54e249f91"],["/tags/index.html","4028b7aa06984599c2dc86c29fb19e74"],["/tags/markdown/index.html","628066eb02936fde5cc1dc882c2c3bb5"],["/tags/next/index.html","06a122eb02bea545fb85235446d313b6"],["/tags/python/index.html","5488b60b17316e5482fa4392c1e69d01"],["/tags/tags/index.html","09fc7607ff18086e260d7f8d90750270"],["/tags/vercel/index.html","139eabc1dd8b9cf00447877e92a5842a"],["/tags/命令/index.html","d39814a4d520df0be1b76d807448155e"],["/tags/文本编辑/index.html","f3ffde26d6e6933bf0ff7c099b7a56e7"],["/tags/李白/index.html","d995130239a0bbf52770a2ae25d6d547"],["/tags/白玉京/index.html","19771c3ef901bcce447dec1dac799575"],["/tags/软件推荐/index.html","b2bbe8d0883634c62f226dd5ea07cef9"]];
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

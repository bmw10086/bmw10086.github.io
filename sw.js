/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","97b6f8aea6353fa7055c50e2d4ccd43d"],["/2023/06/14/PyQt5学习/index.html","bee315e484c0482deeca21957f8836ab"],["/2023/06/16/古诗/index.html","9b9be5ec4f2fa9cb222f1478d2c73f62"],["/2023/06/19/tags/index.html","4e9cceb12276eaf27d876fc766b172e0"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","702d3e25c5e13b100812e3733e0c34a0"],["/2023/06/24/hello-world/index.html","cdae23a4d71585ab5478be65eaaf7c9d"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","2ea143abfa049ca67c8a4053b026c0ee"],["/2023/06/24/python学习/index.html","33d2fe8cec631a1531792220968babdb"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","c7f55fa610c765c41e2c4496c6399b4a"],["/2023/09/05/Git的使用/index.html","ad93806eeb487e1a7b088f4a5c99d5a7"],["/2023/09/05/hexo命令/index.html","ec6f3983ac682570b97c24b43e0310d8"],["/2023/09/05/markdown语法学习/index.html","137bdf0cf3d3efd8a29318da8fe411b5"],["/2023/09/05/软件推荐/index.html","05dc09718633d10aea62bde69931e84d"],["/2023/10/29/python基础（一）/image-20230918212717905.png","b7b0d4c6ff904bae1034b1b15d662c9f"],["/2023/10/29/python基础（一）/image-20230918213052509.png","5f67acc80799c839f78693892d21d3ce"],["/2023/10/29/python基础（一）/image-20230918213946647.png","517c35e2bfe28956fc87d3fac6e324f3"],["/2023/10/29/python基础（一）/image-20230918215008367.png","9b1198c8f9f7b5e71cafce54c65a82db"],["/2023/10/29/python基础（一）/image-20230919194043392.png","15937fffc603071ead8df77228cbb541"],["/2023/10/29/python基础（一）/index.html","fab3125f8ec6110e7a29aa1dd908d204"],["/2023/10/29/python基础（二）/index.html","cfc69cf0cfa6961f203dc383099216ab"],["/about/index.html","ba070b55a3c94c1c7c397f3c110a6a15"],["/archives/2020/05/index.html","acad4365360856cfb78f3991d23d221b"],["/archives/2020/index.html","c04a1f72904ed56e24f7b4656d0720d8"],["/archives/2023/06/index.html","e8845c5aa1e350fdb90208f49a24d260"],["/archives/2023/09/index.html","921b319d9f44408c638c717b11fe9c6b"],["/archives/2023/10/index.html","c22b25b0c6f3a897b97c9a671951f7a2"],["/archives/2023/index.html","8c285bfd39d201d749578d683ca059fa"],["/archives/2023/page/2/index.html","13804611e3e168ef6a1ae91609d045fd"],["/archives/index.html","c83bcdf07115d9ee1317887c0b129290"],["/archives/page/2/index.html","441bc32a025de2868a6369fbf7b516b1"],["/baidu_verify_codeva-4fA6nY2PfB.html","c7b2008f806203386091a940bf99d9a2"],["/categories/hexo/index.html","1c879b98f8deffed8abe6bd137b0765e"],["/categories/index.html","3101ad1752fceaec242874afb4839203"],["/categories/古文鉴赏/index.html","b85b77cfeb8c3b4a9d2c4b25d6dfb78a"],["/categories/工具学习/index.html","81304b04a3aef018bc2a7e4dfd06acb4"],["/categories/推荐/index.html","63af4118c5916a1acbf539ffb4465bfa"],["/categories/搭建教程/index.html","a63acce396beef0871d84e9eef781352"],["/categories/文案/index.html","1207c45fb1440191f0f9772a7d12b771"],["/categories/编程语言学习/index.html","eeab12172b534cc59c00bce24c02d2fa"],["/css/index.css","7658b558a754c2c91c8db3e9ac4a7b5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","34425366b19dd04e85ccc8092df7beb7"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/2.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","5232691f8f105430f89020b985ef5534"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","e9ee18cc0e0cd0a39b299d2ed6388d8e"],["/page/2/index.html","05b1f7d4703a2d32d875160efb0f1f75"],["/resources/index.html","04b61006d94e1ea8fca8dc0b78b88e49"],["/sw-register.js","3eb406a93988d862c00335265f4deac5"],["/tags/Git/index.html","2bd4a5a5f029672c6dd0d6f0dd6c2cdb"],["/tags/GitHub/index.html","d1e5d030213b38e6e8b2db9d491debcb"],["/tags/PyQt5/index.html","0774d6dae2de77bc3299f9f2d4b844de"],["/tags/Qt-Designer/index.html","8c8f7fca93b80a45cf933756f8415e1b"],["/tags/chatgpt/index.html","9db6226056f0a37774539a4fc98fb640"],["/tags/hexo/index.html","4788ce36deac26131567dc1c178f0a29"],["/tags/index.html","fdc87bc95247705843b3427a8bd062db"],["/tags/markdown/index.html","0fa25faf7dd659441f7773482f0e98ff"],["/tags/next/index.html","798dde94c1060666030c1ec48b72d43b"],["/tags/python/index.html","270a36cf3db20c3f7cd32d5e39827057"],["/tags/tags/index.html","91924dec74e6f369005ff6a91719ad36"],["/tags/vercel/index.html","aa55578402716064dd2f2086da40d2c9"],["/tags/命令/index.html","d265ffb84aa8ddc36b02b34ed455c5f4"],["/tags/文本编辑/index.html","3fcc9e587f2cc2f2ae3bc8861a728e2f"],["/tags/李白/index.html","cd76627e67d866e98ef4366ea960818c"],["/tags/白玉京/index.html","063266d428192446b02517416197802e"],["/tags/软件推荐/index.html","95cf1bc790b97eda38e29ec693d234d5"]];
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

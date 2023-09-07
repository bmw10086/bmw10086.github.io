/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/05/文案/index.html","e92fec42ee470890e547aec74938a50a"],["/2023/06/14/PyQt5学习/index.html","3dbadc97ee8c8f75d693feb1324cbfc8"],["/2023/06/16/古诗/index.html","6bd9d7f252ec92a8fec26020744638d8"],["/2023/06/19/tags/index.html","25a2b0fe89c7fdb79dd5277c069e232e"],["/2023/06/24/3-5网站/1.png","2c97999e229e8632aae686ae94563834"],["/2023/06/24/3-5网站/2.png","915e75b06e9d0531e60a22c3d376e78d"],["/2023/06/24/3-5网站/3.png","b7fe2b43fa75f7d3cd9f010e36df0c8f"],["/2023/06/24/3-5网站/4.png","a6829a3d32c70566aa1ee4ed3cf9dfff"],["/2023/06/24/3-5网站/5.png","d4d00a97b6849cc39b065408f6d897fc"],["/2023/06/24/3-5网站/index.html","b20c24f2327ce34d01f63ea715995b15"],["/2023/06/24/hello-world/index.html","d491bc15c45e48b408674c8d159eedcc"],["/2023/06/24/hexo博客中next添加背景图片/1.png","7039db666c13723b5f50df1c8e3e2973"],["/2023/06/24/hexo博客中next添加背景图片/2.png","66ec735dd6bec2b81b831ec797c896ec"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/2023/06/24/hexo博客中next添加背景图片/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/2023/06/24/hexo博客中next添加背景图片/index.html","841fbbe1f95b83a5dd42e97b9dd0b76c"],["/2023/06/24/python学习/index.html","c8ee67d142fd99b839ed336c794dcbc8"],["/2023/06/25/hexo新建页面/1.png","f823b8902269798784d1551d735a572d"],["/2023/06/25/hexo新建页面/index.html","aa3dd79f211e9704b61f1447aad3ee02"],["/2023/09/05/Git的使用/index.html","183d86b7e258edecbb62fcfa596551de"],["/2023/09/05/hexo命令/index.html","8ff865db23d10f8de0e4ae05ffffbeb7"],["/2023/09/05/markdown语法学习/index.html","7b9483d7163fe1528a062c8a601166b5"],["/2023/09/05/软件推荐/index.html","1d42ffceacf6bdd249661906afea3217"],["/about/index.html","94d23729d44d8719eb1eb8441db716c4"],["/archives/2020/05/index.html","7c3d31481b33555f3b1386be661ba452"],["/archives/2020/index.html","14f417af69d6e3043116e71560c2b7ad"],["/archives/2023/06/index.html","b99aa1924cb8d3572dc76c4c04b12cab"],["/archives/2023/09/index.html","2394d77fe9b3e264a50020405896d6fd"],["/archives/2023/index.html","a189644be713f413091ea24dc663bc03"],["/archives/2023/page/2/index.html","28424d31c5b25809826fb12c89798af7"],["/archives/index.html","995ddabac3eaa593ec8d1eeee7bb07d8"],["/archives/page/2/index.html","d9b4bd69bf377ef07dd3f4d8c7c50eac"],["/baidu_verify_codeva-4fA6nY2PfB.html","924dbdcad50b1bce6d246d5061de4080"],["/categories/hexo/index.html","2d5c6df9ccc8f98c43a95512293bd7d0"],["/categories/index.html","57d846a695987ecfc5ac1ebe2a5d5dc7"],["/categories/古文鉴赏/index.html","72ffb333e28d9fb2996d60ae55cef222"],["/categories/工具学习/index.html","954df573b6f1dac31342cb382a4af65e"],["/categories/推荐/index.html","e1208d1ace236840b111cf70d1a24aa8"],["/categories/搭建教程/index.html","4b596ea61d513d1a4be60eaed41ea4c5"],["/categories/文案/index.html","e9c437f9547e9c80666314e30701d1e3"],["/categories/编程语言学习/index.html","aa05119224eee9f40d36a4e5d549d39f"],["/css/index.css","7658b558a754c2c91c8db3e9ac4a7b5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/home/index.html","2528d389ac6b074887568a784ebca5f8"],["/image/image-20230605204740522.png","395af00cfba9767967dbc6c47abc578b"],["/image/image-20230605204807155.png","f1f2f726994918ebff7959c8ef2f675f"],["/image/image-20230605204835064.png","4f6ad58ed701f716eba50fa2f0e00903"],["/img/1.jpg","308b1d805e16893fd975bd557ae4152a"],["/img/2.jpg","9178abb514b117d5c112e8fc9c3eb755"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/factor32+32.png","72a4df3441704904b6373091959d96da"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.png","cc6553d510d757f4f1e8e3c437e11e62"],["/index.html","846911fdc6d0442528447664c310d98b"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","37f0f32ccd32d4d04acb0245696258f9"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/navigation/index.html","88059ba9888489202d859c43d03f0d73"],["/page/2/index.html","ff2c66ca19b686b3b8222c32887feac2"],["/resources/index.html","d420ea8836002c1e316832c2f89e5c49"],["/sw-register.js","ff071103910030796a3763d5c1577929"],["/tags/Git/index.html","abd29fa5fae8ca9b553981013cb30715"],["/tags/GitHub/index.html","487bc18cebdfc5574c812896fbeee60b"],["/tags/PyQt5/index.html","c2d55b98d3f865af0794df00e4143a27"],["/tags/Qt-Designer/index.html","a5b9407d95cb09924547df946ae2b08d"],["/tags/chatgpt/index.html","ec948d00687615b530336510af5b891f"],["/tags/hexo/index.html","2d57f3e747897fe74d4b772d6edff69d"],["/tags/index.html","a1ed263388e0853b4657d47e9219129d"],["/tags/markdown/index.html","f40d6884c140c383b825b69eb1fc0d5f"],["/tags/next/index.html","42396f80a19d46f3cd4e5100a48703e9"],["/tags/python/index.html","fa2f924c4fb0fb0985d026a507f2985c"],["/tags/tags/index.html","aa36d10da2d1a34638c23a6d8224d709"],["/tags/vercel/index.html","e701a45e4630344bdbeae52f80f7a8d2"],["/tags/命令/index.html","86b29da4fd7afbf542801b8d668aaa4c"],["/tags/文本编辑/index.html","7f4f874542593fcd6ae5f5e1242a200b"],["/tags/李白/index.html","8170737ecb40aa962b63a602ff521fba"],["/tags/白玉京/index.html","da5fb8b1e34b4cf27af10b677f9d7560"],["/tags/软件推荐/index.html","a838ea143865a3ed64636472966970b3"]];
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

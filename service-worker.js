"use strict";var precacheConfig=[["/smawo-components/index.html","545eb74502d5e780ec59027dc31eb41e"],["/smawo-components/static/css/main.f5ef55ec.css","097f1b2cac9b16a530e8c3c0922af043"],["/smawo-components/static/js/main.72444947.js","b04f37bebf44310c50b5bd8cd89fa4e0"],["/smawo-components/static/media/BackgroundBottom.f9812109.png","f9812109bb1283496c035fba53c7745c"],["/smawo-components/static/media/BackgroundGradient.d5a09b12.png","d5a09b12408f84db67b7d515ed56218c"],["/smawo-components/static/media/FiraSans-Regular.808fbb61.ttf","808fbb61cedded38d08971f5ae9d5f83"],["/smawo-components/static/media/Settings Copy 10.d0a66ce9.png","d0a66ce9552af351df5264c14f171542"],["/smawo-components/static/media/Settings Copy 11.45ab3318.png","45ab33185e006c9d3dee65c7e7fb02d2"],["/smawo-components/static/media/Settings Copy 12.39252099.png","392520990397514abca059c7b607a0d1"],["/smawo-components/static/media/Settings Copy 13.b9bc8671.png","b9bc8671e25021ae38288b3359c21b17"],["/smawo-components/static/media/Settings Copy 14.738f56e0.png","738f56e02f8d89cd1a2405ce269dede0"],["/smawo-components/static/media/Settings Copy 15.d2da8e74.png","d2da8e74b7218ae182e3738c0ca703a7"],["/smawo-components/static/media/Settings Copy 16.f646abcb.png","f646abcb77a37a3e9186a4cb59249e00"],["/smawo-components/static/media/Settings Copy 17.f833fd7e.png","f833fd7e6f7d9222571007f45e318e5e"],["/smawo-components/static/media/Settings Copy 18.3033c25c.png","3033c25cf3b70b3f9e2c2fea6e2ce61e"],["/smawo-components/static/media/Settings Copy 20.a5c7f858.png","a5c7f8585376e91ea3087e2aa8db33b3"],["/smawo-components/static/media/Settings Copy 21.5734c520.png","5734c52080719572a8e259f942d0ec7c"],["/smawo-components/static/media/Settings Copy 22.2b367c08.png","2b367c08d35124e5a36aa7904b24dc2e"],["/smawo-components/static/media/Settings Copy 23.8566c53f.png","8566c53fe1c22c6d073afefff5a722ec"],["/smawo-components/static/media/Settings Copy 24.995d3a68.png","995d3a6853bb401b2634b7f08cd25424"],["/smawo-components/static/media/Settings Copy 25.00de0e82.png","00de0e8228d724a72c0a104da66ddb01"],["/smawo-components/static/media/Settings Copy 26.aaa8381f.png","aaa8381f76a696b332c210cab98a1eeb"],["/smawo-components/static/media/Settings Copy 27.15be8243.png","15be824398a9cdcfbdc38fd3993bcfbf"],["/smawo-components/static/media/Settings Copy 28.6736fcfb.png","6736fcfb938d3256450ce38f2e8ad293"],["/smawo-components/static/media/Settings Copy 29.8a9dbce1.png","8a9dbce15c9d9386205aec2270ca9f89"],["/smawo-components/static/media/Settings Copy 30.dcfdfde0.png","dcfdfde08e2ff15cc60b22a8510b55f4"],["/smawo-components/static/media/Settings Copy 31.38f52af6.png","38f52af664df79d176b3eb2a2a996478"],["/smawo-components/static/media/Settings Copy 32.ce5bfb59.png","ce5bfb599b935ef196769a815e766357"],["/smawo-components/static/media/Settings Copy 33.e5350ec1.png","e5350ec1e812882bb6bb69dd2df213a2"],["/smawo-components/static/media/Settings Copy 34.7e8eacfc.png","7e8eacfc77a7af6390bf0d59782c3751"],["/smawo-components/static/media/Settings Copy 4.82d0b163.png","82d0b16325bba812374a4d6e35096b1a"],["/smawo-components/static/media/Settings Copy 5.774b0415.png","774b04150aee66e4013eb6c053f3ed4c"],["/smawo-components/static/media/Settings Copy 6.e8301bcd.png","e8301bcd7690fb8c6aa9fcf9bb55e8b9"],["/smawo-components/static/media/Settings Copy 8.320bc98e.png","320bc98ede33a83289fda8719ae6de9a"],["/smawo-components/static/media/Settings Copy 9.7a344707.png","7a34470713cfa7cc7e04fb79822eb1f4"],["/smawo-components/static/media/Settings.a8bd0302.png","a8bd03022b5f752b76e6453ebb3ae02e"],["/smawo-components/static/media/alarm.988b2e07.svg","988b2e07f83c0a1835bbaa9ad0c1bce6"],["/smawo-components/static/media/cakeIcon.3dc7c9e6.svg","3dc7c9e68c1da4d78a603cf68b20035d"],["/smawo-components/static/media/cloudyIcon.47730227.svg","47730227cba810f8a1deb351abbabe5d"],["/smawo-components/static/media/group.deba8e75.svg","deba8e75dfcb91085c5796d353ffe3aa"],["/smawo-components/static/media/pin.9c619498.svg","9c619498556eb45098f44c712d1a5675"],["/smawo-components/static/media/plusIcon.4b8a7316.svg","4b8a7316957cdd9b162666c01491971c"],["/smawo-components/static/media/todayIcon.a66bb305.svg","a66bb3055bdefd81f08223a00c7a5e80"],["/smawo-components/static/media/wheel.ebd2872d.svg","ebd2872d83feb47217e707c2d35768a1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/smawo-components/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
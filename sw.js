var d="/ /favicon.ico /manifest.json /robots.txt /sitemap.xml /?utm_source=web_app_manifest /disclaimer/ /offline/ /privacy-policy/ /technical-information/ /terms-of-service/ /images/apple-touch-icon.png /images/favicon-32x32.png /images/favicon-16x16.png /images/feature-graphic-1024x500.jpg /images/logo-144x144.png /images/logo-192x192.png /images/logo-256x256.png /images/logo-384x384.png /images/logo-512x512-maskable.png /images/logo-512x512.png /images/logo.svg".split(" "),h=self;
h.addEventListener("install",function(a){a.waitUntil(h.caches.open("20210405-052432").then(function(b){b.addAll(d.map(function(c){return new Request(c,{mode:"no-cors"})})).catch(function(c){return console.log("Could not pre-cache resource:",c)})}).catch(function(b){return console.log("Could not pre-cache resources:",b)}))});
h.addEventListener("message",function(a){a=a.data.action;var b={action:a};"getVersion"==a?b[a]="20210405-052432":"skipWaiting"==a?h.skipWaiting():"openApp"==a&&k().then(function(c){b.win=c;l(b)});l(b)});h.addEventListener("fetch",function(a){a.respondWith(h.caches.match(a.request).then(function(b){return b||m(a.request)}))});h.addEventListener("activate",function(a){l({event:a.type});a.waitUntil(n());p();return h.clients.claim()});
function l(a){h.clients.matchAll().then(function(b){return b.forEach(function(c){c.postMessage(a)})})}function n(){return h.caches.keys().then(function(a){return Promise.all(a.map(function(b){if("20210405-052432"!==b)return h.caches.delete(b)}))})}
function p(){h.registration.addEventListener("updatefound",function(a){var b=h.registration.installing;b.addEventListener("statechange",function(c){"installed"==b.state&&(b.postMessage({action:"skipWaiting"}),l({event:c.type,action:"refresh"}))});l({event:a.type})})}
function m(a){var b=fetch(a),c=-1!=a.url.indexOf("&jsonp="),f=c?q(a):"";if(r(a)||c)b=b.then(function(e){return h.caches.open("20210405-052432").then(function(g){g.put(f||a,e.clone());return e})});return b.catch(function(){return h.caches.open("20210405-052432").then(function(e){return c?e.match(f).then(function(g){g||(g=a.url.split("&jsonp=").pop().split("&")[0],g=fetch(new Request("data:text/javascript,"+g+"([])")));return g}):e.match("/offline/")})})}
function r(a){var b=a.url,c=0==b.indexOf(h.location.origin);b=-1!=b.indexOf("nocache");return"GET"==a.method&&c&&!b}function q(a){var b={};a=a.url.split("?").pop().split("&");for(var c=a.length>>>0;c--;){var f=a[c].split("="),e=f[0];e&&(b[e]=decodeURIComponent(f[1]))}a=b.query;c=a.length;for(var g=e=f=0;g<c;)f^=a.charCodeAt(g++)<<e,e+=8,e%=24;a=[b.action,f.toString(36).toUpperCase()];b.source&&a.push(b.source);return"offline"+a.join("-")+".json"}
function k(){var a=h.clients;l({log:"openApp: called"});return a.matchAll().then(function(b){for(var c=0;c<b.length;++c){var f=b[c];if("/"==f.url&&"focus"in f)return l({log:"openApp: found client"}),f.focus(),f}if(a.openWindow)return l({log:"openApp: opening app"}),a.openWindow("/").then(function(e){l({log:"openApp: opened app"});return e})})};

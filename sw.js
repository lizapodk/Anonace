function e(){this.f=!1;this.a=null;this.g=void 0;this.b=1;this.i=0;this.c=null}function g(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}e.prototype.h=function(a){this.g=a};function l(a,b){a.c={j:b,l:!0};a.b=a.i}e.prototype.return=function(a){this.c={return:a};this.b=this.i};function m(a){this.a=new e;this.b=a}function n(a,b){g(a.a);var c=a.a.a;if(c)return p(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a.return);a.a.return(b);return q(a)}
function p(a,b,c,d){try{var f=b.call(a.a.a,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.a.f=!1,f;var k=f.value}catch(h){return a.a.a=null,l(a.a,h),q(a)}a.a.a=null;d.call(a.a,k);return q(a)}function q(a){for(;a.a.b;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.g=void 0,l(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.l)throw b.j;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function r(a){this.next=function(b){g(a.a);a.a.a?b=p(a,a.a.a.next,b,a.a.h):(a.a.h(b),b=q(a));return b};this.throw=function(b){g(a.a);a.a.a?b=p(a,a.a.a["throw"],b,a.a.h):(l(a.a,b),b=q(a));return b};this.return=function(b){return n(a,b)};this[Symbol.iterator]=function(){return this}}function t(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,f){function k(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(k,f)}k(a.next())})}
var u="/ /index.html /favicon.ico /manifest.json /?utm_source=web_app_manifest /terms-of-service/ /privacy-policy/ /disclaimer/ /offline/ /images/feature-graphic-1024x500.jpg /images/apple-touch-icon.png /images/logo.svg /images/favicon-32x32.png /images/favicon-16x16.png /images/logo-144x144.png /images/logo-192x192.png /images/logo-256x256.png /images/logo-384x384.png /images/logo-512x512.png /robots.txt /sitemap.xml https://www.reddit.com/favicon.ico".split(" "),v=self;
v.addEventListener("install",function(a){a.waitUntil(v.caches.open("20210330-202018").then(function(b){b.addAll(u.map(function(c){return new Request(c,{mode:"no-cors"})}))}).catch(function(b){return console.log("Pre-fetching failed:",b)}))});v.addEventListener("message",function(a){a=a.data.action;var b={action:a};"getVersion"==a?b[a]="20210330-202018":"skipWaiting"==a&&v.skipWaiting();w(b)});
v.addEventListener("fetch",function(a){a.respondWith(function(){var b,c;return t(new r(new m(function(d){switch(d.b){case 1:var f=v.caches.match(a.request);d.b=2;return{value:f};case 2:if(c=b=d.g){d.b=3;break}f=x(a.request);d.b=4;return{value:f};case 4:c=d.g;case 3:return d.return(c)}})))}())});v.addEventListener("activate",function(a){w({event:a.type});a.waitUntil(y());z();return v.clients.claim()});
function w(a){v.clients.matchAll().then(function(b){return b.forEach(function(c){c.postMessage(a)})})}function y(){return v.caches.keys().then(function(a){return Promise.all(a.map(function(b){if("20210330-202018"!==b)return v.caches.delete(b)}))})}
function z(){v.registration.addEventListener("updatefound",function(a){var b=v.registration.installing;b.addEventListener("statechange",function(c){"installed"==b.state&&(b.postMessage({action:"skipWaiting"}),w({event:c.type,action:"refresh"}))});w({event:a.type})})}
function x(a){var b=fetch(a);A(a)&&(b=b.then(function(c){return v.caches.open("20210330-202018").then(function(d){d.put(a,c.clone());return c})}));return b.catch(function(){return v.caches.open("20210330-202018").then(function(c){return c.match("/offline/")})})}function A(a){var b=a.url,c=0==b.indexOf(v.location.origin);b=-1!=b.indexOf("nocache");return"GET"==a.method&&c&&!b};

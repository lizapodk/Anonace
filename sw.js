function f(){this.g=!1;this.b=null;this.c=void 0;this.a=1;this.l=this.h=0;this.f=null}function n(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}f.prototype.i=function(a){this.c=a};function q(a,b){a.f={j:b,m:!0};a.a=a.h||a.l}f.prototype.return=function(a){this.f={return:a};this.a=this.l};function t(a,b,d){a.a=d;return{value:b}}function v(a){this.a=new f;this.b=a}
function w(a,b){n(a.a);var d=a.a.b;if(d)return x(a,"return"in d?d["return"]:function(e){return{value:e,done:!0}},b,a.a.return);a.a.return(b);return y(a)}function x(a,b,d,e){try{var k=b.call(a.a.b,d);if(!(k instanceof Object))throw new TypeError("Iterator result "+k+" is not an object");if(!k.done)return a.a.g=!1,k;var m=k.value}catch(l){return a.a.b=null,q(a.a,l),y(a)}a.a.b=null;e.call(a.a,m);return y(a)}
function y(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(d){a.a.c=void 0,q(a.a,d)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.m)throw b.j;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function D(a){this.next=function(b){n(a.a);a.a.b?b=x(a,a.a.b.next,b,a.a.i):(a.a.i(b),b=y(a));return b};this.throw=function(b){n(a.a);a.a.b?b=x(a,a.a.b["throw"],b,a.a.i):(q(a.a,b),b=y(a));return b};this.return=function(b){return w(a,b)};this[Symbol.iterator]=function(){return this}}function E(a){function b(e){return a.next(e)}function d(e){return a.throw(e)}return new Promise(function(e,k){function m(l){l.done?e(l.value):Promise.resolve(l.value).then(b,d).then(m,k)}m(a.next())})}
var F="/ /favicon.ico /manifest.json /robots.txt /sitemap.xml /?utm_source=web_app_manifest /disclaimer/ /offline/ /privacy-policy/ /technical-information/ /terms-of-service/ /images/apple-touch-icon.png /images/favicon-32x32.png /images/favicon-16x16.png /images/feature-graphic-1024x500.jpg /images/logo-144x144.png /images/logo-192x192.png /images/logo-256x256.png /images/logo-384x384.png /images/logo-512x512-maskable.png /images/logo-512x512.png /images/logo.svg".split(" "),G=self;
G.addEventListener("install",function(a){a.waitUntil(G.caches.open("20210407-041128").then(function(b){b.addAll(F.map(function(d){return new Request(d,{mode:"no-cors"})})).catch(function(d){return console.log("Could not pre-cache resource:",d)})}).catch(function(b){return console.log("Could not pre-cache resources:",b)}))});G.addEventListener("message",function(a){a=a.data.action;var b={action:a};"getVersion"==a?b[a]="20210407-041128":"skipWaiting"==a&&G.skipWaiting();H(b)});
G.addEventListener("fetch",function(a){a.respondWith(G.caches.match(a.request).then(function(b){return b||I(a.request)}))});G.addEventListener("activate",function(a){H({event:a.type});a.waitUntil(J());K();return G.clients.claim()});function H(a){G.clients.matchAll().then(function(b){return b.forEach(function(d){d.postMessage(a)})})}function J(){return G.caches.keys().then(function(a){return Promise.all(a.map(function(b){if("20210407-041128"!==b)return G.caches.delete(b)}))})}
function K(){G.registration.addEventListener("updatefound",function(a){var b=G.registration.installing;b.addEventListener("statechange",function(d){"installed"==b.state&&(b.postMessage({action:"skipWaiting"}),H({event:d.type,action:"refresh"}))});H({event:a.type})})}
function I(a){var b,d,e,k,m,l,z,A,B;return E(new D(new v(function(c){switch(c.a){case 1:b=-1!=a.url.indexOf("&jsonp=");if(b){var g={};for(var h=a.url.split("?").pop().split("&"),u=h.length>>>0;u--;){var r=h[u].split("="),p=r[0];p&&(g[p]=decodeURIComponent(r[1]))}h=g.query;u=h.length;for(var C=p=r=0;C<u;)r^=h.charCodeAt(C++)<<p,p+=8,p%=24;h=[g.action,r.toString(36).toUpperCase()];g.source&&h.push(g.source);g="offline-"+h.join("-")+".json"}else g="";d=g;c.h=2;return t(c,fetch(a,{mode:"no-cors"}),4);
case 4:e=c.c;h=a.url;g=0==h.indexOf(G.location.origin);h=-1!=h.indexOf("nocache");if(("GET"!=a.method||!g||h)&&!b){c.a=5;break}return t(c,G.caches.open("20210407-041128"),6);case 6:k=c.c;if(!d){k.put(a,e.clone());c.a=5;break}console.log("response.ok:",e.ok,"response.type:",e.type);console.log("response:",e);if(!e.ok){c.a=5;break}return t(c,e.text(),9);case 9:m=c.c,l=(m||"").replace(/jsonp_\w+\(/,"jsonp_cb("),z=new Blob([l],{type:"application/json"}),console.log(d,m,l,z),k.put(d,new Response(z,{status:304,
statusText:"Not Modified",headers:e.headers}));case 5:c.a=3;c.h=0;break;case 2:return c.h=0,g=c.f.j,c.f=null,A=g,console.log("Could not fetch request:",A),t(c,G.caches.open("20210407-041128"),10);case 10:return B=c.c,b?(g=a.url.split("&jsonp=").pop().split("&")[0],g=fetch(new Request("data:text/javascript,"+g+"([])")),c=t(c,g,14)):c=t(c,B.match("/offline/"),13),c;case 13:e=c.c;c.a=12;break;case 14:e=c.c;case 12:console.log("Offline response:",e);case 3:return c.return(e)}})))};

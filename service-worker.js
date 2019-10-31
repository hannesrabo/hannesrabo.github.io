self.__precacheManifest = [
  {
    "url": "/_next/static/19o~MQqzIsUBSF5w9kfsn/pages/cv.js"
  },
  {
    "url": "/_next/static/chunks/commons.7a3c08b2c649ad19d4da.js"
  },
  {
    "url": "/_next/static/runtime/main-f052af4c43280b65e32d.js"
  },
  {
    "url": "/_next/static/runtime/webpack-f0c6edbea5b547edc23f.js"
  },
  {
    "url": "/_next/static/19o~MQqzIsUBSF5w9kfsn/pages/index.js"
  },
  {
    "url": "/_next/static/19o~MQqzIsUBSF5w9kfsn/pages/experience.js"
  },
  {
    "url": "/_next/static/19o~MQqzIsUBSF5w9kfsn/pages/contact.js"
  },
  {
    "url": "/_next/static/19o~MQqzIsUBSF5w9kfsn/pages/_error.js"
  },
  {
    "url": "/_next/static/19o~MQqzIsUBSF5w9kfsn/pages/_app.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({"maxEntries":150,"maxAgeSeconds":2592000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');

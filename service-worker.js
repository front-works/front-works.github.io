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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e782030952546eb2a632c5405b1d5a39"
  },
  {
    "url": "about/index.html",
    "revision": "b598bc680d2ae5ac80edfabbcdb2b35d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "0f72b850d508f58e8a63665313f11640"
  },
  {
    "url": "assets/css/0.styles.06d95e5c.css",
    "revision": "5237a531c20ad6d40d43130a34a9028e"
  },
  {
    "url": "assets/img/blog/article/dummy.jpg",
    "revision": "a004a7fd8afae1dc5572d7682a3a5957"
  },
  {
    "url": "assets/img/blog/article/dummy.png",
    "revision": "aa178c05506026380e1450f372f916dd"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "32ee8adc3654b40954008d238f80a41f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.8f0393c5.js",
    "revision": "096cd94b7476ce29a177c8436f347035"
  },
  {
    "url": "assets/js/3.adce9846.js",
    "revision": "3920006c689fddae3ec7a3050751d79d"
  },
  {
    "url": "assets/js/4.9eae7e59.js",
    "revision": "285f3edc8c5af4c6a4fa8d9f4a3dd5af"
  },
  {
    "url": "assets/js/5.f5e85a65.js",
    "revision": "6342aad3eaf74b5a4aa7e35ae79164e5"
  },
  {
    "url": "assets/js/app.ea5aa903.js",
    "revision": "162cb0c7631e41781569502eb3e4fa4b"
  },
  {
    "url": "index.html",
    "revision": "75956e5d9d3eab5c152f69cb19667add"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

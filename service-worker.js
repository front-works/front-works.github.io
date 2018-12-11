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
    "revision": "397571a755991f9fa5b0a0b21679046d"
  },
  {
    "url": "about/index.html",
    "revision": "e4344696cad0994a0fe180a4f25727e8"
  },
  {
    "url": "app-icon.png",
    "revision": "a7bcd75ac98e83eebf93c27c14b4de59"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "21b44157069b350f49e5c0f187fc96a3"
  },
  {
    "url": "assets/css/0.styles.d1f2f31a.css",
    "revision": "f9036c5d0b63596fb247ed6080bd26c3"
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
    "url": "assets/js/app.c5cb84eb.js",
    "revision": "b1edc3961bb0de7ac89f4851afdd5529"
  },
  {
    "url": "index.html",
    "revision": "9eb388f671c22ae1b3b6ec86752a331d"
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

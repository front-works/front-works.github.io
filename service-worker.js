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
    "revision": "1cc3a5e2462647941a31be6ab1c5c4a3"
  },
  {
    "url": "about/index.html",
    "revision": "d8f04653d98253a9eb55643c90a9b5c0"
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
    "url": "assets/css/0.styles.85edeb9d.css",
    "revision": "35af5c4509c0b60d749c3cd24aaaa159"
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
    "url": "assets/js/app.9af18c21.js",
    "revision": "2bb5fde8c181c7a0b2139d1555ef59e0"
  },
  {
    "url": "index.html",
    "revision": "3300ce1b7ef66b2f0e47d357c086a4b9"
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

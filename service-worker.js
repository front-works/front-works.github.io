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
    "revision": "6ff383dc1f01121ca6c26e6f2e33af4d"
  },
  {
    "url": "about/index.html",
    "revision": "952083df6560b0cbb413eb23484f03d3"
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
    "url": "assets/css/0.styles.2ea4a89a.css",
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
    "url": "assets/js/2.24c868c1.js",
    "revision": "31a45938d50d4e8b2c1a672dd974d3db"
  },
  {
    "url": "assets/js/3.9f3ded71.js",
    "revision": "b8e4fcb17495b392cae37c9d93ae98bb"
  },
  {
    "url": "assets/js/4.fca6d78c.js",
    "revision": "e5c695eb97b4151d4ba4c451f0d35df5"
  },
  {
    "url": "assets/js/5.a219f6b1.js",
    "revision": "f6f2f3df531ea897a2ce2c3f015cc788"
  },
  {
    "url": "assets/js/app.5777215a.js",
    "revision": "864f1e4220aed60a5bceccc1bdf1c9a2"
  },
  {
    "url": "index.html",
    "revision": "ab2eb4685a008eba72bfcfbb2d063dcb"
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

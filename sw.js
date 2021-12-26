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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f7a446678da331861e2a.js"
  },
  {
    "url": "framework-e25487b4bbde20f89010.js"
  },
  {
    "url": "styles.0833df6e0668468a5ee1.css"
  },
  {
    "url": "app-142e4effbb137322041e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fdf3aff107a3fd0e9b2c37c3d0a56347"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3591ca1c22447a2d880f.js"
  },
  {
    "url": "polyfill-4c5b650881e98b4db045.js"
  },
  {
    "url": "1bfc9850-ed599389f1da37a91187.js"
  },
  {
    "url": "5e2a4920-075151efafdad4614271.js"
  },
  {
    "url": "6728d85a-07edd499ca8b1de35ce2.js"
  },
  {
    "url": "0e99aa6ecfbaf03ccf621b14e86a3842a7a577b2-27bdbc9f1930a2ef1b21.js"
  },
  {
    "url": "component---src-pages-index-tsx-1b7868922a5f9d6ed65e.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b0b60fe9ca1479c0b133680e9912bd3e"
  },
  {
    "url": "page-data/sq/d/2725010242.json",
    "revision": "964fc5767e02c8cdad61f1cfa2734ac1"
  },
  {
    "url": "page-data/sq/d/4102384782.json",
    "revision": "d9ecec2a277405400d74b44b2391ba17"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e8cb614d6969d12e6f5b5628af295e5c"
  },
  {
    "url": "3c73754e3071f37fff86ea024def9e2612f04d48-99eddcee1ea691331e0f.js"
  },
  {
    "url": "component---src-templates-all-posts-tsx-4ec8d9d018f591309f06.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "52042550b9841f6f75efd4e2655b8c0d"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "552797b45dc5a31eacb24bb32d873509"
  },
  {
    "url": "page-data/blog/4/page-data.json",
    "revision": "f545935a02f235143c32d7757327c664"
  },
  {
    "url": "0c428ae2-e26454f3c906ea76433b.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-0e5d51b74cf9bc528571.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "46aac8b64f97ef5a42b7b0cf4fadf34e"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "c5a4b675541d397f64591b2f2a964a4d"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "e394d2167402cb2419733a84dc49f0df"
  },
  {
    "url": "page-data/blog/introduction-to-bi/page-data.json",
    "revision": "294bb0a3733a32984050d25c9949b84b"
  },
  {
    "url": "page-data/blog/introduction-to-docker/page-data.json",
    "revision": "5faa9a5afb4dac5e9c0d566d66177915"
  },
  {
    "url": "page-data/blog/introduction-to-functional-programming/page-data.json",
    "revision": "f334832686f63700728ded29783e9670"
  },
  {
    "url": "page-data/blog/introduction-to-git/page-data.json",
    "revision": "64f3762468d6b82d69961288e3b69bef"
  },
  {
    "url": "page-data/blog/introduction-to-linux-command-line/page-data.json",
    "revision": "149d8380aa23069e3fcf97901c9a5f41"
  },
  {
    "url": "page-data/blog/introduction-to-nodejs/page-data.json",
    "revision": "2f0263036d938e14b30a8eebece55da0"
  },
  {
    "url": "page-data/blog/introduction-to-npm/page-data.json",
    "revision": "41e9506c3848e8824b76a39f53a11d5d"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "feb033c7389e4ba73f033ffaf02ad4b0"
  },
  {
    "url": "page-data/blog/introduction-to-webpack/page-data.json",
    "revision": "c40c31330f2ad1fc9aa25825a3e185fe"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "be75a4bced4ead3659b19badeae2b795"
  },
  {
    "url": "component---src-templates-all-projects-tsx-4b9e8bafb279e99c51ad.js"
  },
  {
    "url": "page-data/projects/2/page-data.json",
    "revision": "86855233a0803a7e68bc4755c9014596"
  },
  {
    "url": "page-data/projects/3/page-data.json",
    "revision": "c1ca6b90a32f13743a4fe59c4889ab4b"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "37b362746327037de613bdc1a0f609ac"
  },
  {
    "url": "page-data/projects/real-time-store/page-data.json",
    "revision": "ca1c8d783f4e7630bd309a4ced9462d5"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "6cec8277e4d7af9cd76cecb24e117ff2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a16517a12e2dca1302b91d77110b2833"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-142e4effbb137322041e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

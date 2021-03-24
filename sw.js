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
    "url": "webpack-runtime-e9e34c38f8891731bd9d.js"
  },
  {
    "url": "framework-d197a39db04c1b3f76c8.js"
  },
  {
    "url": "styles.4101032c7a0606f79b78.css"
  },
  {
    "url": "app-3d4706555e8142f7c5da.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "84d6f5b38e8f1c2c3d092c53c692f6a5"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-df8bb7a439f70a910785.js"
  },
  {
    "url": "polyfill-1fbb6991ecb352e44693.js"
  },
  {
    "url": "1bfc9850-2205f08f552fbcf517ce.js"
  },
  {
    "url": "5e2a4920-57c854c74c30e9d3b478.js"
  },
  {
    "url": "6728d85a-5c7c714d0773ea6facd6.js"
  },
  {
    "url": "7713f8c3c4067ddc8348845fe5a68aaf0a3fbaa6-f9c53c309681a6bf4b4e.js"
  },
  {
    "url": "component---src-pages-index-tsx-0e4ff2db7e1b1c256cfe.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "bc3f428ed0009ed74b2f15d10fec39f5"
  },
  {
    "url": "page-data/sq/d/4102384782.json",
    "revision": "d9ecec2a277405400d74b44b2391ba17"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "dc5d587c1f7f961a5a9513431e4809b8"
  },
  {
    "url": "component---src-templates-all-posts-tsx-ec06a572989265595e79.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "214b0a4f66ed0da5d9c4bc8ed35fef13"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "32443b48047092e07131b9ecd504e77f"
  },
  {
    "url": "0c428ae2-e49c5469f13807d67d03.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-c44872b3cacae625e597.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "4efb69702774cd1b0ad5b41689a1e277"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "616da731e7855d7f7c45d65feb8a5764"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "4cb41f25772ab10af023e3da02c7fd79"
  },
  {
    "url": "page-data/blog/introduction-to-nodejs/page-data.json",
    "revision": "836923d86c3f329c95e881aec0a28d6d"
  },
  {
    "url": "page-data/blog/introduction-to-npm/page-data.json",
    "revision": "c3aac34f50ed6dab948d1146f76c1985"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "cdd2c2e60a7df6a93c85bdeac76a778a"
  },
  {
    "url": "page-data/blog/introduction-to-webpack/page-data.json",
    "revision": "77952906c9ac6f1798a9ff2f9815ac6a"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "943e58652b20f3b900293fdcf6efd92d"
  },
  {
    "url": "page-data/projects/real-time-store/page-data.json",
    "revision": "40923a6b32961e6d01032c2995141ade"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "89b50a4a43f9b425b9a050c338a352d6"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3c54248d1d6255d95b8f11f3220659d5"
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
  if (!resources || !(await caches.match(`/app-3d4706555e8142f7c5da.js`))) {
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

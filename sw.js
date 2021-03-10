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
    "url": "webpack-runtime-e932bf175c2f17ebd359.js"
  },
  {
    "url": "framework-d197a39db04c1b3f76c8.js"
  },
  {
    "url": "app-424b74895ee8ecc859f9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0ad7c6babd6b1a82c2dee9260e4a9ca9"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-df8bb7a439f70a910785.js"
  },
  {
    "url": "polyfill-142d41baf7fe896870c9.js"
  },
  {
    "url": "1bfc9850-2205f08f552fbcf517ce.js"
  },
  {
    "url": "6728d85a-5c7c714d0773ea6facd6.js"
  },
  {
    "url": "0a78b8368e424aada4e5ce09fe50bf506464101b-94468f4cfee4cc7ceede.js"
  },
  {
    "url": "9c0b8da0626080abac0be1ca59f4774ddc0b6a87-465caae0167d3a9ba78d.js"
  },
  {
    "url": "component---src-pages-index-tsx-d059d216de3357cdd8cb.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "71d60b6e64083f5840ae4ee2a958376d"
  },
  {
    "url": "page-data/sq/d/132551207.json",
    "revision": "c678bb1ed10fa1dfd19bda5f20d99559"
  },
  {
    "url": "page-data/sq/d/3456921768.json",
    "revision": "507ae29044b2a6864cda7544725c5c42"
  },
  {
    "url": "page-data/sq/d/486862377.json",
    "revision": "d632b0a0a2a5a8a550549ff34a4148cf"
  },
  {
    "url": "page-data/sq/d/80858887.json",
    "revision": "6d35ef94a1a7b283ae9956c0979aa601"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "932e0e006b8f472fc3f8dbce991ec3cc"
  },
  {
    "url": "component---src-templates-all-posts-tsx-7e8c3ed242334a222e77.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "be05a9a58137f23e7594ec47c52a2568"
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
  if (!resources || !(await caches.match(`/app-424b74895ee8ecc859f9.js`))) {
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

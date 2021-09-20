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
    "url": "webpack-runtime-bf08f360a2c753480cb5.js"
  },
  {
    "url": "framework-159c3f980b6b4151d570.js"
  },
  {
    "url": "styles.0833df6e0668468a5ee1.css"
  },
  {
    "url": "app-81a0e33616e2e8e5b016.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9c8434be8ae1ea50fa814e7704a178cc"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8328be481434b8467bfd.js"
  },
  {
    "url": "polyfill-528a0749f655ca22578c.js"
  },
  {
    "url": "1bfc9850-b7c65342ac78c9820a74.js"
  },
  {
    "url": "5e2a4920-57c854c74c30e9d3b478.js"
  },
  {
    "url": "6728d85a-5c7c714d0773ea6facd6.js"
  },
  {
    "url": "0e99aa6ecfbaf03ccf621b14e86a3842a7a577b2-5a5528f8c4c968e599d1.js"
  },
  {
    "url": "component---src-pages-index-tsx-f5a07a891eb8ef8c3592.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d03ea4d315e9f149aa0309be3523a60b"
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
    "revision": "8a213e3cd7201bffd5ba470aa1752a2c"
  },
  {
    "url": "3c73754e3071f37fff86ea024def9e2612f04d48-80572ae134897314e778.js"
  },
  {
    "url": "component---src-templates-all-posts-tsx-565b36e7cd3f1a9cdd58.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "d0d81a88a366e77404fd20ab3140bdcd"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "e7b6b875da8904745d7ffb7ebfe91b81"
  },
  {
    "url": "page-data/blog/4/page-data.json",
    "revision": "b36ba02ea765116c7e4c1cb08a5e0689"
  },
  {
    "url": "0c428ae2-e49c5469f13807d67d03.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-61635b7f6ac4a8322e4e.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "c12d2e44eeca083ab56f93585b37f10d"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "18e2cf0a1b54bdf7c6ad655eab3131b4"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "d61cc3f294dde7da05ed72d505b725cb"
  },
  {
    "url": "page-data/blog/introduction-to-bi/page-data.json",
    "revision": "3d2be7758736341bb649f7418500e752"
  },
  {
    "url": "page-data/blog/introduction-to-docker/page-data.json",
    "revision": "325e2267c312113d51ba8e9adc66070e"
  },
  {
    "url": "page-data/blog/introduction-to-functional-programming/page-data.json",
    "revision": "151c35d02e7bd931726bac8d4129fc1a"
  },
  {
    "url": "page-data/blog/introduction-to-linux-command-line/page-data.json",
    "revision": "705766c66c6ff6d12c7ce5085b8bd9ba"
  },
  {
    "url": "page-data/blog/introduction-to-nodejs/page-data.json",
    "revision": "82a2bef2b489e77550e52c0aea5c52e1"
  },
  {
    "url": "page-data/blog/introduction-to-npm/page-data.json",
    "revision": "2f38300be0d5c6ffdc03113d2bc4a226"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "d666e3303b2577318092f054853c4302"
  },
  {
    "url": "page-data/blog/introduction-to-webpack/page-data.json",
    "revision": "f48c497b4d38fcf565c4af1bcc2d2854"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "00b757fad39ba0a9966d42711feb1bff"
  },
  {
    "url": "component---src-templates-all-projects-tsx-408630a6c02626fc3a2d.js"
  },
  {
    "url": "page-data/projects/2/page-data.json",
    "revision": "a81c7691eaeb95ff2b1ef562d0c733db"
  },
  {
    "url": "page-data/projects/3/page-data.json",
    "revision": "64e13bc8a1b23e7214e239ba367d64ff"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "9e4a5599890a30d4d8a5f152ae03f0b3"
  },
  {
    "url": "page-data/projects/real-time-store/page-data.json",
    "revision": "6b4152ac99c36b292413ec906ef6c1ea"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "bb463dcb760465d9347a10e7bf1544e9"
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
  if (!resources || !(await caches.match(`/app-81a0e33616e2e8e5b016.js`))) {
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

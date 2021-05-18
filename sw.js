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
    "url": "webpack-runtime-d863a595fa1b01a9ee94.js"
  },
  {
    "url": "framework-d197a39db04c1b3f76c8.js"
  },
  {
    "url": "styles.706fe7486e33938bfd8b.css"
  },
  {
    "url": "app-c69cc2eddbb68fcfc025.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "09ad95e7d9592da3f33383ab4477df86"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-df8bb7a439f70a910785.js"
  },
  {
    "url": "polyfill-a4c3ce179a203f5248ea.js"
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
    "url": "0e99aa6ecfbaf03ccf621b14e86a3842a7a577b2-07e7cc1071b8db726ba3.js"
  },
  {
    "url": "component---src-pages-index-tsx-1f70c56f0099804e929c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2c5c962bfbec0db5729d7a375d2f2feb"
  },
  {
    "url": "page-data/sq/d/3326469352.json",
    "revision": "b9543565ee26e9cea8015506c198dff1"
  },
  {
    "url": "page-data/sq/d/4102384782.json",
    "revision": "d9ecec2a277405400d74b44b2391ba17"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "94f72ecd27ae678e890ab2b24ba49749"
  },
  {
    "url": "3c73754e3071f37fff86ea024def9e2612f04d48-f34ecff10b1595c74e9f.js"
  },
  {
    "url": "component---src-templates-all-posts-tsx-fb79fed56ad9b1283596.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "00503aa2b101c61a22258db3bdfb6849"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "ae4969c03329c6f4776e3d3a4feadff2"
  },
  {
    "url": "0c428ae2-e49c5469f13807d67d03.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-309cfda501b892e19b6a.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "620e6877833f91be59d3c4fb1cde36b0"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "5932b23cb3a24013041b34bf115f5ddb"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "1fe208a2b97acb39637c56bfc1c642b2"
  },
  {
    "url": "page-data/blog/introduction-to-functional-programming/page-data.json",
    "revision": "4e98c353cfe02114b21a4b02f75a540b"
  },
  {
    "url": "page-data/blog/introduction-to-linux-command-line/page-data.json",
    "revision": "68d69cbbc418a56f63bd03bde99d20b8"
  },
  {
    "url": "page-data/blog/introduction-to-nodejs/page-data.json",
    "revision": "e920d6920f769ec5e6e12e1001efa97a"
  },
  {
    "url": "page-data/blog/introduction-to-npm/page-data.json",
    "revision": "1f750f1bbd6083fc3dd03acd29cb8e07"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "393654d8ca1e0b2d1b8b21475b7cb3a8"
  },
  {
    "url": "page-data/blog/introduction-to-webpack/page-data.json",
    "revision": "d1c0e510e5e7b8a0ecdc00cf70d0fc25"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "be6fd4b8e9174c854bd76146d014c89b"
  },
  {
    "url": "component---src-templates-all-projects-tsx-42e559c6c767fffa8cd5.js"
  },
  {
    "url": "page-data/projects/2/page-data.json",
    "revision": "5d35059241e34a368c64505b07f32aa7"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "aed4af9f5427ce1dc1c68025d4ce838e"
  },
  {
    "url": "page-data/projects/real-time-store/page-data.json",
    "revision": "c76979065341b66d321f99b52d1810bb"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "83d52dcd01e6135b491d36fb29978188"
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
  if (!resources || !(await caches.match(`/app-c69cc2eddbb68fcfc025.js`))) {
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

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
    "url": "webpack-runtime-eeda22e4443384789b32.js"
  },
  {
    "url": "framework-d197a39db04c1b3f76c8.js"
  },
  {
    "url": "styles.4101032c7a0606f79b78.css"
  },
  {
    "url": "app-24175f4693f93d80fed4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cf3d85d5871579be6c364e56c7c4096b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-df8bb7a439f70a910785.js"
  },
  {
    "url": "polyfill-1fbb6991ecb352e44693.js"
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
    "url": "0e99aa6ecfbaf03ccf621b14e86a3842a7a577b2-eac9a2c3c98ece40f92d.js"
  },
  {
    "url": "component---src-pages-index-tsx-3b237f9c3d46e3ababe1.js"
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
    "revision": "df30b55625fb0ad61a126da13aa01f87"
  },
  {
    "url": "3c73754e3071f37fff86ea024def9e2612f04d48-5557f8502bd888afb6d3.js"
  },
  {
    "url": "component---src-templates-all-posts-tsx-05f65b8bbd3a4e9ffca5.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "be7c77342fe2ccbb93d92140854bd74a"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "4a2e7b1ef0956e7e4f4dacf841b5e9fb"
  },
  {
    "url": "0c428ae2-e49c5469f13807d67d03.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-74f5b6d1fb32dd60bfd7.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "e90948cad9e9e8443e4e795e2a53f5e0"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "431e505fc53a570c2b98015464a6c023"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "03f206315b853e8897a6cc4247b12873"
  },
  {
    "url": "page-data/blog/introduction-to-functional-programming/page-data.json",
    "revision": "5a2c3e82733930800d9710746d4f8070"
  },
  {
    "url": "page-data/blog/introduction-to-nodejs/page-data.json",
    "revision": "8737edb079e813781fbb1b3b14f637d3"
  },
  {
    "url": "page-data/blog/introduction-to-npm/page-data.json",
    "revision": "8240aeb15b5ef738f863fe84dd75849c"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "f60ecb95d8faf4d6fc075922af768225"
  },
  {
    "url": "page-data/blog/introduction-to-webpack/page-data.json",
    "revision": "7d6b746ae87c2110b6f82e4be89c350a"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "8ac775b7210d4722b12ec27459e76808"
  },
  {
    "url": "component---src-templates-all-projects-tsx-4b9794a5a772c23fc6b9.js"
  },
  {
    "url": "page-data/projects/2/page-data.json",
    "revision": "5b5a001e76d9af7d30bb20001d5e1160"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "4d65397a423bd95cb8fe3fb3bf608e9a"
  },
  {
    "url": "page-data/projects/real-time-store/page-data.json",
    "revision": "b44e2e114f54706d8fc2c1d8e9d3a801"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "eee154b59cc6ef2ca298d68da48a9800"
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
  if (!resources || !(await caches.match(`/app-24175f4693f93d80fed4.js`))) {
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

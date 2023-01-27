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
    "url": "webpack-runtime-853601ab0a459d409bbe.js"
  },
  {
    "url": "framework-e25487b4bbde20f89010.js"
  },
  {
    "url": "styles.0833df6e0668468a5ee1.css"
  },
  {
    "url": "app-4c0e0b1a657d351f7c7c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8c570de9a72b62789fdea6a2f13cd547"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-efd5a7eff3f8652501d6.js"
  },
  {
    "url": "polyfill-62c7e05a3d116aae05b1.js"
  },
  {
    "url": "1bfc9850-045944998858a7c4ff2c.js"
  },
  {
    "url": "5e2a4920-729d4c2171f570ed37e9.js"
  },
  {
    "url": "6728d85a-07edd499ca8b1de35ce2.js"
  },
  {
    "url": "0e99aa6ecfbaf03ccf621b14e86a3842a7a577b2-4e3cfad873e3b99c73dc.js"
  },
  {
    "url": "component---src-pages-index-tsx-6d30299bb20b76519fbb.js"
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
    "revision": "971996d6d448b6f78ae6fcbeb442bde8"
  },
  {
    "url": "3c73754e3071f37fff86ea024def9e2612f04d48-de972cf45616c585c265.js"
  },
  {
    "url": "component---src-templates-all-posts-tsx-a4a3132860c944de699c.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "5650b9dd417ac84c2399890fa6d2aad9"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "f5c04e20f7de56f762cb1753f10bd024"
  },
  {
    "url": "page-data/blog/4/page-data.json",
    "revision": "54998e28079de901f61f87169c74ba42"
  },
  {
    "url": "page-data/blog/5/page-data.json",
    "revision": "10b66a3b6f7139c163865815319eb37a"
  },
  {
    "url": "0c428ae2-bab0fa3e5243460e5f38.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-1947b2fe55d7f101a9b9.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "46aac8b64f97ef5a42b7b0cf4fadf34e"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "6fdf574d4816e5233d6e3eff429c0157"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "056e1417347ae1eda1fc5ee7d854118f"
  },
  {
    "url": "page-data/blog/introduction-to-bi/page-data.json",
    "revision": "294bb0a3733a32984050d25c9949b84b"
  },
  {
    "url": "page-data/blog/introduction-to-data-warehousing/page-data.json",
    "revision": "9614169bc4c267e9bb2fde665ac55afa"
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
    "revision": "84625a96f43c6f199bd17de811328bff"
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
    "revision": "e4eb4e6feae2d22c84e1118f5a5a2681"
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
    "url": "component---src-templates-all-projects-tsx-acc69f646cdce4cd849f.js"
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

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
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
  if (!resources || !(await caches.match(`/app-4c0e0b1a657d351f7c7c.js`))) {
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

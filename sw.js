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
    "url": "webpack-runtime-4d966d2c2c7e1b2f3686.js"
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
    "revision": "a2a1dc4b0bf8aa82e659dbf7c0113ad5"
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
    "url": "0e99aa6ecfbaf03ccf621b14e86a3842a7a577b2-804c8a5c989446c67fe5.js"
  },
  {
    "url": "component---src-pages-index-tsx-5b745a26985a02d6198a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "6dd4131e9dfb8768be36e01b1b886860"
  },
  {
    "url": "page-data/sq/d/4102384782.json",
    "revision": "d9ecec2a277405400d74b44b2391ba17"
  },
  {
    "url": "page-data/sq/d/4248178421.json",
    "revision": "9075c0d5be97454c5b28977ed5582aa9"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6baa2a5f8fe0f3b8ea8491592edf266a"
  },
  {
    "url": "3c73754e3071f37fff86ea024def9e2612f04d48-de972cf45616c585c265.js"
  },
  {
    "url": "component---src-templates-all-posts-tsx-a4a3132860c944de699c.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "560c01c220e6001114cdd784a5bd55b5"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "17ea77b2768a967dd0cc453e8eb8c335"
  },
  {
    "url": "page-data/blog/4/page-data.json",
    "revision": "d1490522249e71af54c66790b8514b28"
  },
  {
    "url": "page-data/blog/5/page-data.json",
    "revision": "d5102ddd357c9f02bb6510c1a9689809"
  },
  {
    "url": "0c428ae2-bab0fa3e5243460e5f38.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-bab8b3984462eb76bb5b.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "fcfd77509c07683d89eadf23b55ad5a9"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "bd9f27b21ea8972c0e0813be027644bb"
  },
  {
    "url": "page-data/blog/how-to-ask-questions-the-smart-way/page-data.json",
    "revision": "364457c3a0d98dc74657b9a77d78538a"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "097a5c2db2c9f991a13d2f93b4db18cb"
  },
  {
    "url": "page-data/blog/introduction-to-bi/page-data.json",
    "revision": "9e37cd75a45433302f156bfac9a116e0"
  },
  {
    "url": "page-data/blog/introduction-to-data-warehousing/page-data.json",
    "revision": "0b16908b10585d7b22f91ead73fabf57"
  },
  {
    "url": "page-data/blog/introduction-to-docker/page-data.json",
    "revision": "108b6f25642389ac7e400281adcd2e59"
  },
  {
    "url": "page-data/blog/introduction-to-functional-programming/page-data.json",
    "revision": "0c548976b49ca549b0f1980473f12d56"
  },
  {
    "url": "page-data/blog/introduction-to-git/page-data.json",
    "revision": "9c3e07246796c8e8eaa93e8db59c9d20"
  },
  {
    "url": "page-data/blog/introduction-to-linux-command-line/page-data.json",
    "revision": "32f9e08ee250067871e7631ae0ea6b05"
  },
  {
    "url": "page-data/blog/introduction-to-nodejs/page-data.json",
    "revision": "7342341664a91e1ea97db1f33b928d9b"
  },
  {
    "url": "page-data/blog/introduction-to-npm/page-data.json",
    "revision": "e56ffcbc69e9308fca97c56a1bf0c88e"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "bc53aeab020d399da953bafaafb42952"
  },
  {
    "url": "page-data/blog/introduction-to-webpack/page-data.json",
    "revision": "e528b82ada940ef8fdcb9956c9b8b75e"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "39ad3a8e1e17308e28580656266b9482"
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
    "revision": "02c89a7b42a33b592bf1c8c54c47e828"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "2b3881cf01b648e75eda56a0fec05721"
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

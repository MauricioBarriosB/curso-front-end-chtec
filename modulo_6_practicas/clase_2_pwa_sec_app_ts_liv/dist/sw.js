if (!self.define) { let e, i = {}; const n = (n, s) => (n = new URL(n + ".js", s).href, i[n] || new Promise((i => { if ("document" in self) { const e = document.createElement("script"); e.src = n, e.onload = i, document.head.appendChild(e) } else e = n, importScripts(n), i() })).then((() => { let e = i[n]; if (!e) throw new Error(`Module ${n} didn’t register its module`); return e }))); self.define = (s, r) => { const o = e || ("document" in self ? document.currentScript.src : "") || location.href; if (i[o]) return; let t = {}; const c = e => n(e, o), f = { module: { uri: o }, exports: t, require: c }; i[o] = Promise.all(s.map((e => f[e] || c(e)))).then((e => (r(...e), t))) } } define(["./workbox-5ffe50d4"], (function (e) { "use strict"; self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{ url: "./assets/index-B8ZOKqEi.css", revision: null }, { url: "./assets/index-CPKkTYPV.js", revision: null }, { url: "index.html", revision: "c280d578860ae838fdf983e05fa6677f" }, { url: "./registerSW.js", revision: "1872c500de691dce40960bb85481de07" }, { url: "./icons/icon-192x192.png", revision: "c65c4bff4a79a067789f6035c986676b" }, { url: "./icons/icon-512x512.png", revision: "c65c4bff4a79a067789f6035c986676b" }, { url: "./manifest.webmanifest", revision: "9f3af972d842cbba1943866d76befe58" }], {}), e.cleanupOutdatedCaches(), e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./index.html"))) }));

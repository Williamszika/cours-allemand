/* =====================================================================
   sw.js — Service Worker (mode hors-ligne / PWA installable)
   Précache l'« app shell » + toutes les données du cours, puis sert en
   cache-first (instantané et hors-ligne) avec mise à jour en arrière-plan.
   Les photos LoremFlickr sont mises en cache au fil de la navigation.
   ===================================================================== */
var VERSION = "v1.4.3";
var CACHE = "deutsch-a1c2-" + VERSION;

var SHELL = [
  "./", "./index.html", "./css/styles.css", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png",
  "./data/lecons-a11.js", "./data/lecons-a12.js", "./data/production.js", "./data/comprehension.js", "./data/grammaire.js",
  "./data/lecons-a21.js", "./data/lecons-a22.js", "./data/grammaire-a21.js", "./data/grammaire-a22.js",
  "./data/lecons-b11.js", "./data/lecons-b12.js", "./data/grammaire-b11.js", "./data/grammaire-b12.js",
  "./data/lecons-b21.js", "./data/lecons-b22.js", "./data/grammaire-b21.js", "./data/grammaire-b22.js",
  "./data/lecons-c11.js", "./data/lecons-c12.js", "./data/grammaire-c11.js", "./data/grammaire-c12.js",
  "./data/lecons-c21.js", "./data/lecons-c22.js", "./data/grammaire-c21.js", "./data/grammaire-c22.js",
  "./data/cours.js", "./data/illustrations.js", "./data/placement.js", "./data/pflege.js",
  "./js/i18n.js", "./js/speech.js", "./js/progress.js", "./js/revision.js", "./js/telegram.js", "./js/sync.js", "./js/exercises.js", "./js/app.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // addAll échoue si un seul fichier manque → on précache un par un, tolérant.
      return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE && k !== "deutsch-state"; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Rappel quotidien en arrière-plan (PWA installée, Chrome) */
self.addEventListener("periodicsync", function (e) {
  if (e.tag !== "daily-reminder") return;
  e.waitUntil(checkRappel());
});
self.addEventListener("sync", function (e) {
  if (e.tag === "daily-reminder") e.waitUntil(checkRappel());
});
function checkRappel() {
  return caches.open("deutsch-state").then(function (c) {
    return c.match("/__study").then(function (r) {
      if (!r) return;
      return r.json().then(function (s) {
        if (!s || !s.rappel) return;
        var today = new Date().toISOString().slice(0, 10);
        var hh = (s.heure || "19:00").split(":");
        var due = (new Date().getHours() * 60 + new Date().getMinutes()) >= (parseInt(hh[0], 10) * 60 + parseInt(hh[1] || "0", 10));
        if (!due || s.notified === today || s.last === today) return;
        s.notified = today;
        return c.put("/__study", new Response(JSON.stringify(s), { headers: { "Content-Type": "application/json" } })).then(function () {
          return self.registration.showNotification("⏰ Ton allemand t'attend !", {
            body: "Coach Zika : 5 minutes aujourd'hui suffisent pour garder ta série. 🇩🇪",
            icon: "icon-192.png", badge: "icon-192.png", tag: "daily-reminder"
          });
        });
      });
    });
  });
}
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) { if ("focus" in list[i]) return list[i].focus(); }
      if (self.clients.openWindow) return self.clients.openWindow("./");
    })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  // Photos LoremFlickr : stale-while-revalidate (dispo hors-ligne après 1ʳᵉ vue)
  if (url.hostname.indexOf("loremflickr") >= 0) {
    e.respondWith(
      caches.open(CACHE).then(function (c) {
        return c.match(req).then(function (hit) {
          var net = fetch(req).then(function (r) { if (r && r.status === 200) c.put(req, r.clone()); return r; }).catch(function () { return hit; });
          return hit || net;
        });
      })
    );
    return;
  }

  // Ressources tierces (SDK Telegram, polices…) : on laisse le navigateur gérer.
  if (url.origin !== self.location.origin) return;

  // Même origine : cache-first + mise à jour en arrière-plan ; repli index.html.
  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (r) {
        if (r && r.status === 200) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(req, cp); }); }
        return r;
      }).catch(function () {
        return hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined);
      });
      return hit || net;
    })
  );
});

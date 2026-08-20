const CACHE='knot-randomizer-v1';
const ASSETS=['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

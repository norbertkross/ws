const CACHE_NAME =  "wsource-cache";
const urlsToCache =  ["index.html","offline.html"];

const self = this;

// install service worker
self.addEventListener('install',(event)=>{
     event.waitUntil(
         caches.open(CACHE_NAME)
         .then((cache)=>{
            //  console.log('Opened cache');
             return cache.addAll(urlsToCache);

         })
     )
})

// listen to request
self.addEventListener('fetch',(event)=>{
     event.respondWith(
         caches.match(event.request)
            .then(()=>{
                //console.log(event.request);
                return fetch(event.request)
                    .catch(()=> caches.match('offline.html'))
            })
     )
})


// activate service worker
self.addEventListener('activate',(event)=>{
     const cacheWhitelist = [];
     cacheWhitelist.push(CACHE_NAME);

     event.waitUntil(
         caches.keys()
           .then((cacheNames)=>Promise.all(
               cacheNames.map((cacheName)=> {
                   if(!cacheWhitelist.includes(cacheName)){
                       return caches.delete(cacheName)
                   }
               })
           )) 
     )
})
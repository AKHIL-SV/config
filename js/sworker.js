self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addALL(["./","./style.css","./icon/edit.png","./icon/logo64.png","./icon/logo512.png","./icon/plus.png","./icon/trash.png","./font/Gilroy-Bold.woff","./font/Gilroy-Regular.woff"])
        })
    )



})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})
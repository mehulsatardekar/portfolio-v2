const staticDevCoffee = "mehul's-Portfolio-v1";
const assets = [
  "/",
  "/index.html",
  "./assets/css/minify-css.css",
  "./assets/js/script.js",
  "./assets/images/amazon-aws.svg",
  "./assets/images/avatar-1.png",
  "./assets/images/figma.svg",
  "./assets/images/icon-app.svg",
  "./assets/images/icon-design.svg",
  "./assets/images/icon.dev.svg",
  "./assets/images/icon.quote.svg",
  "./assets/images/icons8-bootstrap.svg",
  "./assets/images/icons8-chakra-ui.svg",
  "./assets/images/icons8-mysql-logo.svg",
  "./assets/images/icons8-typescript.svg",
  "./assets/images/supabase-logo-icon.svg",
  "./assets/images/profile.jpg",
  "./assets/images/aws_blog.webp",
  "./assets/images/cartmart_redux.png",
  "./assets/images/ecomm-figma.png",
  "./assets/images/flicker.png",
  "./assets/images/framerui.png",
  "./assets/images/hulu.png",
  "./assets/images/loadbalancer_blog.png",
  "./assets/images/quizguard.png",
  "./assets/images/social_media-figma.png",
  "./assets/images/zeplin.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

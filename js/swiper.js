// swiper 
let swiper = new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
loop: true,
autoplay:{
    delay:2000
}
});
// mySwiper
let mySwiper = new Swiper(".sale-sec", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
spaceBetween :20,
slidesPerView:5,
autoplay:{
    delay:3000
},
navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
loop: true,
breakpoints:{
    1600:{
        slidesPerView:5,
    },
    1024:{
        slidesPerView:4,
    },
    800:{
        slidesPerView:3,
    },
    0:{
        slidesPerView:2,
    }
}
});

// mySwiper2
let mySwiper2 = new Swiper(".product_swip", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
spaceBetween :20,
slidesPerView:4,
autoplay:{
    delay:3000
},
navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
loop: true,
 breakpoints:{
    1600:{
        slidesPerView:4,
    },
    1200:{
        slidesPerView:3,
    },
    900:{
        slidesPerView:2,
    },
    700:{
        slidesPerView:3,
    },
    0:{
        slidesPerView:2,
    }
}
});
// mySwiper3
let mySwiper3 = new Swiper(".product_swip2", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
spaceBetween :20,
slidesPerView:4,
autoplay:{
    delay:3000
},
navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
loop: true,
});
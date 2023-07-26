"use strict";

import {Swiper} from "./swiper-bundle.min.js";

new Swiper(".it-logitech__swiper",{
  pagination:{
    el:".it-logitech__pagination",
    clickable: true,
  }
});

new Swiper(".top-products__swiper",{
  slidesPerView:1.2,
  spaceBetween:16,
  breakpoints:{
    1200:{
      slidesPerView:5,
    },
    992:{
      slidesPerView:4.2,
    },
    768:{
      slidesPerView:3.2,
    },
    450:{
      slidesPerView:2.2,
    }
  }
})

new Swiper(".articles__swiper",{
  slidesPerView:1.2,
  spaceBetween:16,
  breakpoints:{
    1200:{
      slidesPerView:5,
    },
    992:{
      slidesPerView:4.2,
    },
    768:{
      slidesPerView:3.2,
    },
    450:{
      slidesPerView:2.2,
    }
  }
})
const swiper = new Swiper('.banner-swiper.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

const swiper2 = new Swiper('.sertificates-swiper.swiper', {
    // loop: true,
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,

        }
      }
});

const swiper3 = new Swiper('.partners-swiper.swiper', {
    // loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1, 
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        }
      },
    spaceBetween: 24,
});

const reviewsSwiper = new Swiper('.reviews-swiper.swiper', {
    
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
      320: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 2,

      }
    },
    spaceBetween: 24,

})
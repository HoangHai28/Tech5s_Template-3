
// swiper banner
    // document.querySelector(".mySwiper")
    // document.querySelector(".swiper-pagination")
    // document.querySelector(".bt-next")
    // document.querySelector(".bt-prev")

    document.addEventListener('DOMContentLoaded', function() {
      const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");
    
      var swiper = new Swiper(".mSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".bt-next",
          prevEl: ".bt-prev"
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });
      var swiper = new Swiper(".aSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: ".dis-next",
          prevEl: ".dis-prev",
          clickable: true,
        },
      });
    });


    var swiper = new Swiper(".aSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: ".dis-next",
        prevEl: ".dis-prev",
        clickable: true,
      },
    });


    var demo = function () {
      var Menubuton = document.querySelector(".show_Menu");
      var menu = document.querySelector(".box_mobi");
      var overlay = document.querySelector(".bg_over_menu");
    
      Menubuton.onclick = function () {
        Menubuton.classList.toggle("active");
        menu.classList.toggle("active");
      };
  
      document.onclick = function (e) {
        if (!Menubuton.contains(e.target) && !menu.contains(e.target)) {
          Menubuton.classList.remove("active");
          menu.classList.remove("active");
        }
      }};
// swiper banner
// document.querySelector(".mySwiper")
// document.querySelector(".swiper-pagination")
// document.querySelector(".bt-next")
// document.querySelector(".bt-prev")

document.addEventListener("DOMContentLoaded", function () {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  var swiper = new Swiper(".mSwiper", {
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".bt-next",
      prevEl: ".bt-prev",
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });
});


  document.addEventListener("DOMContentLoaded", function() {
    var fancyImages = function () {
      if ($(".fancy").length == 0) return;
      $(".fancy").fancybox({
        loop: true,
        buttons: ["zoom", "share", "slideShow", "fullScreen", "thumbs", "close"],
        thumbs: {
          loop: true,
          autoStart: false,
          axis: "x",
        },
      });
    };
    
  })

// var demo = function () {
//   var Menubuton = document.querySelector(".show_Menu");
//   var menu = document.querySelector(".box_mobi");
//   var overlay = document.querySelector(".bg_over_menu");

//   Menubuton.onclick = function () {
//     Menubuton.classList.toggle("active");
//     menu.classList.toggle("active");
//   };

//   document.onclick = function (e) {
//     if (!Menubuton.contains(e.target) && !menu.contains(e.target)) {
//       Menubuton.classList.remove("active");
//       menu.classList.remove("active");
//     }
//   };
// };

var GUI = {
  slideBanner: () => {
    if (document.querySelector(".aSwiper")) {
      var swiper = new Swiper(".aSwiper", {
        slidesPerView: 3.5,
        spaceBetween: 0,
        
        navigation: {
          nextEl: ".dis-next",
          prevEl: ".dis-prev",
          clickable: true,
        },
      });
    }
  },

  

  init: () => {
    GUI.slideBanner();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  GUI.init();
});

var Product = {
  slideMachine: () => {
    if(document.querySelector(".machineSwiper")) {
    var swiper = new Swiper(".machineSwiper", {
      slidesPerView: 6,
      spaceBetween: 20,
      navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
            clickable: true,
      },
    });
    }
  },

  init: () => {
    Product.slideMachine();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Product.init();
});
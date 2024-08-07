const cardMedia = document.querySelectorAll(".video-block");

cardMedia.forEach((VD, index) => {
  const videoElem = document.querySelectorAll(".controlVd");

  VD.addEventListener("mouseenter", function () {
    // console.log(videoElem[index]);
    videoElem[index].play();
  });

  VD.addEventListener("mouseout", function () {
    // console.log(videoElem[index]);
    // console.log(this);
    videoElem[index].pause();
  });
});

// script.js

// starter animation

var featureImage = document.querySelector(".feature-image");

function checkVisibility() {
  console.log("scrolling");
  var rect = featureImage.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Check if the element is fully within the viewport
  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    featureImage.classList.add("visible");
  } else {
    featureImage.classList.remove("visible");
  }
}

// Initial check
checkVisibility();

// Check visibility on scroll
window.addEventListener("scroll", checkVisibility);

jQuery(function ($) {
  $(".text-scroller-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    dots: false,
    variableWidth: true,
    arrows: false,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: true,
  });
});

// .feature-img

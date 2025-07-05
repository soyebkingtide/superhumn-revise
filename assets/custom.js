let screenSize = window.innerWidth;

function videoControl() {
  const cardMedia = document.querySelectorAll(".video-block");

  cardMedia.forEach((VD, index) => {
    const videoElem = document.querySelectorAll(".controlVd");
    videoElem[index].play();

    // if (screenSize >= 1200) {
    //   videoElem[index].pause();
    //   VD.addEventListener("mouseenter", function () {
    //     // console.log(videoElem[index]);
    //     videoElem[index].play();
    //   });

    //   VD.addEventListener("mouseout", function () {
    //     // console.log(videoElem[index]);
    //     // console.log(this);
    //     videoElem[index].pause();
    //   });
    // } else {
    //   videoElem[index].play();
    // }
  });
}
videoControl();
window.addEventListener("resize", videoControl);

// character top position  .characters{top: calc(160px + 10%) !important; }
// position of .header + top-padding to .superhumn-image-banner

//console.log("works");

// alert("v2");
function adjustPosTopImage() {
  const floatingCharacters = document.querySelector(".characters");
  const headerHeight = document.querySelector(".header");
  const bannerHeight = document.querySelector(".superhumn-image-banner");

  // If any of the required elements are missing, stop the function
  if (!floatingCharacters || !headerHeight || !bannerHeight) {
    return; // Exit the function early if elements are missing
  }

  const headerHeightValue = headerHeight.getBoundingClientRect().height;
  const bannerPaddingTop = window.getComputedStyle(bannerHeight).paddingTop;
  const bannerPaddingTopValue = parseFloat(bannerPaddingTop);

  const topPosition = headerHeightValue + bannerPaddingTopValue;

  screenSize = window.innerWidth;

  if (screenSize < 992) {
    floatingCharacters.style.top = `calc(${topPosition}px + 10%)`;
  } else {
    floatingCharacters.style.top = `calc(${topPosition}px + 10%)`;
  }

  // console.log("top position: " + floatingCharacters.style.top);
}

adjustPosTopImage();

window.addEventListener("resize", adjustPosTopImage);

jQuery(function ($) {
  $(".text-scroller-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    dots: false,
    variableWidth: true,
    arrows: false,

    speed: 10000,
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: "linear", // For smooth, continuous movement
    infinite: true, // Allows continuous looping
    pauseOnFocus: false,
    pauseOnHover: true,
  });
});

// Testimonials Slider

$(".slider-testimonials").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3600,
  autoplaySpeed: 0, // Set to 0 for continuous sliding
  cssEase: "linear", // For smooth, continuous movement
  infinite: true, // Allows continuous looping
  dots: false,
  arrows: false,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//------Featured collection slider

$(document).ready(function () {
  $(".slick-items").slick({
    centerMode: false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3,
    dots: false,
    arrows: false,

    speed: 3600,
    autoplaySpeed: 0, // Set to 0 for continuous sliding
    cssEase: "linear", // For smooth, continuous movement
    infinite: true, // Allows continuous looping

    // centerMode: true,
    // centerPadding: '0px',

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "0",

          variableWidth: false,

          slidesToShow: 2,
          slidesToScroll: 1,

          // centerPadding: '7px',
        },
      },

      {
        breakpoint: 749,
        settings: {
          centerPadding: "0",

          variableWidth: true,

          slidesToShow: 1,
          slidesToScroll: 1,

          // centerPadding: '7px',
        },
      },
    ],
  });
});


// Beef Jerkey new products
$(".beef-jerkey-items").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode:false,
  autoplay: false, // No autoplay
  speed: 600, // Transition speed in ms
  //infinite: true, // Enables loop
  //cssEase: "linear", // No ease (straight transition)
  dots: false,
  arrows: true, // Show next/prev arrows

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Global function to check visibility and apply a class
function checkVisibilityAndToggleClass(selector, className) {
  // Select the element based on the provided selector
  var element = document.querySelector(selector);

  // Ensure the element exists
  if (!element) {
    //  console.warn(`Element not found for selector: ${selector}`);
    return;
  }

  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Check if the element is visible in the viewport
  if (rect.bottom >= 0 && rect.top <= windowHeight - rect.height) {
    // Add the class if the element is visible
    element.classList.add(className);
  } else {
    // Remove the class if the element is not visible
    element.classList.remove(className);
  }

  // Apply any additional effects like parallax here, if necessary
}
let target;
function applyParallax(container, target) {
  let wpos = document.querySelector(container);
  ss = document.querySelector(target);

  if (!wpos || !ss) {
    //  console.warn("Elements not found for selector: .bg-image or .para");
    return;
  }

  var ww = wpos.getBoundingClientRect();
  var scrollPosition = window.scrollY || window.pageYOffset;
  var elementTop = ww.top + scrollPosition;
  var elementScrollPosition = scrollPosition - elementTop;
  //  console.log(elementScrollPosition);

  var parallaxSpeed = 0.5; // Adjust the speed factor as needed
  var parallaxOffset = elementScrollPosition * parallaxSpeed;

  ss.style.transform = `translateY(${parallaxOffset}px)`;
}

// Initial parallax effect application

// Initial visibility check
//checkVisibility();

// Check visibility and parallax effect on scroll and resize

function onScroll() {
  if (screenSize1 >= 922) {
    applyParallax(".bg-image", ".para");

    applyParallax(".superhumn-multicolumns-v2", ".para1");
  }

  checkVisibilityAndToggleClass(".feature-img", "comeFromRight");

  checkVisibilityAndToggleClass(".team-feature-img", "comeFromleft");

  checkVisibilityAndToggleClass(".character", "character-from-right");
}

const screenSize1 = window.innerWidth;

if (screenSize1 >= 922) {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
}


// open mega menu on hover

const mega_menu = document.querySelector('.mega-menu');
const mega_menu_content = document.querySelector('.mega-menu__content');
const HeaderMenu_get_jerky_link =  document.querySelector('#HeaderMenu-get-jerky');



mega_menu.addEventListener('mouseenter', () => {
  mega_menu.setAttribute('open', '');
  mega_menu_content.setAttribute('open', '');
   mega_menu_content.style.zIndex = 1;
  console.log("Hovered: open attribute added to both");
});

mega_menu.addEventListener('mouseleave', () => {
  mega_menu.removeAttribute('open');
  mega_menu_content.removeAttribute('open');
   mega_menu_content.style.zIndex = 0;
  
  console.log("Mouse left: open attribute removed from both");
});


HeaderMenu_get_jerky_link.addEventListener('click', () => {

  window.location.href = "/products/beefjerky";
  
})









  


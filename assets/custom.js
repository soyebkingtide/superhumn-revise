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

function adjustPosTopImage() {
  const floatingCharacters = document.querySelector(".characters");
  const headerHeight = document.querySelector(".header");
  const bannerHeight = document.querySelector(".superhumn-image-banner");

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

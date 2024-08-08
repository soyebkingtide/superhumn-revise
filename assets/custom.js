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
    console.warn(`Element not found for selector: ${selector}`);
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

function applyParallax(classBgImage, classPara, speedFactor = 0.5) {
  let wpos = document.querySelector(classBgImage);
  let parallax = document.querySelector(classPara);

  if (!wpos || !parallax) {
    console.warn(
      `Elements not found for selectors: ${classBgImage} or ${classPara}`
    );
    return;
  }

  var ww = wpos.getBoundingClientRect();
  var scrollPosition = window.scrollY || window.pageYOffset;
  var elementTop = ww.top + scrollPosition;
  var elementScrollPosition = scrollPosition - elementTop;

  var parallaxOffset = elementScrollPosition * speedFactor;
  parallax.style.transform = `translateY(${parallaxOffset}px)`;
}

// Function to apply parallax effect to multiple elements
function applyParallaxToMultiple(elements) {
  elements.forEach(({ bgImageClass, paraClass, speedFactor }) => {
    applyParallax(bgImageClass, paraClass, speedFactor);
  });
}

// Example usage
applyParallaxToMultiple([
  { bgImageClass: ".bg-image-1", paraClass: ".para-1", speedFactor: 0.5 },
]);

// Apply parallax effect on window scroll
window.addEventListener("scroll", () => {
  applyParallaxToMultiple([
    { bgImageClass: ".bg-image-1", paraClass: ".para-1", speedFactor: 0.5 },
  ]);
});

// Initial visibility check
//checkVisibility();

// Check visibility and parallax effect on scroll and resize

function onScroll() {
  checkVisibilityAndToggleClass(".feature-img", "comeFromRight");

  checkVisibilityAndToggleClass(".team-feature-img", "comeFromleft");

  checkVisibilityAndToggleClass(".character", "character-from-right");
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onScroll);

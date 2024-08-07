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

// Select the element
var featureImage = document.querySelector(".feature-img");

// Function to check visibility and apply parallax effect
function checkVisibility() {
  // Ensure the element exists
  if (!featureImage) {
    console.warn("Element not found for selector: .feature-img");
    return;
  }

  var rect = featureImage.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  // Check if the bottom of the element is visible in the viewport
  if (rect.bottom >= 0 && rect.top <= windowHeight - rect.height) {
    // Bottom of the element is within the viewport
    featureImage.classList.add("comeFromRight");
    console.log("add class here");
  } else {
    // Bottom of the element is not within the viewport
    featureImage.classList.remove("comeFromRight");
    console.log("remove class here");
  }

  // Apply parallax effect
  // requestAnimationFrame(applyParallax);
}

function applyParallax() {
  let wpos = document.querySelector(".bg-image");
  let parallex = document.querySelector(".para");

  if (!wpos || !parallex) {
    console.warn("Elements not found for selector: .bg-image or .para");
    return;
  }

  var ww = wpos.getBoundingClientRect();
  var scrollPosition = window.scrollY || window.pageYOffset;
  var elementTop = ww.top + scrollPosition;
  var elementScrollPosition = scrollPosition - elementTop;
  console.log(elementScrollPosition);

  var parallaxSpeed = 0.5; // Adjust the speed factor as needed
  var parallaxOffset = elementScrollPosition * parallaxSpeed;

  parallex.style.transform = `translateY(${parallaxOffset}px)`;
}

// Initial parallax effect application
applyParallax();

// Apply parallax effect on window scroll
window.addEventListener("scroll", applyParallax);

// Initial visibility check
checkVisibility();

// Check visibility and parallax effect on scroll and resize
window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);

// Select all elements with class "card--media"
const cardMedia = document.querySelectorAll(".card--media");

// Select all elements with class "controlVd"
const videoElem = document.querySelectorAll(".controlVd");

// Iterate over each cardMedia element
cardMedia.forEach((VD, index) => {
  // Add event listener for mouseenter
  VD.addEventListener("mouseenter", function () {
    console.log(videoElem[index]);
    if (videoElem[index]) {
      videoElem[index].play(); // Play the corresponding video element
    }
  });

  // Add event listener for mouseout
  VD.addEventListener("mouseout", function () {
    console.log(videoElem[index]);
    if (videoElem[index]) {
      videoElem[index].pause(); // Pause the corresponding video element
    }
  });
});

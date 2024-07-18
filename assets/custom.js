const cardMedia = document.querySelectorAll(".card--media");

const videoElem = document.querySelector(".controlVd");

cardMedia.forEach((VD, index) => {
  VD.addEventListener("mouseenter", function () {
    console.log(videoElem[index]);
    videoElem[index].play();
  });

  VD.addEventListener("mouseout", function () {
    console.log(videoElem[index]);
    console.log(this);
    videoElem[index].pause();
  });
});

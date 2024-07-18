const videoElem = document.querySelectorAll(".controlVd");

videoElem.forEach((VD) => {
  controlVD.addEventListener("mouseenter", function () {
    this.play();
  });

  VD.addEventListener("mouseout", function () {
    this.pause();
  });
});

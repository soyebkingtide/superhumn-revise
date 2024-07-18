const videoElem = document.querySelectorAll(".controlVd");

videoElem.forEach((VD) => {
  VD.addEventListener("mouseenter", function () {
    this.play();
  });

  VD.addEventListener("mouseout", function () {
    this.pause();
  });
});

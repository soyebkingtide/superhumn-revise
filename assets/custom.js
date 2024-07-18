const videoElem = document.querySelectorAll(".controlVd");

videoElem.forEach((VD) => {
  VD.addEventListener("mouseenter", function () {
    VD.play();
  });

  VD.addEventListener("mouseout", function () {
    VD.pause();
  });
});

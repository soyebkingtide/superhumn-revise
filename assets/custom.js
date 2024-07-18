const videoElem = document.querySelectorAll(".controlVd");

videoElem.forEach((VD) => {
  VD.addEventListener("mouseenter", function () {
    console.log(this);
    VD.play();
  });

  VD.addEventListener("mouseout", function () {
    console.log(this);
    VD.pause();
  });
});

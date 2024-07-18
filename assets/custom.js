const vd = document.querySelectorAll(".controlVd");

vd.forEach(
  (controlVD = (ss) => {
    controlVD.addEventListener("mouseenter", function () {
      this.play();
    });

    controlVD.addEventListener("mouseout", function () {
      this.pause();
    });
  })
);

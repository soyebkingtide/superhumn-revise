const vd = document.querySelectorAll(".controlVd");

vd.forEach(
  (controlVD = (ss) => {
    ss.addEventListener("mouseenter", function () {
      this.play();
    });

    ss.addEventListener("mouseout", function () {
      this.pause();
    });
  })
);

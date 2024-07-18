const vd = document.querySelectorAll(".controlVd");

vd.forEach(
  (controlVD = () => {
    this.addEventListener("mouseenter", function () {
      this.play();
    });

    this.addEventListener("mouseout", function () {
      this.pause();
    });
  })
);

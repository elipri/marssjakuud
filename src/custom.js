document.addEventListener("DOMContentLoaded", (event) => {
  const mars = document.getElementById("planeetmarss");
  const phobos = document.getElementById("kuuphobos");
  const deimos = document.getElementById("kuudeimos");
  AFRAME.registerComponent("animationhandler", {
    init: function () {
      document.getElementById("paus").addEventListener("click", () => {
        //alert('clicked');
        if (this.el.components["animation"].isPlaying) {
          this.el.components["animation"].pause();
        } else {
          this.el.components["animation"].play();
        }
      });
    }
  });
  document.getElementById("planeet").addEventListener("click", function () {
    mars.setAttribute("visible", "true");
    phobos.setAttribute("visible", "false");
    deimos.setAttribute("visible", "false");
  });
  document.getElementById("kuu1").addEventListener("click", function () {
    phobos.setAttribute("visible", "true");
    mars.setAttribute("visible", "false");
    deimos.setAttribute("visible", "false");
  });
  document.getElementById("kuu2").addEventListener("click", function () {
    deimos.setAttribute("visible", "true");
    phobos.setAttribute("visible", "false");
    mars.setAttribute("visible", "false");
  });
});

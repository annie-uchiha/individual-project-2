import { Firework, initializeMap, setupGalleryToggle } from "./helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  setupGalleryToggle();

  const form = document.getElementById("myForm");
  const fireworksContainer = document.getElementById("fireworksContainer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    new Firework("red", fireworksContainer);
    new Firework("blue", fireworksContainer);
    new Firework("orange", fireworksContainer);
  });

  initializeMap("map");
});

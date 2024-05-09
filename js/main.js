// GALLERY - show more/ show less btn functionality
$(document).ready(function () {
  $("#toggleBtn").click(function () {
    $(".additional-images").toggle();
    $(this).text(function (i, text) {
      return text === "SHOW LESS" ? "SHOW MORE" : "SHOW LESS";
    });

    // Apply CSS styles to the additional images
    if ($(".additional-images").is(":visible")) {
      $(".gallery-section__group2img").css({
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        margin: "10px",
      });
    }
  });
});

// CONTACT FORM - FIREWORKS
/* This code worked but only for one circle firework
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const fireworksContainer = document.getElementById("fireworksContainer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firework = document.createElement("div");
    firework.classList.add("firework");
    fireworksContainer.appendChild(firework);

    firework.addEventListener("animationend", function () {
      fireworksContainer.removeChild(firework);
    });
  });
});*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const fireworksContainer = document.getElementById("fireworksContainer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const redFirework = new Firework("red", fireworksContainer);
    const blueFirework = new Firework("blue", fireworksContainer);
    const orangeFirework = new Firework("orange", fireworksContainer);
  });
});

function Firework(color, container) {
  this.element = document.createElement("div");
  this.element.classList.add("firework", color);
  this.element.style.left = getRandomPosition(10, 90) + "%";
  this.element.style.top = getRandomPosition(10, 90) + "%";
  container.appendChild(this.element);

  this.element.addEventListener("animationend", () => {
    this.remove();
  });
}

Firework.prototype.remove = function () {
  this.element.parentNode.removeChild(this.element);
};

function getRandomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

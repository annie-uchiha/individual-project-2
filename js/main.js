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
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Create fireworks element
  const fireworks = document.createElement('div');
  fireworks.classList.add('firework');
  document.body.appendChild(fireworks);

  // Remove fireworks after 3 seconds
  setTimeout(function() {
    fireworks.remove();
  }, 3000);
});


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

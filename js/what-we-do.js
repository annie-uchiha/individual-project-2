function toggleAdditionalText() {
  var additionalText = document.querySelector(".additional-text");
  var toggleBtn = document.getElementById("toggleBtn1");

  if (
    additionalText.style.display === "none" ||
    additionalText.style.display === ""
  ) {
    additionalText.style.display = "block";
    toggleBtn.textContent = "LESS DETAILS";
  } else {
    additionalText.style.display = "none";
    toggleBtn.textContent = "MORE DETAILS";
  }
}

function toggleAdditionalText2() {
  var additionalText = document.querySelector(".additional-text2");
  var toggleBtn = document.getElementById("toggleBtn2");

  if (
    additionalText.style.display === "none" ||
    additionalText.style.display === ""
  ) {
    additionalText.style.display = "block";
    toggleBtn.textContent = "LESS DETAILS";
  } else {
    additionalText.style.display = "none";
    toggleBtn.textContent = "MORE DETAILS";
  }
}

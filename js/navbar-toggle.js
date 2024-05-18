import { toggleNavItem } from "./helpers.js";

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    toggleNavItem(this);
  });
});

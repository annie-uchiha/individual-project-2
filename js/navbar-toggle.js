import { toggleNavItem } from "./_helpers.js";

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    toggleNavItem(item);
  });
});

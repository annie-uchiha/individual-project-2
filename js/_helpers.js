import { selectors } from "./_variables.js";

export function toggleText(selectorText, selectorBtn) {
  const additionalText = document.querySelector(selectorText);
  const toggleBtn = document.querySelector(selectorBtn);

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

export function toggleNavItem(element) {
  const navItems = document.querySelectorAll(selectors.navItems);
  navItems.forEach((item) => {
    item.classList.remove("active");
    item.querySelector("i").classList.remove("fa-solid");
    item.querySelector("i").classList.add("fa-regular");
  });

  element.classList.add("active");
  element.querySelector("i").classList.remove("fa-regular");
  element.querySelector("i").classList.add("fa-solid");
}

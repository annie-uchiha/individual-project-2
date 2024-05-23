import { selectors } from "./_variables.js";
import { toggleText } from "./_helpers.js";

document.querySelector(selectors.toggleBtn1).addEventListener("click", () => {
  toggleText(selectors.additionalText, selectors.toggleBtn1);
});

document.querySelector(selectors.toggleBtn2).addEventListener("click", () => {
  toggleText(selectors.additionalText2, selectors.toggleBtn2);
});

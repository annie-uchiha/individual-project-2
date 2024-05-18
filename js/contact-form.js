import {
  FORM_CONTAINER_STYLES,
  TITLE_STYLES,
  LEFT_COLUMN_ITEMS,
} from "./_variables.js";
import {
  createElement,
  applyStyles,
  createLeftColumn,
  appendChildren,
} from "./helpers.js";

const formContainer = createElement("div", FORM_CONTAINER_STYLES);

const title = createElement("h1", TITLE_STYLES, "GET IN TOUCH");

const leftColumn = createLeftColumn(LEFT_COLUMN_ITEMS);

const rightColumn = document.createElement("div");
rightColumn.style.float = "right";
rightColumn.style.width = "50%";

const nameInput = createElement("input", {
  width: "100%",
  marginBottom: "10px",
});
nameInput.type = "text";
nameInput.placeholder = "Name";

const emailInput = createElement("input", {
  width: "100%",
  marginBottom: "10px",
});
emailInput.type = "email";
emailInput.placeholder = "Email";

const submitBtn = createElement("button", { width: "100%" }, "Submit");

appendChildren(rightColumn, [nameInput, emailInput, submitBtn]);

appendChildren(formContainer, [title, leftColumn, rightColumn]);

document.body.appendChild(formContainer);

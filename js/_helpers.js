import {
  FORM_CONTAINER_STYLES,
  TITLE_STYLES,
  LEFT_COLUMN_ITEMS,
  MAP_API_KEY,
} from "./_variables.js";

export function applyStyles(element, styles) {
  for (const [key, value] of Object.entries(styles)) {
    element.style[key] = value;
  }
}

export function createElement(type, styles = {}, textContent = "") {
  const element = document.createElement(type);
  applyStyles(element, styles);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

export function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

export function createLeftColumn(items) {
  const leftColumn = document.createElement("div");
  leftColumn.style.float = "left";
  leftColumn.style.width = "50%";

  items.forEach((item) => {
    const label = document.createElement("label");
    label.textContent = `${item.label}: ${item.value}`;
    leftColumn.appendChild(label);
    leftColumn.appendChild(document.createElement("br"));
  });

  return leftColumn;
}

export function getRandomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

export function Firework(color, container) {
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

export function initializeMap(containerId) {
  return tt.map({
    key: MAP_API_KEY,
    container: containerId,
  });
}

export function toggleNavItem(element) {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.remove("active");
    item.querySelector("i").classList.remove("fa-solid");
    item.querySelector("i").classList.add("fa-regular");
  });

  element.classList.add("active");
  element.querySelector("i").classList.remove("fa-regular");
  element.querySelector("i").classList.add("fa-solid");
}

export function setupGalleryToggle() {
  $(document).ready(function () {
    $("#toggleBtn").click(function () {
      $(".additional-images").toggle();
      $(this).text(function (i, text) {
        return text === "SHOW LESS" ? "SHOW MORE" : "SHOW LESS";
      });

      if ($(".additional-images").is(":visible")) {
        $(".gallery-section__group2img").css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px",
        });
      }
    });
  });
}

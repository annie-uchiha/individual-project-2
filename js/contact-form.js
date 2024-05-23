// GET IN TOUCH FORM VIA JS

// Create form container
const formContainer = document.createElement("div");
formContainer.style.width = "770px";
formContainer.style.height = "540px";
formContainer.style.margin = "0 auto";
formContainer.style.border = "1px solid black";
formContainer.style.padding = "20px";
formContainer.style.boxSizing = "border-box";

// Create title
const title = document.createElement("h1");
title.textContent = "GET IN TOUCH";
title.style.textAlign = "center";
title.style.color = "#2c4058";

// Create left column for address, phone, email, working hours
const leftColumn = document.createElement("div");
leftColumn.style.float = "left";
leftColumn.style.width = "50%";

const leftItems = [
  {
    label: "Address",
    value: "91 Nolan Extensions Suite 670",
    icon: "fa-map-marker-alt",
  },
  { label: "Phone", value: "+001 356-868-2454", icon: "fa-phone" },
  { label: "Email", value: "montichello@service.com", icon: "fa-envelope" },
  {
    label: "Working Hours",
    value: "From 07:05AM to 19:30PM",
    icon: "fa-clock",
  },
];

leftItems.forEach((item) => {
  const label = document.createElement("label");
  label.textContent = item;
  const br = document.createElement("br");
  leftColumn.appendChild(label);
  leftColumn.appendChild(br);
});

// Create right column for name, email input fields and submit button
const rightColumn = document.createElement("div");
rightColumn.style.float = "right";
rightColumn.style.width = "50%";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.style.width = "100%";
nameInput.style.marginBottom = "10px";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.style.width = "100%";
emailInput.style.marginBottom = "10px";

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.style.width = "100%";

rightColumn.appendChild(nameInput);
rightColumn.appendChild(emailInput);
rightColumn.appendChild(submitBtn);

// Append elements to the form container
formContainer.appendChild(title);
formContainer.appendChild(leftColumn);
formContainer.appendChild(rightColumn);

// Append form container to the document body
document.body.appendChild(formContainer);

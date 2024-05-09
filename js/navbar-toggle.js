function toggleNavItem(element) {
  // Remove 'active' class from all nav items
  var navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.remove("active");
    // Reset icon to empty circle
    item.querySelector("i").classList.remove("fa-solid");
    item.querySelector("i").classList.add("fa-regular");
  });

  // Add 'active' class to clicked nav item
  element.classList.add("active");
  // Change icon to solid circle
  element.querySelector("i").classList.remove("fa-regular");
  element.querySelector("i").classList.add("fa-solid");
}

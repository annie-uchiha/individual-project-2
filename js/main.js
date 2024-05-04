//Add a toggle effect on navbar list items

function toggleActive(element) {

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));

 
  element.classList.add('active');
}



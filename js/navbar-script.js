const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function () {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    menuIcon.src = '../img/x.svg';
  } else {
    menuIcon.src = '../img/menu.svg';
  }
});

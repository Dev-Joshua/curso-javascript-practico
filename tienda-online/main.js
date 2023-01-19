//Selecciono al elemento el cual le dare clic
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");

//Utilizo su metodo addEventListener para ejecutar una funcion cuando se de clic al elemento
menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  console.log("Click");
  desktopMenu.classList.toggle("inactive");
}

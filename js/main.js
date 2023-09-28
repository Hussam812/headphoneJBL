//Show menu header
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

const navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//Remove menu when click a link on it
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Selecting the elements
const button__1 = document.querySelector(".menu__1");
const button__2 = document.querySelector(".menu__2");
const button__3 = document.querySelector(".menu__3");
const button__4 = document.querySelector(".menu__4");

// Selectiong the sectios

const section2 = document.querySelector("#section__2");
const section3 = document.querySelector("#section__3");
const section4 = document.querySelector("#section__4");
const section6 = document.querySelector("#section__6");

// Selection of each navlink

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

const img = document.querySelector(".menu__img");

button__1.addEventListener("click", function () {
  img.src = "Img/menu0.png";
});

button__2.addEventListener("click", function () {
  img.src = "Img/menu1.png";
});

button__3.addEventListener("click", function () {
  img.src = "Img/menu2.png";
});

button__4.addEventListener("click", function () {
  img.src = "Img/menu3.png";
});

// On scroll view

home.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});
about.addEventListener("click", function () {
  section3.scrollIntoView({ behavior: "smooth" });
});
menu.addEventListener("click", function () {
  section4.scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", function () {
  section6.scrollIntoView({ behavior: "smooth" });
});

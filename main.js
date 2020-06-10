const menu = document.querySelector("#menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose=document.querySelector("#menu-close");
const ul = document.querySelector("ul");

mobileMenu.addEventListener("click", function(){
ul.classList.toggle("open");
menuClose.classList.toggle("open");
menu.classList.toggle("open");
});

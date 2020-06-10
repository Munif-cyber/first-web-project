const menu = document.querySelector("#menu");
const menuClose=document.querySelector("#menu-close");
const ul = document.querySelector("ul");

menu.addEventListener("click", function(){
ul.classList.toggle("open");
});

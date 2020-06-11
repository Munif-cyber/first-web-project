const menu = document.querySelector("#menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose=document.querySelector("#menu-close");
const ul = document.querySelector("ul");

const expand=document.querySelector("#expand");
const collapse=document.querySelector("#collapse");
const mobileEx=document.querySelector(".mobile-ex");
const expandul=document.querySelector(".classes ul");


mobileMenu.addEventListener("click", function(){
ul.classList.toggle("open");
menuClose.classList.toggle("open");
menu.classList.toggle("open");
});

mobileEx.addEventListener("click", function(){
    expandul.classList.toggle("expand");
    expand.classList.toggle("expand");
    collapse.classList.toggle("expand");
    
});
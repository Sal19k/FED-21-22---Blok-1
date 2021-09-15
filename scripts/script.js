var hamburger = document.querySelector("button");
var menu = document.querySelector("section")


hamburger.addEventListener("click", uitklap);


function uitklap() {
        console.log("Hello world!");
        menu.classList.toggle("anders");

}
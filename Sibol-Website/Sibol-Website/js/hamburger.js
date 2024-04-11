const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");
const navMenu = document.querySelector(".nav-tabs");
const body = document.querySelector("body");
const windowWidth = document.querySelector("body").style.width;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    body.classList.toggle("active");

}

navList.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    body.classList.remove("active");
}



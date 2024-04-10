// function showNavbar() {
//     const myNav = document.getElementById("nav-list");
//     if (myNav.style.display === "block") {
//       myNav.style.display = "none";
//     } else {
//       myNav.style.display = "block";
//     }
//   }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-list");
const body = document.querySelector("body");
const windowWidth = document.querySelector("body").style.width;

function closeNav() {
    if (windowWidth >= "768px" ) {
        mobileMenu();
    }
}

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");

}

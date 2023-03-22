const burgerMenu = document.querySelector(".toggle__menu");
const nav = document.querySelector(".header__nav");
const bilogMenu = document.querySelector(".toggle__side__menu");
const sched = document.querySelector(".header__sched");

burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
    sched.classList.remove("show");
    burgerMenu.classList.toggle("show");
})

bilogMenu.addEventListener("click", () => {
    sched.classList.toggle("show");
    nav.classList.remove("show");
    bilogMenu.classList.toggle("swap");
    bilogMenu.classList.toggle("closing");
});
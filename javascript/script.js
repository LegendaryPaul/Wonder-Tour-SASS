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

// const dropp = document.querySelectorAll(".fa-chevron-down");
// const navDrop = document.querySelectorAll(".nav__drop");

// dropp.forEach((dropps) => {
//     dropps.addEventListener("click", () => {
//         navDrop.classList.toggle("show");
//     });
// })

const dropp = document.querySelectorAll(".fa-chevron-down");

dropp.forEach((dropps) => {
    dropps.addEventListener('click',()=>{

        const el = dropps.parentElement.nextElementSibling;
        el.classList.toggle("show");
        dropps.classList.toggle("show");
        dropps.parentElement.classList.toggle("active");
    })
})
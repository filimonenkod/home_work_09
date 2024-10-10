let burger = document.getElementById("burger");
console.log(burger);
let nav = document.getElementById("nav");

burger.addEventListener('click', function () {
    burger.classList.toggle("active");
    nav.classList.toggle("nav--active");
})
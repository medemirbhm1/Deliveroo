/*=============== SHOW/HIDE MENU ===============*/
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => menu.classList.toggle("active"));


/*=============== ADD HEADER SHADOW ===============*/
const header = document.querySelector("header");

window.addEventListener("scroll", chngBg);
function chngBg() {
    if (this.scrollY >= 50) header.classList.add("scroll");
    else header.classList.remove("scroll");
}

/*=============== SERVICES CARDS EFFECT ===============*/
let cards = document.querySelectorAll(".services .container .cards .card")
cards.forEach(card => card.addEventListener("mouseover", ()=> {
    cards.forEach(card => card.classList.remove("active"))
    card.classList.add("active")
}))
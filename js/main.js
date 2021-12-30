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

// ==== SCROLL REVEAL ANIMATION  =====
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});
sr.reveal(".home .image, .services .container, footer ul ");
sr.reveal(".home  .text", { delay: 400 });
sr.reveal(".order .image, .deliver .text, .track .image, .app .image", { origin: "left" });
sr.reveal(".order .text, .deliver .image, .track .text, .app .text", { origin: "right" });
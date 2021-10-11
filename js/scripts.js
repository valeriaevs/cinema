const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-counter");
let cost = 800;
let totalPrice = 0;
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
    console.log();
  } 
});

menuButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});
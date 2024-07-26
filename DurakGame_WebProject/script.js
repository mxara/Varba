// script.js

// Register button toggle functionality
document.querySelector("#registerBtn").addEventListener("click", () => {
  const formContainer = document.querySelector("#registerFormContainer");
  formContainer.style.display =
    formContainer.style.display === "none" ? "flex" : "none";
});

// Card functionality
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let card6 = document.querySelector(".card6");

let card7 = document.querySelector(".card7");
let card8 = document.querySelector(".card8");
let card9 = document.querySelector(".card9");
let card10 = document.querySelector(".card10");
let card11 = document.querySelector(".card11");
let card12 = document.querySelector(".card12");

// battlefield
const battlefield = document.querySelector(".battle-field");

let cards = [card7, card8, card9, card10, card11, card12];
let cards2 = [card1, card2, card3, card4, card5, card6];

// -------------- game --------------
let cardPushed = false;

let pushing = cards.filter(function (item) {
  item.addEventListener("mousedown", function (event) {
    for (let i = 0; i < 6; i++) {cards[i].style.backgroundColor = "gray"};
    item.style.backgroundColor = "black";
    cardPushed = true;

    battlefield.addEventListener("click", function () {
      if (cardPushed == true &&  item.style.backgroundColor == "black") {
        item.remove();
        battlefield.innerHTML += `<div class="${item.classList}"><div>`;
        cardPushed = false;
      }
    });
  });
});

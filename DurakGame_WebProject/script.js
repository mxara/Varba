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


let cards = [card7, card8, card9, card10, card11, card12];
let cards2 = [card1, card2, card3, card4, card5, card6];

let pushing = cards.filter(function (item, index, array) {
    item.addEventListener("mousedown", function (e) {
        item.style.backgroundColor = "black";
        let pushing2 = cards2.filter(function (item) {
        });
    })
});
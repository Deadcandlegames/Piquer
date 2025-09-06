let hand = [];
let opponent1Hand = [];
let opponent2Hand = [];
let opponent3Hand = [];
let opponent4Hand = [];
document.getElementById("draw").addEventListener("click", dealPlayer);
document.getElementById("debug").addEventListener("click", debug);
const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

// Build the full deck
const deck = [];

for (let suit of suits) {
  for (let rank of ranks) {
    deck.push([rank, suit]); // Each card is an array: [rank, suit]
  }
}
function start() {
  let numberOfPlayers = prompt("How many players?");
  let cardsDealt = 26 - numberOfPlayers * 8;
  switch (numberOfPlayers) {
    case 2:
      dealPlayer();
      dealOpponent1();
      break;
    case 3:
      dealPlayer();
      dealOpponent1();
      dealOpponent2();
      break;
    case 4:
      dealPlayer();
      dealOpponent1();
      dealOpponent2();
      dealOpponent3();
      break;
    case 5:
      dealPlayer();
      dealOpponent1();
      dealOpponent2();
      dealOpponent3();
      dealOpponent4();
      break;
  }
}
//clean the section of code before this up

function dealPlayer() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let fullName = `${deck[a][1]} of ${deck[a][0]}`;
    let arrayName = deck.splice(a, 1)[0];
    hand.push(arrayName);
  }
  console.log(hand);
}
function dealOpponent1() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let fullName = `${deck[a][1]} of ${deck[a][0]}`;
    let arrayName = deck.splice(a, 1)[0];
    opponent1Hand.push(arrayName);
  }
}
function dealOpponent2() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let fullName = `${deck[a][1]} of ${deck[a][0]}`;
    let arrayName = deck.splice(a, 1)[0];
    opponent2Hand.push(arrayName);
  }
}
function dealOpponent3() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let fullName = `${deck[a][1]} of ${deck[a][0]}`;
    let arrayName = deck.splice(a, 1)[0];
    opponent3Hand.push(arrayName);
  }
}
function dealOpponent4() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let fullName = `${deck[a][1]} of ${deck[a][0]}`;
    let arrayName = deck.splice(a, 1)[0];
    opponent4Hand.push(arrayName);
  }
}
//show players images of the hand by converting fullName to a swich statment
function debug() {
  console.log(hand);
}

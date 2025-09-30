let hand = [];
let lowerCards = []; //first 4 are the overcards and the last four are the undercards
let opponent1Hand = [];
let opponent1LowerCards = [];
let opponent2Hand = [];
let opponent2LowerCards = [];
let opponent3Hand = [];
let opponent3LowerCards = [];
let opponent4Hand = [];
let opponent4LowerCards = [];
let cardsDealt;
let cardsDealtPlayer;
let goesFirst;
let numberOfPlayers;
document.getElementById("debug").addEventListener("click", debug);
document.getElementById("start").addEventListener("click", start);
const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Build the full deck
const deck = [];

for (let suit of suits) {
  for (let rank of ranks) {
    deck.push([rank, suit]); // Each card is an array: [rank, suit]
  }
}
function start() {
  cardsDealtPlayer = null
  goesFirst = null
  numberOfPlayers = parseInt(prompt("How many players?"));
  cardsDealt = Math.floor((52 - 8 * numberOfPlayers) / numberOfPlayers);
  if (numberOfPlayers === 3) {
    goesFirst = confirm("Would you like to go first?")
    if (goesFirst) {
      cardsDealtPlayer = cardsDealt + 1
    } else {
      cardsDealtPlayer = cardsDealt
      //Add player # (random just not the user) get one more card
    }
  } else {
    cardsDealtPlayer = cardsDealt
  }
  //Add goesFirst = true or false with a 100/numberOfPlayers chance of getting true
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
    default:
      alert("Error! Error Code 101")
  }
}
//clean the section of code before this up

function dealPlayer() {
  for (let i = 1; i <= cardsDealtPlayer; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    lowerCards.push(arrayName);
  }
  console.log(hand);
}
function dealOpponent1() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent1Hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent1LowerCards.push(arrayName);
  }
}
function dealOpponent2() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent2Hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent2LowerCards.push(arrayName);
  }
}
function dealOpponent3() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent3Hand.push(arrayName);
  }
    for (let i = 1; i <= 8; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent3LowerCards.push(arrayName);
  }
}
function dealOpponent4() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent4Hand.push(arrayName);
  }
    for (let i = 1; i <= 8; i++) {
    let a = Math.floor(Math.random() * deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent4LowerCards.push(arrayName);
  }
}
//show players images of the hand by converting fullName to a swich statment
function debug() {
  console.log(hand);
}

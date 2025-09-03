let hand = [];
document.getElementById("draw").addEventListener("click", drawCard);
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

function deal() {
  let numberOfPlayers = prompt("How many players?")
  let cardsDealt = 26 - (numberOfPlayers * 8)
  for (let i = 1; i <= cardsDealt; i++) {
    let a = Math.floor(Math.random()*deck.length)
    let fullName = `${deck[a][1]} of ${deck[a][0]}`
    let arrayName = deck.splice(a,1)[0]
    hand.push(arrayName)
    //show players images of the hand by converting fullName to a swich statment
  }
  console.log(hand);
}
function debug() {
  console.log(hand);
}

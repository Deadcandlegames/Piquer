let hand = [];
let undercards = [];
let overcards = [];
let opponent1Hand = [];
let opponent1Overcards = [];
let opponent1Undercards = [];
let opponent2Hand = [];
let opponent2Overcards = [];
let opponent2Undercards = [];
let opponent3Hand = [];
let opponent3Overcards = [];
let opponent3Undercards = [];
let centerCards = [];
let cardsDealt;
let cardsDealtPlayer;
let goesFirst;
let numberOfPlayers;
let win;
let currentPlayer = 0; // 0 = you, 1 = opponent1, 2 = opponent2, 3 = opponent3
let htmlcardshand;
//camel case for all of the variable names
document.getElementById("resetBtn").addEventListener("click", debug);
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
  win = false;
  cardsDealtPlayer = null;
  goesFirst = null;
  numberOfPlayers = parseInt(prompt("How many players?"));
  cardsDealt = Math.floor((52 - 8 * numberOfPlayers) / numberOfPlayers);
  if (numberOfPlayers === 3) {
    goesFirst = confirm("Would you like to go first?");
    if (goesFirst) {
      cardsDealtPlayer = cardsDealt + 1;
      a = randomInRange(1, numberOfPlayers - 1)
      if (a === 1) {
            goesFirst = true;
          } else {
            goesFirst = false;
          }
    } else {
      cardsDealtPlayer = cardsDealt;
      let luckyOpponent = randomInRange(1, numberOfPlayers - 1);
      // Give them +1 card
      switch (luckyOpponent) {
        case 1:
          opponent1Hand.push(deck.pop());
          break;
        case 2:
          opponent2Hand.push(deck.pop());
          break;
        case 3:
          opponent3Hand.push(deck.pop());
          break;
      }
    }
  } else {
    cardsDealtPlayer = cardsDealt;
  }
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
    default:
      alert("Error! Error Code 101");
  }
  toTheScreen(hand)
}
//clean the section of code before this up
//IMPORTANT arrayName does not mean the name of the array, it means the name of the card
function toTheScreen(cardGroup) {
  //Plays card to the screen
  for (let i = 0; i < cardsDealtPlayer - 1; i++) {
  let htmlcardhand = cardNameToImage(cardGroup[i]); //this is temporary
  htmlcardshand = `<img src="${htmlcardhand}" alt="${htmlcardhand}" title="Click here to play this card">`;
  let div = document.getElementById(`p0-${cardGroup}`);
  div.innerHTML += htmlcardshand;
  }
}

function dealPlayer() {
  for (let i = 0; i < cardsDealtPlayer; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    hand.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    undercards.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    overcards.push(arrayName);
  }
}

function dealOpponent1() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent1Hand.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent1Undercards.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent1Overcards.push(arrayName);
  }
}

function dealOpponent2() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent2Hand.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent2Undercards.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent2Overcards.push(arrayName);
  }
}

function dealOpponent3() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent3Hand.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent3Undercards.push(arrayName);
  }
  for (let i = 1; i <= 4; i++) {
    let a = randomInRange(0, deck.length - 1);
    let arrayName = deck.splice(a, 1)[0];
    if (!arrayName) {
      alert("Error ???");
      break;
    }
    opponent3Overcards.push(arrayName);
  }
}

function playTurn(win) {
  if (currentPlayer === 0 && win == false) {
    // Player's turn
  } else {
    // Turn(centerCards[(centerCards.length - 1)], win)
  }
  if (win == false) {
    currentPlayer = (currentPlayer + 1) % numberOfPlayers;
  } else {
    // End state
  }
}
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function debug() {
  let debug = prompt("Enter a keyword");
  switch (debug) {
    case "hand":
      console.log("Hand: ", hand, "Under Cards: ", undercards, "Over cards", overcards);
      return;
    case "op1":
      console.log("Hand: ", opponent1Hand, "Under Cards: ", opponent1Undercards, "Over cards", opponent1Overcards);
      return;
    case "op2":
      console.log("Hand: ", opponent2Hand, "Under Cards: ", opponent2Undercards, "Over cards", opponent2Overcards);
      return;
    case "op3":
      console.log("Hand: ", opponent3Hand, "Under Cards: ", opponent3Undercards, "Over cards", opponent3Overcards);
      return;
    default:
      alert("Error! Error code 201");
  }
}

function turn(centercard, win) {
     if (currentPlayer !== 1 && win == false) {
        if (canPlay("hand", centercard, currentPlayer)) {
            playCard(highestPossible("hand", centercard), "hand")
        } else {
            if (overcards.length > undercards.length) {
                playCard(highestPossible("overcards", centercard), "overcards")
            } else {
                if (canplay("undercards", centercard, currentPlayer)) {
                    playCard(undercards[0], "undercards")
                } else {
                    hand.push(centerCards)
                }
            }
        }
    }
}


function canPlay(groupsOfCards, centerAmount, currentPlayer) {
    let i = centerAmount
    let canPlay = "undecided"
    // so i = centerAmount and centerAmount = centerCard and centerCard = centerCards.lengh - 1
    switch (currentPlayer) {
        case 1:
        //opponent #1
            switch (groupsOfCards) {
                case "hand":
                    // can play
                    for (i; opponent1Hand.includes(i); i--) {
                         return true;
                         canPlay = "true";
                    }
                    break;
                case "overcards":
                    // can play
                    for (i; opponent1Overcards.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
                case "undercards":
                    // can play
                    for (i; opponent1Undercards.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
            }
            break;
        case 2:
        //opponent #2
            switch (groupsOfCards) {
                case "hand":
                    // can play
                    for (i; opponent2Hand.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
                case "overcards":
                    // can play
                    for (i; opponent2Overcards.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
                case "undercards":
                    // can play
                    for (i; opponent2Undercards.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
            }
            break;
        case 3:
        //opponent #3
            switch (groupsOfCards) {
                case "hand":
                    // can play
                    for (i; opponent3Hand.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
                case "overcards":
                    // can play
                    for (i; opponent3Overcards.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
                case "undercards":
                    // can play
                    for (i; opponent3Undercards.includes(i); i--) {
                        return true;
                        canPlay = "true";
                    }
                    break;
            }
            break;
    }
    if (canPlay !== "true") {
        return false;   
    }
}

function highestPossible(groupsOfCards, centerAmount) {
    let i = centerAmount
    switch (groupsOfCards) {
        case "hand":
            // Highest card
            for (; i >= 0; i--) {
                if (hand.includes(i)) {
                    return i; // return the matching instance
                }
            }
            return false;
        case "overcards":
            // Highest card
            for (; i >= 0; i--) {
                if (overcards.includes(i)) {
                    return i; // return the matching instance
                }
            }
            return false;
        case "undercards":
            // Highest card
            for (; i >= 0; i--) {
                if (undercards.includes(i)) {
                    return i; // return the matching instance
                }
            }
            return false;
        break;
    }
}

function playCard(card, groupOfCards) {
    //PLAY CARD TO SCREEN
    let cardIndex = groupOfCards.indexOf(card)
    switch(groupsOfCards) {
        case "hand":
            hand.splice(cardIndex, 1)
            break;
        case "overcards":
            overcards.splice(cardIndex, 1)
            break;
        case "undercards":
            undercards.splice(cardIndex, 1)
            break;
    }
}

function cardNameToImage(cardName) {
const key = `${cardName[0]}-${cardName[1]}`;
const cardImages = {
  // Spades
  "1-Spades": "images/1S.png",
  "2-Spades": "images/2S.png",
  "3-Spades": "images/3S.png",
  "4-Spades": "images/4S.png",
  "5-Spades": "images/5S.png",
  "6-Spades": "images/6S.png",
  "7-Spades": "images/7S.png",
  "8-Spades": "images/8S.png",
  "9-Spades": "images/9S.png",
  "10-Spades": "images/10S.png",
  "11-Spades": "images/11S.png",
  "12-Spades": "images/12S.png",
  "13-Spades": "images/13S.png",

  // Hearts
  "1-Hearts": "images/1H.png",
  "2-Hearts": "images/2H.png",
  "3-Hearts": "images/3H.png",
  "4-Hearts": "images/4H.png",
  "5-Hearts": "images/5H.png",
  "6-Hearts": "images/6H.png",
  "7-Hearts": "images/7H.png",
  "8-Hearts": "images/8H.png",
  "9-Hearts": "images/9H.png",
  "10-Hearts": "images/10H.png",
  "11-Hearts": "images/11H.png",
  "12-Hearts": "images/12H.png",
  "13-Hearts": "images/13H.png",

  // Diamonds
  "1-Diamonds": "images/1D.png",
  "2-Diamonds": "images/2D.png",
  "3-Diamonds": "images/3D.png",
  "4-Diamonds": "images/4D.png",
  "5-Diamonds": "images/5D.png",
  "6-Diamonds": "images/6D.png",
  "7-Diamonds": "images/7D.png",
  "8-Diamonds": "images/8D.png",
  "9-Diamonds": "images/9D.png",
  "10-Diamonds": "images/10D.png",
  "11-Diamonds": "images/11D.png",
  "12-Diamonds": "images/12D.png",
  "13-Diamonds": "images/13D.png",

  // Clubs
  "1-Clubs": "images/1C.png",
  "2-Clubs": "images/2C.png",
  "3-Clubs": "images/3C.png",
  "4-Clubs": "images/4C.png",
  "5-Clubs": "images/5C.png",
  "6-Clubs": "images/6C.png",
  "7-Clubs": "images/7C.png",
  "8-Clubs": "images/8C.png",
  "9-Clubs": "images/9C.png",
  "10-Clubs": "images/10C.png",
  "11-Clubs": "images/11C.png",
  "12-Clubs": "images/12C.png",
  "13-Clubs": "images/13C.png",
}

  // return the image if found, or a "undefind" if not
  // remember to call the objects property you can use object.property or object[property] 
  return cardImages[key] || "undefined";
}


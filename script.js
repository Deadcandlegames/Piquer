let hand = [];
let lowerCards = []; //first 4 are the overcards and the last four are the undercards
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
let currentPlayer = 0; // 0 = you, 1 = opponent1, 2 = opponent2, 3 = opponent3
const debugbtn = document.getElementById("debug")
const startbtn = document.getElementById("start")
debugbtn.addEventListener("click", debug);
startbtn.addEventListener("click", start);
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
  cardsDealtPlayer = null;
  goesFirst = null;
  numberOfPlayers = parseInt(prompt("How many players?"));
  cardsDealt = Math.floor((52 - 8 * numberOfPlayers) / numberOfPlayers);
  if (numberOfPlayers === 3) {
    goesFirst = confirm("Would you like to go first?");
    if (goesFirst) {
      cardsDealtPlayer = cardsDealt + 1;
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
    default:
      alert("Error! Error Code 101");
  }
}
//clean the section of code before this up

function dealPlayer() {
  for (let i = 1; i <= cardsDealtPlayer; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    lowerCards.push(arrayName);
  }
}
function dealOpponent1() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent1Hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent1LowerCards.push(arrayName);
  }
}
function dealOpponent2() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent2Hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent2LowerCards.push(arrayName);
  }
}
function dealOpponent3() {
  for (let i = 1; i <= cardsDealt; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent3Hand.push(arrayName);
  }
  for (let i = 1; i <= 8; i++) {
    let a = randomInRange(1, deck.length);
    let arrayName = deck.splice(a, 1)[0];
    opponent3LowerCards.push(arrayName);
  }
}
function playTurn() {
  if (currentPlayer === 0) {
    // Player's turn
    // Add game logic here (update state, check win conditions, etc.)
  } else {
    // Opponent's turn (basic AI or random play)
  }
  // Check for end of game or next turn/
  // Advance to next player
  currentPlayer = (currentPlayer + 1) % numberOfPlayers;
}
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function debug() {
  let debug = prompt("Enter a keyword");
  switch (debug) {
    case "hand":
      console.log("Hand: ", hand, "Lower Cards: ", lowerCards);
      return;
    case "op1":
      console.log("Hand: ", opponent1hand, "Lower Cards: ", opponent1LowerCards);
      return;
    case "op2":
      console.log("Hand: ", opponent2hand, "Lower Cards: ", opponent2LowerCards);
      return;
    case "op3":
      console.log("Hand: ", opponent3hand, "Lower Cards: ", opponent3LowerCards);
      return;
    default:
      alert("Error! Error code 201");
  }
}

function turn(currentPlayerNumber, centercard, win) {
     if (!currentPlayerNumber = 1 && win === false) {
        if (canPlay(hand, centercard, currentPlayerNumber)) {
            playCard(highestPossible(hand, centercard), "hand")
        } else {
            if (overcards.length > undercards.length) {
                playCard(highestPossible(overcards, centercard), "overcards")
            } else {
                if (canplay(undercards, centercard, currentPlayerNumber)) {
                    playCard(undercards[0], "undercards"
                } else {
                    hand.push(centercards)
                }
            }
        }
    } else {
         //User/Player's turn
    } if (win === true) {
         //End of game
     }
}


function canPlay(groupsOfCards, centerAmount, currentPlayerNumber) {
    let i = centerAmount
    switch (currentPlayerNumber) {
        case 2:
        //opponent #1
            switch (groupsOfCards) {
                case "hand":
                    // can play
                    for (i; opponent1Hand.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case "overcards":
                    // can play
                    for (i; opponent1Overcards.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case "undercards":
                    // can play
                    for (i; opponent1Undercards.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
            }
            break;
        case 3:
        //opponent #2
            switch (groupsOfCards) {
                case "hand":
                    // can play
                    for (i; opponent2Hand.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case "overcards":
                    // can play
                    for (i; opponent2Overcards.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case "undercards":
                    // can play
                    for (i; opponent2Undercards.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
            }
            break;
        case 4:
        //opponent #3
            switch (groupsOfCards) {
                case "hand":
                    // can play
                    for (i; opponent3Hand.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case "overcards":
                    // can play
                    for (i; opponent3Overcards.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case "undercards":
                    // can play
                    for (i; opponent3Undercards.includes(i); i--) {
                        return true;
                    } else {
                        return false;
                    }
                    break;
            }
            break;
    }
}

function highestPossible(groupsOfCards, centerAmount) {
    let i = centerAmount
    swich (groupsOfCards) {
        case hand:
            // Highest card
            for (; i >= 0; i--) {
                if (hand.includes(i)) {
                    return i; // return the matching instance
                }
            }
            return false;
        case overcards:
            // Highest card
            for (; i >= 0; i--) {
                if (overcards.includes(i)) {
                    return i; // return the matching instance
                }
            }
            return false;
        case undercards:
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
    // PLAY CARD TO THE SCREEN
    let cardIndex = indexOf(card)
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
  const cardImages = {
    [1, "Spades"]: "images/AS.png",
    [2, "Spades"]: "images/2S.png",
    [3, "Spades"]: "images/3S.png",
    [4, "Spades"]: "images/4S.png",
    // ...add all cards here with [rank, suit]
  };

  // return the image if found, or a default if not
  // remember to call the objects property you can use object.property or object[property] 
  return cardImages[cardName] || "images/default.png";
}

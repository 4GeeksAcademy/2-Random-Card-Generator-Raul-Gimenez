let cardDeck = {
  "♥": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♦": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♣": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♠": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
};

function availableColors(cardDeck) {
  let availableColors = [];
  for (const colors in cardDeck) {
    if (cardDeck[colors].length == 0){
      delete cardDeck[colors];
    }
  }
  for (const keys in cardDeck) {
    availableColors.push(keys);
  }
  return availableColors;
}

function cardColor() {
  let color = availableColors(cardDeck);
  let randomNumber = Math.floor(Math.random() * color.length);
  return color[randomNumber];
}

function cardCatch(color) {
  let arrayLength = cardDeck[color].length;
  let randomCardNumber = Math.floor(Math.random() * arrayLength);
  let card = cardDeck[color].splice(randomCardNumber, 1) + color;
  return card;
}

console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));
console.log(cardCatch(cardColor()));

console.log(cardDeck);
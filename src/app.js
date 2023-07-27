let cardDeck = {
  "♥": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♦": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♣": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  "♠": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
};

const resetButton = document.querySelector("#resetButton");
const frontNumber = document.querySelector("#frontNumber");
const upAndBottomCardColor = document.querySelectorAll(
  "#upCardColor, #bottomCardColor"
);

frontNumber.innerHTML = "<p>Click to generate a random card!</p>";

function mainFunction() {
  function availableColors(cardDeck) {
    let availableColors = [];
    for (const colors in cardDeck) {
      if (cardDeck[colors].length == 0) {
        delete cardDeck[colors];
        if (Object.keys(cardDeck).length == 0) {
          cardDeck;
        }
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

  let color = cardColor();

  function cardCatch(color) {
    let arrayLength = cardDeck[color].length;
    let randomCardNumber = Math.floor(Math.random() * arrayLength);
    let card = cardDeck[color].splice(randomCardNumber, 1);
    return card;
  }

  function calculateRestOfCards(cardDeck) {
    let resultArray = [];
    let result = [];
    for (let key in cardDeck) {
      resultArray.push(cardDeck[key]);
    }
    for (let i = 0; i < resultArray.length; i++) {
      for (let j = 0; j < resultArray[i].length; j++) {
        result.push(resultArray[i][j]);
      }
    }
    return result.length - 1;
  }
  let restOfCards = `There are <i>${calculateRestOfCards(
    cardDeck
  )}</i> cards left`;

  resetButton.innerHTML = restOfCards;
  frontNumber.append(cardCatch(color));
  upAndBottomCardColor.forEach((element) => {
    element.className = color;
  });
  upAndBottomCardColor.forEach((element) => {
    return element.append(color);
  });
}

const card = document.getElementById("card");

const handleLastCard = (e) => {
  frontNumber.innerHTML = `Thats all!!
    Click to generate another deck!`;
  upAndBottomCardColor.forEach((element) => {
    element.className = "";
  });
  upAndBottomCardColor.forEach((element) => {
    return (element.innerHTML = "");
  });
};

const handleChangeCard = (e) => {
  frontNumber.innerHTML = "";
  upAndBottomCardColor.forEach((element) => {
    element.className = "";
  });
  upAndBottomCardColor.forEach((element) => {
    return (element.innerHTML = "");
  });
  mainFunction();
};

if (resetButton.textContent == " ") {
  card.removeEventListener("click", handleLastCard);
  card.addEventListener("click", (_) => location.reload());
} else if (resetButton.textContent == "There are 0 cards left") {
  card.removeEventListener("click", handleChangeCard);
  card.addEventListener("click", handleLastCard);
  resetButton.innerHTML = " ";
} else {
  card.addEventListener("click", handleChangeCard);
}

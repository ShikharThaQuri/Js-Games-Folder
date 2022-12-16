// .querySelector()
// .Math.random()
// .length
// .createElement()
// .setAttribute()
// .append()
// .getAttribute()
// alert()
// .push()
// setTimeout()
// .querySelectorAll()
// .removeEventListener()
// .textContent

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

// console.log(cardArray);

const grid = document.querySelector(".grid");
const Result = document.querySelector("#result");

function displayCards() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    grid.appendChild(card);

    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
  }
}

let chosenCard = [];
let chosenCardId = [];
let resultDisplay = [];

function iDontKnow() {
  const cards = document.querySelectorAll("img");
  optionIdOne = chosenCardId[0];
  optionIdTwo = chosenCardId[1];

  if (chosenCard[0] === chosenCard[1]) {
    cards[optionIdOne].setAttribute("src", "images/white.png");
    cards[optionIdTwo].setAttribute("src", "images/white.png");
    cards[optionIdOne].removeEventListener("click", flipCard);
    cards[optionIdTwo].removeEventListener("click", flipCard);
    resultDisplay++;
  } else {
    cards[optionIdOne].setAttribute("src", "images/blank.png");
    cards[optionIdTwo].setAttribute("src", "images/blank.png");
  }
  chosenCard = [];
  chosenCardId = [];

  Result.textContent = resultDisplay;

  if (resultDisplay === cardArray.length / 2) {
    Result.textContent = "You get all correct Answer";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  // console.log(cardId);

  chosenCard.push(cardArray[cardId].name);
  // console.log(chosenCard);

  chosenCardId.push(cardId);
  // console.log(chosenCardId);

  this.setAttribute("src", cardArray[cardId].img);
  // console.log(this);

  if (chosenCard.length === 2) {
    setTimeout(iDontKnow, 200);
  }
}

displayCards();

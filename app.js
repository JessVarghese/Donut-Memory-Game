document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
        name: 'strawberry sprinkle',
        img: 'images/strawberry_sprinkle.png'
      },
      {
        name: 'chocolate lemon sprinkle',
        img: 'images/choc_lem_sprinkle.png'
      },
      {
        name: 'chocolate mint',
        img: 'images/choc_mint.png'
      },
      {
        name: 'coffee',
        img: 'images/coffee.png'
      },
      {
        name: 'vanilla sprinkle',
        img: 'images/vanilla_sprinkle.png'
      },
      {
        name: 'raspberry sprinkle',
        img: 'images/rasp_sprinkle.png'
      },
      {
        name: 'strawberry sprinkle',
        img: 'images/strawberry_sprinkle.png'
      },
      {
        name: 'chocolate lemon sprinkle',
        img: 'images/choc_lem_sprinkle.png'
      },
      {
        name: 'chocolate mint',
        img: 'images/choc_mint.png'
      },
      {
        name: 'coffee',
        img: 'images/coffee.png'
      },
      {
        name: 'vanilla sprinkle',
        img: 'images/vanilla_sprinkle.png'
      },
      {
        name: 'raspberry sprinkle',
        img: 'images/rasp_sprinkle.png'
      }
    ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/gameon.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/gameon.png");
      cards[optionTwoId].setAttribute("src", "images/gameon.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "images/purple.png");
      cards[optionTwoId].setAttribute("src", 'images/purple.png');
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", 'images/gameon.png');
      cards[optionTwoId].setAttribute("src", 'images/gameon.png');
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

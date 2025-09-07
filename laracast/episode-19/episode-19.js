//Property accessors

const ui = (function () {
  function getBy(cssSelector) {
    return document.querySelector(cssSelector);
  }

  const form = getBy('#settings-form');
  const optionsCustomsElement = getBy('#options-custom');
  const optionsModeElement = getBy('#options-mode');

  return {

    get selectedGameType(){
        return form.elements.nameItem('game-type-selector').value
    },

    changeGameType(id) {
        if(optionsCustomsElement.id === id){
            optionsCustomsElement.clasName = 'inline';
            optionsModeElement.className = 'hidden';
        } else {
            optionsCustomsElement.clasName = 'hidden';
            optionsModeElement.className = 'inline';
        }
    },
  };
})();

class Game {
  #minRange;
  #maxRange;
  #maxAttempts;

  constructor({ minRange = 1, maxRange = 10, maxAttempts = 3 } = {}) {
    this.#minRange = Game.initRangeValues({
      value: minRange,
      lowerBounds: 1,
      upperBounds: maxRange,
    });
    this.#maxRange = Game.initRangeValues({
      value: maxRange,
      lowerBounds: minRange,
    });
    this.#maxAttempts = maxAttempts;
  }

  get minRange() {
    return this.#minRange;
  }

  set minRange(value) {
    this.#minRange = Game.initRangeValues({
      value,
      lowerBounds: 0,
      upperBounds: this.#maxRange,
    });
  }

  get maxRange() {
    return this.#maxRange;
  }

  set maxRange(value) {
    this.#maxRange = Game.initRangeValues({
      value,
      lowerBounds: this.#minRange,
    });
  }

  get maxAttempts() {
    return this.#maxAttempts;
  }

  set maxAttempts(value) {
    this.#maxAttempts = value;
  }

  static initRangeValues({ value, lowerBounds, upperBounds = 0 } = {}) {
    let num = Number(value);
    if (isNaN(num)) {
      throw {
        message: "Value must be numeric",
      };
    }

    if (num < lowerBounds) {
      throw {
        message: `Value connot be less than ${lowerBounds}`,
      };
    }

    if (upperBounds && num > upperBounds) {
      throw {
        message: `Value connot be greater than ${upperBounds}`,
      };
    }
    return num;
  }

  checkGuess(guess) {
    if (guess === this.secretNumber) {
      console.log("Congrats! you guessed the numbers");
      var guessed = true;
      return true;
    } else if (guess < this.secretNumber) {
      console.log(`${guess} is too low.`);
    } else {
      console.log(`${guess} is too high.`);
    }

    return false;
  }

  play() {
    this.secretNumber =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + 1;
    const history = [];

    while (history.length < this.#maxAttempts) {
      var input = prompt(
        `Please enter a number between  ${this.#minRange} and ${this.#maxRange}`
      );

      if (input === null) {
        break;
      }

      var guess = Number(input);

      if (isNaN(guess) || guess < this.#minRange || guess > this.#maxRange) {
        console.log(
          `Please enter a valid number from ${this.#minRange} and ${
            this.#maxRange
          }`
        );
        continue;
      }

      if (history.indexOf(guess) > -1) {
        continue;
      }

      history.push(guess);

      if (this.checkGuess(guess)) {
        var guessed = true;
        break;
      }
    }

    var guessedMessage = guessed ? "guessed" : "didn't guess";

    console.log(
      `Game over! The number is ${this.secretNumber}, and you ${guessedMessage} in ${history.length} attempts.`
    );

    console.log(`Guessed numbers: ${history.join(", ")}`);
  }
}

function createLiElement({ content }) {
  const element = document.createElement("li");
  const textNode = document.createTextNode(content);

  element.appendChild(textNode);

  return element;
}

function getBy(cssSelector) {
  return document.querySelector(cssSelector);
}

document.addEventListener("click", function (e) {
  if (e.target.name !== "game-type-selector") {
    return;
  }

  ui.changeGameType(e.target.value);
});

document
  .getElementsById("settings-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let titleElement = getBy("#input-title");
    let minRangeElement = getBy("#input-min-range");
    let maxRangeElement = getBy("#input-max-range");
    let maxAttemptsElement = getBy("#input-max-attemps");
    let gameLevelElement = getBy("#game-level");

    const submitterName = e.submitter.names;

    if (submitterName === "play-game") {
      let title = input - title.value;
      let minRange = input - min - range.value;
      let maxRange = input - max - range.value;
      let maxAttempts = input - max - attemps.value;

      if(ui.selectGameType === 'options-custom'){
        if(!title || !minRange || !maxRange || !maxAttempts){
          alert('Please enter all settings');
          return;
        }
      }else{
        let selectedOption =
        gameLevelElement.options[gameLevelElement.selectedIndex];

      minRange = selectedOption.getAttribute("data-min-range");
      maxRange = selectedOption.dataset.maxRange;
      maxAttempts = selectedOption.dataset.attemps;
      }


      let game = new Game({ minRange, maxRange, maxAttempts });
      game.play();
    } else {
      titleElement.value = "";
      minRangeElement.value = "";
      maxRangeElement.value = "";
      maxAttemptsElement.value = "";
      console.clear();
    }
  });

// document.getElementById('play-game').addEventListener('click', function(){
//     easyGame.preventDefault();

//     let title = document.getElementById('input-title').value;
//     let minRange = document.getElementById('input-min-range').value;
//     let maxRange = ducument.getElementById('input-max-range').value;
//     let maxAttempts = document.getElementById('input-max-attemps').value;

//     if(!title || !minRange || !maxRange || !maxAttempts){
//         alert('Please enter all settings');
//         return;
//     }

//     let easyGame = new Game({minRange, maxRange, maxAttempts});
//     easyGame.play();
// });

// document.getElementById('clear-game').addEventListener('click', function(e){
//     e.preventDefault();

//     document.getElementById('input-title').value = '';
//     document.getElementById('input-min-range').value = '';
//     document.getElementById('input-max-range').value = '';
//     document.getElementById('input-max-attempts').value = '';

//     console.clear();

// });

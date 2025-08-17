// Scope and Variables

var playGame = function () {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const maxAttempts = 3;

  return function () {
    let attempts = 1;
    for (attempts; attempts <= maxAttempts; attempts++) {
      var input = prompt("Please entrer a numbner between 1 and 10");
      var guess = Number(input);

      if (isNaN(guess) || guess < 1 || guess > 10) {
        console.log("Please enter a valid number from 1 and 10");
        continue;
      }

      if (guess === secretNumber) {
        console.log("Congrats! ou guessed the number!");
        var guessed = true;
        break;
      } else if (guess < secretNumber) {
        console.log(`${guess} is too low.`);
      } else {
        console.log(`${guess} is too high.`);
      }
    }

    var guessedMessage = guessed ? "guessed" : "didn't guess";

    console.log(
      `Game over! The number is ${secretNumber}, and you ${guessedMessage} in ${attempts} attempts.`
    );
  };
};

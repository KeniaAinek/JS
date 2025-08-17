//Objects

let person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    getFullName: function (){
        return `${this.firstName} ${this.lastName}`;
    }
};

const game = (function () {

    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const maxAttempts = 3;
    const history = [];

    return{
        play(){
            let guessed = false;
            while (history.length < maxAttempts) {
                var input = prompt("Please enter a number between 1 and 10");
                var guess = Number(input);

                if (isNaN(guess) || guess < 1 || guess > 10) {
                    console.log("Please enter a valid number from 1 and 10");
                    continue;
                }

                if(history.indexOf(guess) > -1){
                    continue;
                }

                history.push(guess);

                if (guess === secretNumber) {
                    console.log("Congrats! You guessed the number!");
                    guessed = true;
                    break;
                } else if (guess < secretNumber) {
                    console.log(`${guess} is too low.`);
                } else {
                    console.log(`${guess} is too high.`);
                }
            }

            var guessedMessage = guessed ? "guessed" : "didn't guess";

            console.log(
                `Game over! The number is ${secretNumber}, and you ${guessedMessage} in ${history.length} attempts.`
            );

            console.log(`Guessed numbers: ${history.join(", ")}`);
        },
        reset(){
            secretNumber = Math.floor(Math.random() * 10) + 1;
            history.length = 0;
        } 
    };
})();


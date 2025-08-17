//Objects Parameters

let person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    getFullName: function (){
        return `${this.firstName} ${this.lastName}`;
    }
};

const game = (function () {



    return{
        play(options = {}){

            if (typeof options.minRange === 'indefined'){
                options.minRange = 1;
            }
            if (typeof options.maxRange === 'indefined'){
                options.maxRange = 10;
            }
            if (typeof options.maxAttempts === 'indefined'){
                options.minRange = 3;
            }

            const minRange = options.minRange;
            const maxRange = options.maxRange;
            const maxAttempts = options.maxAttempts;

            
            const secretNumber = Math.floor(
                Math.random() * (maxRange -minRange + 1)) + 1;
            const history = [];
            
            while (history.length < maxAttempts) {
                var input = prompt("Please enter a number between 1 and 10");
                var guess = Number(input);

                if (isNaN(guess) || guess < minRange || guess > maxRange) {
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

game.play();

//Objects Cratinal Patterns

class Game {
    #minRange;
    #maxRange;
    #maxAttempts;

    constructor({minRange = 1, maxRange = 10, maxAttempts = 3} = {}){
        this.#minRange = minRange;
        this.#maxRange = maxRange;
        this.#maxAttempts = maxAttempts;
    }

     play(){
        
            const secretNumber = Math.floor(
                Math.random() * (maxRange -minRange + 1)) + 1;
            const history = [];
            
            while (history.length < this.#maxAttempts) {
                var input = prompt("Please enter a number between 1 and 10");
                var guess = Number(input);

                if (isNaN(guess) || guess < this.#minRange || guess > this.#maxRange) {
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
        }
}

//factory function
const createGame = function({minRange = 1, maxRange = 10, maxAttempts = 3} = {}){

    return{
        // minRange,
        // maxRange,
        // maxAttempts,
       
        reset(){
            secretNumber = Math.floor(Math.random() * 10) + 1;
            history.length = 0;
        } 
    };
}

let easyGame = createGame({maxAttempts: 10});
let hardGame = createGame({maxRabnge: 100, maxAttempts: 5});
let reallyHardGame = createGame({minRange: 100, maxRange: 1000, maxAttempts: 5});

let easyGame2 = new Game({maxAttempts: 10});
let hardGame2 = new Game({maxRabnge: 100, maxAttempts: 5});
let reallyHardGame2 = new Game({minRange: 100, maxRange: 1000, maxAttempts: 2});
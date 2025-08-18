//Property accessors

class Game {
    #minRange;
    #maxRange;
    #maxAttempts;

    constructor({minRange = 1, maxRange = 10, maxAttempts = 3} = {}){
        this.#minRange = Game.initRangeValues({value: minRange, lowerBounds: 1, upperBounds: maxRange});
        this.#maxRange = Game.initRangeValues({value: maxRange, lowerBounds: minRange});
        this.#maxAttempts = maxAttempts;
    }

    get minRange(){
        return this.#minRange;
    }

    set minRange(value){
        this.#minRange = Game.initRangeValues({
            value,
            lowerBounds: 0,
            upperBounds: this.#maxRange
        });
    }

    get maxRange(){
        return this.#maxRange;
    }

    set maxRange(value){
        this.#maxRange = Game.initRangeValues({
            value,
            lowerBounds: this.#minRange,
        });
    }

    get maxAttempts(){
        return this.#maxAttempts;
    }

    set maxAttempts(value){
        this.#maxAttempts = value;
    }

    static initRangeValues({value, lowerBounds, upperBounds = 0} = {}){
        let num = Number(value);
            if (isNaN(num)){
                throw{
                    message: 'Value must be numeric'
                };
            }

            if (num < lowerBounds){
                throw{
                    message: `Value connot be less than ${lowerBounds}`
                };
            }

            if (upperBounds && num > upperBounds){
                throw{
                    message: `Value connot be greater than ${upperBounds}`
                };
            }
        return num;
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
        get minRange(){
        return minRange;
    },

    set minRange(value){
        minRange = Game.initRangeValues({
            value,
            lowerBounds: 0,
            upperBounds: maxRange
        });
    },

    get maxRange(){
        return maxRange;
    },

    set maxRange(value){
        maxRange = Game.initRangeValues({
            value,
            lowerBounds: minRange,
        });
    },

    get maxAttempts(){
        return this.#maxAttempts;
    },

    set maxAttempts(value){
        maxAttempts = value;
    },
       
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


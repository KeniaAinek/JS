// Functions

//IIFE 
(function(){

    //closure
    alert(sum(1,2));

    //functions expressions
    //anonymous funcitions
    var diff = function(a, b){
        return a - b;
    };

    var multiply = (a, b) => a * b;
    var divide = (a, b) => {
        if (b === 0){
            throw new Error('b cannot be 0');
        }

        return a / b;
    };

    //functions declarations 
    function doNothing(){

    }

    function sum(a, b){
        return a + b;
    }
})();
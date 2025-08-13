// alert('Hello, World!');
function helloWorld(){
    alert('Hello, World!');
}

function sum(a, b){
    return a + b;
}

function divide(a, b){
    if (b == 0){
        throw new Error('Cannot divide by cero');
    }else{
        return a / b;
    }
}

var globalVar = 'global';
function sayHello(name){
    var message;
    message = 'Hello, ' + name;
    message.toUpperCase();
}
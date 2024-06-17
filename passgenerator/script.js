const passwordBox = document.getElementById("pass");
const createPassword = document.getElementById("generatepass");
const copyPassword = document.getElementById("copy");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbols;

createPassword.addEventListener("click", () =>{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
});

copyPassword.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
});
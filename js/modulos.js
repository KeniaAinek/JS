import saludar,{Saludar,PI, usuario} from "./constantes.js";
import{aritmetica as calculos} from "./aritmetica.js";

console.log("Archivo modulos.js");

console.log(PI, usuario);
console.log(calculos.sumar(3,7));
console.log(calculos.restar(3,7));
//saludar();
let saludo = new Saludar();
saludo;
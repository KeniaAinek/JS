// 1 funcion contadora de caracteres en una cadena
/* function caracters(cadena) {
  if(!cadena){
    console.log("La cadena esta vacia")
  }
  else{if (typeof cadena !== "string") {
    console.log(
      "Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso"
    );
    let convert = cadena.toString();
    console.info(`La cadena ${convert} tiene: ${convert.length} caracteres`);
  } else {
    
    console.info(`La cadena ${cadena} tiene: ${cadena.length} caracteres`);
  }
}
} */

const caracters = (cadena, convert = cadena.toString()) =>
  !cadena
    ? console.log("La cadena esta vacia")
    : typeof cadena !== "String"
    ? console.info(
        `Esto no es una cadena, se ha convertidoen cadena ${convert} tiene: ${convert.length} caracteres`
      )
    : console.info(`La cadena ${cadena} tiene: ${cadena.length} caracteres`);

caracters("Hola estrella Evangeline");

// 2 Funcion que recorta cadena en el total de caracteres pedido
/* function recorte(cadena, ini, rec) {
  let nCadena = "";
  if(!cadena){
    console.log("La cadena esta vacia")
  }else if (typeof cadena !== "string") {
    
    console.log(
      "Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso"
    );
    let convert = cadena.toString();
    nCadena = convert.substr(ini, rec);
    console.log(nCadena);
  } else {
    nCadena = cadena.substr(ini, rec);
    console.log(nCadena);
  }
} */
const recorte = (cadena, rec) =>
  !cadena
    ? console.log("La cadena esta vacia")
    : console.info(cadena.slice(0, rec));

recorte("Hola Kenia", 4);

// 3 separar cadena por caracter
/* function separador(cadena, sep) {
    let nCadena = "";
    if(!cadena){
      console.log("La cadena esta vacia")
    } else if (typeof cadena !== "string") {
      console.log(
        "Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso"
      );
      let convert = cadena.toString();
      nCadena = convert.split(sep);
      console.log(nCadena);
    } else {
        nCadena = cadena.split(sep);
      console.log(nCadena);
    }
} */

const separador = (cadena, sep = undefined) =>
  !cadena
    ? console.warn("La cadena esta vacia")
    : sep === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(sep));

separador("Turtle rabbit Jisoo Kim", " ");

// 4 funcion que repite texto
/* function repetir(cadena, count){
    let nCadena = "";
    if(!cadena){
      console.warn("La cadena esta vacia")
    }else if (typeof cadena !== "string") {
      console.log(
        "Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso"
      );
      let convert = cadena.toString();
      nCadena = convert.repeat(count);
      console.log(nCadena);
    } else {
      nCadena = cadena.repeat(count);
      console.log(nCadena);
    }
} */

const repetir = (cadena = "", count = undefined) =>
  !cadena
    ? console.log("La cadena esta vacia")
    : count === undefined
    ? console.warn("No ingresaste el caracter separador")
    : count === 0
    ? console.error("El numero de veces no puede ser 0")
    : Math.sign(count) === -1
    ? console.error("El numero de veces no puede ser negativo")
    : console.info(cadena.repeat(count));

repetir("Turtle rabbit Jisoo Kim", 7);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"
const reverso = (cadena) =>
  !cadena
    ? console.log("La cadena esta vacia")
    : console.info(cadena.split("").reverse().join(""));

reverso("Kenia");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2
const repetido = (cadena = "", word = "") => {
  let contador = 0;
  if (!cadena) return console.warn("La cadena esta vacia");
  if (!word) return console.warn("La cadena a buscar esta vacia");
  let nCadena = cadena.toLowerCase().split(" ");
  let comp = word.toLowerCase();
  for (const i in nCadena) {
    if (comp === nCadena[i]) contador = contador += 1;
  }

  console.log(`La cantidad de veces que ${word} se repite es ${contador}`);
};

repetido(
  "Amo el olor de las flores, el color del otoño, tu sonrisa, pero me duele el silencio entre nosotros. Me pregunto si en algun momneto se acabara ese silencio silencio silencio",
  "Silencio"
);

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const esPalindromo = (cadena) => {
  if (!cadena) console.warn("La cadena esta vacia");
  cadena = cadena.toLowerCase();
  let alReves = cadena.split("").reverse().join("");

  if (cadena === alReves) console.log(`La palabra ingresada es un palindromo.`);
  else return console.log(`La palabra ingresada no es es un palindromo.`);
};

esPalindromo("lap");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const patronRepetido = (cadena = "", patron = "") =>
  !cadena
    ? console.warn("No ingresaste texto")
    : !patron
    ? console.warn("No ingresaste un patron")
    : console.info(cadena.replace(new RegExp(patron, "ig"), ""));

patronRepetido("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = () => {
  let randomNumber = Math.round(Math.random() * (600 - 501) + 501);
  console.log(randomNumber);
};

numeroAleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true
const capicúa = (numero = 0) => {
  if (!numero) console.warn("No ha ingresado un numero para comparar");
  if (typeof numero !== "number")
    console.log(`Tu valor ${numero} NO es un numero`);
  if (Math.sign(numero) === -1) console.warn("El numero no puede ser negativo");
  let reverso = numero.toString().split("").reverse().join("");
  if (numero == reverso)
    console.log(`El numero ingresado ${numero} es capicua`);
  else console.log(`El numero ingresado ${numero} no es capicua`);
};

capicúa(2442);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (factor = 0) => {
  if (!factorial) console.warn("No ha ingresado un numero para comparar");
  if (Math.sign(factor) === -1) console.warn("El numero no puede ser negativo");
  let producto = 1;
  for (let i = factor; i > 1; i--) producto = producto * i;

  console.log(`El factorial de ${factor} es ${producto}`);
};

factorial(5);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
/* const esNumeroPrimo = (numero = undefined) =>
  {
    if(numero === undefined)
      console.log("No ha ingresado un numero");
    if(Math.sign(numero) === -1) console.warn("El numero no puede ser negativo");
    let residuo;

    for(let i = 1; i <= 9; i++)
    console.log(`El numero ${numero}  es un numero primo`);
 
  console.log(`El numero ${numero} no es un numero primo`);
  }
  esNumeroPrimo(25); */

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = (numero = undefined) =>
  {
    if(numero === undefined)
      console.log("No ha ingresado un numero");
    if(Math.sign(numero) === -1) console.warn("El numero no puede ser negativo");
    let residuo = numero%2;
    if(residuo == 0)
    console.log(`El numero ${numero} es un numero par`);
  else
  console.log(`El numero ${numero} es un numero impar`);
  }

  parImpar(7);


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertCf = (grados = 0, dis = "C") => {
  if(!grados)
   { console.warn("No ha ingresado los grados");}
  if(!dis)
   { console.warn("No ingreso el identificador de los grados");}
  if(dis === "C")
    {var far = Math.round((grados * 1.8) + 32); 
  console.log(`${grados} ${dis} son ${far} F`);}
  else
  {var cel = Math.round((grados - 32) / 1.8);
  console.log(`${grados} ${dis} son ${cel} C`);}
 }
 
 convertCf(28,"C");

 //15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


 //16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
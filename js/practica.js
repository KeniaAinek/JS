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
const esNumeroPrimo = (numero = undefined) =>
  {
    if(numero === undefined)
     return console.warn("No ha ingresado un numero");
    if(typeof numero !== "number")
      return console.warn(`El valor ${numero} ingresado, No es un numero`);
    if(numero === 0)
      console.warn("El numero no puede ser 0"); 
    if(numero === 1)
      console.warn("El numero no puede ser 1"); 
    if(Math.sign(numero) === -1) console.warn("El numero no puede ser negativo");
    let divisible = false;
    for(let i = 2; i < numero; i++){
      if(numero%i === 0){
        divisible = true;
        break;
      }
    }
    return(divisible)
    ?console.log(`El numero ${numero} no es primo`)
    :console.log(`El numero ${numero} es primo`);
  }
  esNumeroPrimo(23);

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
const convert = (numero = undefined, base = undefined) => {
  if(numero === undefined)
    return console.warn("No ha ingresado un numero");
   if(typeof numero !== "number")
     return console.warn(`El valor ${numero} ingresado, No es un numero`);
   if(base === undefined)
    return console.warn("No ha ingresado un numero");
  if(typeof base !== "number")
    return console.warn(`El valor ${base} ingresado no es un numero`);
  if (base === 2){
    return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`); 
  } else if(base === 10){
    return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`); 
  }
}
 
convert(29,10);


 //16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (monto = undefined, desc = undefined) =>{
  if(monto === undefined || desc === undefined)
    return console.warn("No ha ingresado un monto o descuento");
   if(monto === 0)
     console.warn("El monto no puede ser 0");    
   if(Math.sign(monto) === -1) console.warn("El numero no puede ser negativo");

   let montoDesc = (desc / 100) * monto;
   let total = monto - montoDesc;
   console.log(`Se aplico descuento del ${desc}% al precio ${monto} danto un total de ${total}`);
}

descuento(10000, 15);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const aniosTranscurridos = (date = undefined) => {
  if (date === undefined) console.warn("No ha ingresado una fecha");
  if (!(date instanceof Date)) console.error("El dato ingresado no es una fecha");
  
  let todayMenosFecha = new Date().getTime() - date.getTime(),
   anios = 1000 * 60 * 60 * 24 * 365
  aniosHumanos = Math.floor(todayMenosFecha / anios);

  return(Math.sign(aniosHumanos) === -1)
  ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`) : 
  (Math.sign(aniosHumanos) === 1) 
  ? console.log(`Han pasado ${aniosHumanos} años desde  ${date.getFullYear()}`)
  : console.log(`Estamos en el año actual ${fecha.getFullYear()}`)

}

aniosTranscurridos(new Date(2010,3,24));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contadorLetras = (cadena = "") =>{
  if(!cadena) 
    console.warn("No ha ingresado una cadena");
  if(cadena === "")
    console.warn("La cadena esta vacia");
  cadena = cadena.toLocaleLowerCase();
  let vocales = ['a','e','i','o','u'];
  let consonantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  let contadorVocales = 0;
  let contadorConsonantes = 0;
  for(let i = 0; i < cadena.length; i++)
    {
      for(let j = 0; j < vocales.length; j++)
        {
          if(cadena[i] === vocales[j]){
            contadorVocales += 1;
          }
        }
        for(let k = 0; k < consonantes.length; k++)
          {
            if(cadena[i] === consonantes[k]){
              contadorConsonantes += 1;
            }
      }
    }
    console.info(`La cadena ingresada contiene ${contadorVocales} vocales y ${contadorConsonantes} consonantes`);
}

contadorLetras("palindromo");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const nombreValido = (nombre = "") =>{
  if(!nombre)
    console.warn("No ha ingresado un nombre");
  if(typeof nombre !== "string")return console.warn("No ha ingresado una cadena valida");
  let patron = /^[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s\t-]=$/g.test(nombre);

  return (patron)
    ?console.log(`${nombre} es un nombre valido`)
    :console.log(`${nombre} no es un nombre valido`)
}

nombreValido("#Kenia");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const correoValido = (correo = "") =>{
  if(!correo)
    console.warn("No ha ingresado un email");
  if(typeof correo !== "string")return console.warn("No ha ingresado una cadena valida");
  let patron = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

  return (patron)
    ?console.log(`${correo} es un nombre valido`)
    :console.log(`${correo} no es un nombre valido`)
}

correoValido("Kenia@gmail.com")


//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const alCuadrado = (numeros = []) =>{
  if(numeros == "")
    console.warn("No ha ingresado una serie de numeros");
  let exponente = [];
  let exp = 0;
  for(let i = 0; i < numeros.length; i++){
    exp = Math.pow(numeros[i],2);

    exponente.push(exp);
    
  }
console.log(exponente);
}

alCuadrado([3,5,6,7]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const masAltoMasBajo = (numeros = []) =>{
  if(numeros == "")
    console.warn("No ha ingresado una serie de numeros");
  let min = Math.min(...numeros);
  let max = Math.max(...numeros);;

  console.log(`El valor menor es ${min} el valor mayor es ${max}`);
}

masAltoMasBajo([4,5,46,8,89]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresImpares = (numeros = []) =>{
  if(numeros == "")
    console.warn("No ha ingresado una serie de numeros");
  let par = [], impar = [], res = 0;
  for(let i = 0; i < numeros.length; i++){
    res = numeros[i]%2;
    if(res === 0){
      par.push(numeros[i]);
    } else
    {
      impar.push(numeros[i]);
    }
  }
console.log(`Pares: [${par}], impares: [${impar}]`);
}

paresImpares([3,5,6,7,29,12,56,34]);

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ascDes = (numeros = []) =>{
  if(numeros === 0)
    console.warn("No ha ingresado una serie de numeros");
  if(!numeros instanceof Array) return("El valor ue ingrasaste no es un arreglo");
  
  let asc = [], desc = [];
  asc = numeros.sort();
  desc = asc.reverse();

  console.log(`Asc: [${asc}], desc: [${desc}]`);
  
}

ascDes([4,5,46,8,89]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminaDuplicados = (arr = []) => {
  if(arr === 0)
    console.warn("No ha ingresado una serie de numeros");
  if(!arr instanceof Array) return("El valor ue ingrasaste no es un arreglo");
  let unicos = [], element;
  for(let i = 0; i < arr.length; i++){
    element = arr[i];
    if(!unicos.includes(arr[i])){
      unicos.push(element);
    }
  }
  console.log(unicos);
}

eliminaDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (numeros = []) => {
  if(numeros === 0)
    console.warn("No ha ingresado una serie de numeros");
  if(!numeros instanceof Array) return("El valor ue ingrasaste no es un arreglo");
  let promed = 0;
  for(let i = 0; i < numeros.length; i++){
    promed = promed + numeros[i];
  }
  promed = promed / numeros.length;
  console.log(`El promedio es de ${promed}`);
}

promedio([9,8,7,6,5,4,3,2,1,0]);


//27) Programa una clase llamada Pelicula.
class Pelicula{
  constructor(id, titulo, director, estreno, pais, generos, calificacion){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion= calificacion;
    this.validarIMBD(id);
  }


  validarCadena(propiedad, valor){
    if(!valor) return console.warn(`${propiedad}"${valor}" esta vacio`);
    if(typeof valor !== "string") return console.error(`${propiedad}"${valor}" ingresado, NO es una cadena de texto`); 
  }
  validarIMBD(id){
    
  }

  
}


const peli = new Pelicula({

})







//Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western
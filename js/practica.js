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

const caracters = (cadena,convert = cadena.toString()) => 
  (!cadena)? 
   console.log("La cadena esta vacia"): 
   (typeof cadena !== "String")?
   console.info(`Esto no es una cadena, se ha convertidoen cadena ${convert} tiene: ${convert.length} caracteres`):
   console.info(`La cadena ${cadena} tiene: ${cadena.length} caracteres`);

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
(!cadena)?
  console.log("La cadena esta vacia"):
  console.info(cadena.slice(0,rec));
  
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

const separador = (cadena, sep) =>
  (!cadena)?
    console.log("La cadena esta vacia"):
    console.info(cadena.split(sep));

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

const repetir= (cadena, count) =>
  (!cadena)?
    console.log("La cadena esta vacia"):
    console.info(cadena.repeat(count));


repetir("Turtle rabbit Jisoo Kim", 7);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"
const reverso = (cadena) =>
  (!cadena)?
  console.log("La cadena esta vacia"):
  console.info(cadena.split("").reverse().join(""));

  reverso("Kenia");

  //6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2


  //7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
  

  //8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.



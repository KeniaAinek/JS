// 1 funcion contadora de caracteres en una cadena
function caracters(cadena) {
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
}

caracters("Hola estrella Evangeline");

// 2 Funcion que recorta cadena en el total de caracteres pedido
function recorte(cadena, ini, rec) {
  //rec = rec - 1;
  let nCadena = "";
  if (typeof cadena !== "string") {
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
}

recorte("Hola Kenia", 0, 5);

// 3 separar cadena por caracter
function separador(cadena, sep) {
    let nCadena = "";
    if (typeof cadena !== "string") {
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
}

separador("Turtle rabbit Jisoo Kim", " ");

// funcion que repite texto 
function repetir(cadena, count){
    let nCadena = "";
    if (typeof cadena !== "string") {
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
}

repetir("Turtle rabbit Jisoo Kim", 7);
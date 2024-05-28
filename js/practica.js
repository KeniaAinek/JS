// 1 funcion contadora de caracteres en una cadena
function caracters(cadena) {
  let caracteres;
  if (typeof cadena !== "string") {
    console.log(
      "Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso"
    );
    let convert = cadena.toString();
    for (let i = 0; i <= convert.length; i++) {
      caracteres = i++;
    }
    console.log(`La cadena introducida tiene: ${caracteres}`);
  } else {
    for (let i = 0; i <= cadena.length; i++) {
      caracteres = i++;
    }
    console.log(`La cadena introducida tiene: ${caracteres}`);
  }
}

caracters(1994);

// 2 Funcion que recorta cadena en el total de caracteres pedido
function recorte(cadena, rec) {
  rec = rec - 1;
  let nCadena = "";
  if (typeof cadena !== "string") {
    console.log("Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso");
    let convert = cadena.toString();
    for (let i = 0; i <= rec; i++) {
        nCadena += convert[i];
    }
    console.log(nCadena);
  }
  else {
    for (let i = 0; i <= rec; i++) {
      nCadena += cadena[i];
    }
    console.log(nCadena);
  }
}

recorte(33333333, 5);

// 3 separar cadena por caracter
function separador(cadena, sep){

}

separador("Turtle rabbit Jisoo Kim", ".");
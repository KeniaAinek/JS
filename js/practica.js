//funcion contadora de caracteres en una cadena
function caracters(cadena){
    let caracteres;
    if(typeof cadena !== "string"){
        console.log("Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso");
        let convert = cadena.toString();
        for(let i = 0; i <= convert.length; i++){
            caracteres = i++;
        }
        console.log(`La cadena introducida tiene: ${caracteres}`);
    }else{
        for(let i = 0; i <= cadena.length; i++){
            caracteres = i++;
        }
        console.log(`La cadena introducida tiene: ${caracteres}`);
    }
}

caracters(1994);

//Funcion que recorta cadena en el total de caracteres pedido
function recorte(cadena, rec){
    if(typeof cadena !== "string"){
        console.log("Los caracteres que ingresaste no son de tipo cadena por lo que convertiran a cadena para hacer el proceso");
        let convert = cadena.toString();
        
        
    }else{
        const temp = "";
        const nCadena = [];
        for(let i = 0; i <= rec; i++){
            for(let j = 0; j <= rec; j++ ){  
               nCadena[j] = cadena[i]; 
               //console.log(nCadena[]);      
             }

    }
    }
}

recorte("Paraguas",5);
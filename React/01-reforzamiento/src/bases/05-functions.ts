

function greet( name: string ): string{
    return `Hola ${ name }`;
}

// const greet2 = ( name: string ):string => {
//     return `Hola ${name}`;
// }

const greet2 = (name: string) => `Hola ${name}`;

greet = function(){
    return  `Hola Persona`;
}

 const message = greet('Kenia');
 const message2 = greet2('Castro');

 console.log(message, message2);

 interface User {
        uid: string,
        username: string,
 }

  function getUser():User{
    return{
        uid: 'ABD-123',
        username: 'K.castro',
    }
 };

//  function getUser(){
//     return{
//         uid: 'ABD-123',
//         username: 'K.castro',
//     }
//  };

//  const getUser2 = () => {
//     return {
//         uid: 'ABD-123',
//         username: 'K.castro',
//     }
//  }

const getUser2 = () => ({uid: 'ABC-123', username: 'kbella'});

 const user = getUser();
 const user2 = getUser2();
 console.log(user, user2);

 const myNumbers: number [] = [1,2,3];

//  myNumbers.forEach(
//     function (value){
//         console.log({value});
//     }
//  );

myNumbers.forEach( (value) => console.log({value}));
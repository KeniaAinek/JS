//Flow Control

if (1 < 3) {

} else {

}

var value = (1 < 3) ? 'less than' : 'greater than';

var value1 = 'Hello';
 switch (value1) {
    case 'Hello':
        //do something
        break;
    case 'World':
        //do something else
        break;
    default:
        //do something default
        break;
 }

 for (var ii = 0; ii <10; ii++){
    //do something
 }

 var ii = 0;
 
 do{
    console.log(ii);
 } while (ii < 10);

 while (ii < 10){
    console.log(ii);
    ii++;
 }

 var fruits = ['apple', 'banana', 'orange'];
 for (var fruit of fruits){
   console.log(fruit);
 }


 var person = {
   firstName: 'John',
   lastName: 'Doe'
 };

 for (var prop in person){
   if(prop === 'firstName'){
      continue;
   }
   console.log(`$(prop): ${person[prop]}`);
 }
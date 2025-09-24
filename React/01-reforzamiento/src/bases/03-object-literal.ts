interface Person{
    firstName: string;
    lastname: string;
    age: number;
    address: Address;
}

interface Address{
    postalCode: string;
    city: string;
}

const spiderWoman: Person = {
    firstName: "Emma",
    lastname: "Myers",
    age: 23,
    address: {
        postalCode: 'ABC123',
        city: 'New York',
    }
}

// const spiderWoman = {
//     firstName: 'Emma',
//     lastName: 'Myers',
//     age: 23,
//     address: {
//         postalCode: 'ABC123',
//         city: 'New York',
//     }
// }

// const madameWeb = {...spiderWoman};
const madameWeb = structuredClone(spiderWoman);

// madameWeb.firstName = 'Gwen';
// madameWeb.lastName = 'Stacy';
// madameWeb.age = 23;
// madameWeb.address.city = 'San Jose';

console.log(spiderWoman, madameWeb);
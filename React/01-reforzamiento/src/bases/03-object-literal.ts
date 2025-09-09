

const spiderWoman = {
    firstName: 'Emma',
    lastName: 'Myers',
    age: 23,
}

const madameWeb = {...spiderWoman};

spiderWoman.firstName = 'Gwen';
spiderWoman.lastName = 'Stacy';
spiderWoman.age = 23;

console.log(spiderWoman, madameWeb);
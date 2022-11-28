//1.1 ///////////////////////

const character = {name: "Jack Sparrow", age: 10};

character.age = 25;

let firstname="Jon";
let lastName="Snow";
let age=24;


//1.2 /////////////////////////////////////
console.log("Soy " + firstname +" " + lastName + ", tengo " + age + " años y me gustan los lobos.")


//1.3 //////////////////////////////////////
const toy1= {name: "Buss myYear", price: 19};
const toy2= {name: "Rallo mcKing", price: 29};

let precioJuguetes = toy1.price+toy2.price;
console.log(precioJuguetes);


//1.4 ///////////////////////////////////
let globalBasePrice = 10000;

const car1 = {name : "BMW m&m", basePrice: 50000, finalPrice: 60000};
const car2 = {name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000};

globalBasePrice=25000;

car1.basePrice= car1.basePrice + globalBasePrice;
console.log(car1.basePrice)

car2.basePrice=car2.basePrice + globalBasePrice;
console.log(car2.basePrice)

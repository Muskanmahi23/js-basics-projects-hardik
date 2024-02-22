// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non primitive)

// Array, Objects, Functions


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber = 345678912356778n


const heroes = ["Shaktiman", "Naagraj","doga"];
let myobj = {

    name: "Hardik",
    age: 25,

}

const myFunction = function(){
    console.log("Hello world");
}
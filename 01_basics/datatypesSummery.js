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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory are of two types Stack(All primitive type Stack memory has used) and Heap(All non-primitive or Reference type Heap memory has used) Memory

let myYoutubename = "hardikkumardotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hardik@google.com"

console.log(userOne.email);
console.log(userTwo.email);

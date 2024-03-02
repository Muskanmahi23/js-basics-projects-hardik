// const userEmail = "h@hardik.ai"

// const userEmail = ""

// const userEmail = []


// if (userEmail) {

//     console.log("Got user Email");

// }else {
    
//     console.log("Don't have user Email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty object");
// }

// In above case Object.keys(emptyObject) this returns empty array

// ****************************************

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");
// if statement 

// if ( 2 == "2"){
//     console.log("executed");
// }    

// if ( 2 === "2"){
//     console.log("executed");
// }

// === are called strict equal it is used for checking values as well as data type of it
// <, >, <=, >=, ==, ===, !=, !==

// const temperature = 41

// if (temperature < 50) {
    
//     console.log("Temperature less than 50 :- ", temperature);
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

// if (balance > 500) console.log("test1"),console.log("test2");  this code runs but It does not have the best practices

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
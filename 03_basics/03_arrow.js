const user = {
    username: "hardik",
    price: 999,


    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

//  user.welcomeMessage()
// user.username = "Mahi"
// user.welcomeMessage()

// console.log(this); // here this refers empty object

// this refers the current context and in the browser global object is called Window object

//Inside the function we can not use this keyword  

// function chai(){

//     console.log(this);
// }

// chai()

// const chai = function () {
    
//     let username = "hardik"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    
    let username = "hardik"
    console.log(this.username);
}

// chai()

// Below code is the example of arrow function

// const addTwo = (num1, num2) => {

//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Hardik"})

console.log(addTwo(10, 10));
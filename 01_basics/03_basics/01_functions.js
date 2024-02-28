function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(5, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hardik"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){

    return num1
}
// ... is a rest operater passed in function parameter to bundle all the inputs and store them in arrays

// console.log(calculateCartPrice(200,300,500));

function calculateCartPrice(val1, val2, ...num1){

    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Hardik",
    price: 500
}

function handleObjects(anyobject){
    // console.log(typeof "Hardik");
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjects(user)
// handleObjects({
//     username: "Mahi",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 200, 400, 600]));
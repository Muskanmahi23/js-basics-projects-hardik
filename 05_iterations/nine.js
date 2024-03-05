const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "data sience course",
        price: 12999
    }

]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);
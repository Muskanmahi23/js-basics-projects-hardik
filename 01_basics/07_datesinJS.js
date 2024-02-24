// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 1, 23)

// let myCreatedDate = new Date(2024, 1, 23, 5, 3)

// let myCreatedDate = new Date("2024-02-24")
let myCreatedDate = new Date("2024-02-24")

console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})

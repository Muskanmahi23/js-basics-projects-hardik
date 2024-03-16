// ES6 (Ecma script)

// class User {
//     constructor(usename, email, password) {
//         this.usename = usename
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.usename.toUpperCase()}`
//     }
// }

// const chai = new User("hardik", "hk@yahoo.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene

function User(usename, email, password) {
    this.usename = usename
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.usename.toUpperCase()}`
}

const tea = new User("tea", "tea@yahoo.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());



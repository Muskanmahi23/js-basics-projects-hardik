// let myName = "hardik   "
// let myChannel = "chai   "

// console.log(myChannel.trueLength);

// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling", 

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// In Javascript everything is Object like function, constructor, array, string
// so In below case we set hardik in the prototype of object so it automatically presents in heropower object thats why we call them by heroPower.hardik

Object.prototype.hardik = function() {
    console.log(`hardik is present in all objects`);
}

Array.prototype.heyHardik = function() {
    console.log(`Hardik says hello`);
}

// heroPower.hardik()
// myHeros.hardik()
// myHeros.heyHardik()
// heroPower.heyHardik() // heroPower has not access of hayHardik


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode        "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

// "hardik".trueLength()
// "coffee".trueLength()







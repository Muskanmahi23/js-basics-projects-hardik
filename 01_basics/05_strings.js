const name = "hardik"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hardik-hk-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 5)
// console.log(newString);

const anotherString = gameName.slice(-8, 5)
// console.log(anotherString);

const newStringOne = "   Hardik   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hardik.com/hardik%20kumar"

// console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));
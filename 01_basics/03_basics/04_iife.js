// Immediately Invoked Function Expressions (IIFE)

// This method is used to immediate invocation or return of the function and also there might be some problem due to global scope pollution so remove this problem from the variable or variable declarations we used iife


// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

(function chai () {
    // named IFFI
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}  ) ('Hardik')
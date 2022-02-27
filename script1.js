"use strict";

function showMessage() {
    console.log("Hello world");
}

showMessage();

const calc = (a, b) => a + b; 
   

console.log(calc(4, 3));
console.log(calc(4, 5));
console.log(calc(4, 6));
console.log(calc(4, 7));
console.log(calc(4, 8));

function ret() {
    let num = 50;


    return num;
    }
    const anotherNum = ret();
    console.log(anotherNum);

    const logger = function() {
console.log("Hello");
    };
    logger();
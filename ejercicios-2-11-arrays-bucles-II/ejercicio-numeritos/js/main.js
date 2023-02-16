'use strict';

function get100Numbers() {
    const numbersArray = [];
    for (let i = 1; i <= 100; i++) {
        numbersArray.push(i);
    }
    return numbersArray;
}

const myArray = get100Numbers();

for (const finalArray of myArray) {
    console.log(finalArray)
}

/* ------------------------------------------ */

function getReversed100Numbers() {
    myArray.reverse(myArray);
}

getReversed100Numbers();

console.log(myArray);

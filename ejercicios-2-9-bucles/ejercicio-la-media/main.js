/* 

const numbers = [10, 20, 30, 40, 50, 60];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
    console.log(numbers[i]);
};

const media = acc / numbers.length;

console.log(`la media es ${media}`); 


*/



/* function average(numbers) {
    //calcular media
    let acc = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc += numbers[i];
    };
    const media = acc / numbers.length;
    //devuelve media
    return media
}; */

function average(numbers) {
    //calcular media
    let acc = 0;
    for (const number of numbers) {
        acc += number;
    };
    const media = acc / numbers.length;
    //devuelve media
    return media
};



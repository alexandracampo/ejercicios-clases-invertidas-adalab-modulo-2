//Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos


function myFirstFunction(a, b) {
    return a * b
}

console.log(myFirstFunction(2, 3));




//Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos

function mediaCalc(a, b, c, d) {
    return ((a + b + c + d) / 2)
}

console.log(mediaCalc(2, 2, 2, 2));





//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.

function parImpar(a) {
    if (a % 2 === 0) {
        return true;
    } else if (a % 2 !== 0) {
        return false;
    }
}

console.log(parImpar(8));
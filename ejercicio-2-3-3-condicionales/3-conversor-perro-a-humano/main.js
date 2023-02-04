'use strict';

/* El primer año de un perro equivale a 15 años de humano

El segundo año de un perro equivale a nueve años de humano

A partir del tercero, cada año de perro equivale a 5 años de humano. */

const doggy = 5;


if (doggy === 1) {
    console.log('Tu perrete tiene 15 años humanos');
} else if (doggy ===2) {
    console.log("Tu perrete tiene 24 años humanos")
} else {
     console.log(`Tu perrete tiene ${doggy*5} años`)
}
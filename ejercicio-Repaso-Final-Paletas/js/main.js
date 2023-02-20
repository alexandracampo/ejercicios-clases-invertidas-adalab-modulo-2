'use strict';

/* Ejercicio 1:

   1. Coger info de JSON
   2. Pintar en html nombre de la paleta
   3. Pintar los divs 
    3.1. Dónde los pinta: js-div
    3.2. Para cada color de la paleta: 
        3.2.1 crear div con style+color

    <h1></h1>
    <div class="js-div">  
    </div>


fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palette.json')
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('h1').innerHTML = data.palettes[0].name;
        for (const color of data.palettes[0].colors) {
            document.querySelector('.js-div').innerHTML += `<div class="div" style="background-color: #${color}">A</div>`
        }
    });

*/


/* Ejercicio 2:

   1. Coger info de JSON
   2. Pintar en html nombre de la paleta
   3. Pintar los divs 
    3.1. Dónde los pinta: js-div
    3.2. Para cada color de la paleta: 
        3.2.1 crear div con style+color
*/


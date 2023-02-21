'use strict';

/* Ejercicio 1 (pintar UNA paleta):

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


/* Ejercicio 2 (Pintar CINCO paletas):

   1. Coger info de JSON
   2. Pintar los 5 divs 
    2.1. Dónde los pinta: en '.js-div' (con un bucle que recorra data)
        -Pintar div que acoge cada pack-paleta
            - Pintar nombre de la paleta
            - Pintar div que acoge la paleta
            - Pintar paletas

          <div>
            <p>A</p>
            <div>
                <div>B</div>
                <div>B</div>
                <div>B</div>
                <div>B</div>
                <div>B</div>
            </div>
        </div>
*/

const divContainer = document.querySelector('.js-div');
const itemTitle = document.querySelector('.js-title-palette');
const itemDivPalettes = document.querySelector('.js-palettes');

fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
    .then((response) => response.json())
    .then((data) => {
        for (const palette of data.palettes) {
            let HTMLString = `
            <div>
            <p class="js-title-palette">${palette.name}</p>
            <div class="js-palettes">`

            for (const color of palette.colors) {
                HTMLString += `<div class="div" style="background-color: #${color}">A</div>`
            }

            HTMLString += `</div></div>`;

            divContainer.innerHTML += HTMLString
        }



    });



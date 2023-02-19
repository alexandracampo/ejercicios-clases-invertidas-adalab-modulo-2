'use strict';

// Solución 1:
// Para esta solucion, añadir en el html clases diferentes a cada botón (js-btn1) y (js-btn2):

/* const button1 = document.querySelector('.js-btn1');
const button2 = document.querySelector('.js-btn2');

function toggleButtonStyle(event) {
    event.preventDefault();
    event.target.classList.toggle('btn');
}

button1.addEventListener('click', toggleButtonStyle)
button2.addEventListener('click', toggleButtonStyle) */



// Solución 2:
const div = document.querySelector('.div')

div.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('js-btn')) {
        event.target.classList.toggle('btn');
    }

});



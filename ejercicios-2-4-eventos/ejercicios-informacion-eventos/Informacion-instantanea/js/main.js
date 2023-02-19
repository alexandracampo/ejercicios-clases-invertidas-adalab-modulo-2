'use strict';

const writeInput = document.querySelector('.js-input');
let printText = document.querySelector('.js-print');

writeInput.addEventListener('keydown', (event) => {
    printText.innerHTML = event.currentTarget.value;
});





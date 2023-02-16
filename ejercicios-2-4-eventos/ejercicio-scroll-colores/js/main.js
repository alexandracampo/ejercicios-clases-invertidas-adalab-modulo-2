'use strict';

const colorDiv = document.querySelector('.js-box');

window.addEventListener('scroll', (event) => {
    if (window.scrollY) {
        colorDiv.classList.remove('box-scroll');
    } else if (window.scrollY) {
        colorDiv.classList.remove('box')
    }
})



/* NO ME HA SALIDO, hay que indicar: "Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro." */
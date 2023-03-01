'use strict';

const windowScrolled = document.querySelector('.js-box');

window.addEventListener('scroll', handleScrollWindow);


function handleScrollWindow(ev) {
    if (window.scrollY < 250) {
        windowScrolled.classList.remove('box-scroll');
        windowScrolled.classList.add('box');
    } else {
        windowScrolled.classList.remove('box');
        windowScrolled.classList.add('box-scroll');
    }
}

/* NO ME HA SALIDO, hay que indicar: "Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro." */
'use strict'

let counter = 0;

const incrementAndShowCounter = () => {
    counter += 2;
    // counter++ suma de uno en uno
    const time = document.querySelector('.time');
    time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);

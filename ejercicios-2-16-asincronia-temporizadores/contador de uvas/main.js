'use strict'

let counter = 0;

const incrementAndShowCounter = () => {
    counter++
    const time = document.querySelector('.time');
    time.innerHTML = "🍇" + counter;
    if (counter === 12) {
        clearInterval(intervalID)
    }

};

let intervalID = setInterval(incrementAndShowCounter, 1000);
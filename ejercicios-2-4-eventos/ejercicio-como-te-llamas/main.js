const printText = document.querySelector('.js-text');

const clickButton = document.querySelector('.js-button');

clickButton.addEventListener ("click", () => {
    console.log(`Hola ${printText.value}`);
})
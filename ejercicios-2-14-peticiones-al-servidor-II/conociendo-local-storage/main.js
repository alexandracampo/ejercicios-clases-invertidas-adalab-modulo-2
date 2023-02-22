'use strict';

const showWritten = document.querySelector('.js-print');
const targetKeyup1 = document.querySelector('.js-currentTarget1');
const targetKeyup2 = document.querySelector('.js-currentTarget2');

function handleKeyUp(event) {
    const inputName = targetKeyup1.value;
    const inputSurname = targetKeyup2.value;
    const fullName = inputName + ' ' + inputSurname;
    showWritten.innerHTML = fullName;

    const savedName = {
        name: inputName,
        surname: inputSurname
    }

    localStorage.setItem('nameObject', JSON.stringify(savedName));

    /*
    localStorage.setItem('name', inputName);
    localStorage.setItem('surname', inputSurname);
    */

}

const stored = JSON.parse(localStorage.getItem('nameObject'));
if (stored) {
    targetKeyup1.value = stored.name
    targetKeyup2.value = stored.surname;
    showWritten.innerHTML = stored.name + ' ' + stored.surname;
}


/* const storedName = localStorage.getItem('name');
const storedSurname = localStorage.getItem('surname');
showWritten.innerHTML = storedName + ' ' + storedSurname; */

/* targetKeyup1.value = storedName;
targetKeyup2.value = storedSurname; */

/* Dividir strings a partir de cada caracter ' '
targetKeyup1.value = storedName.split(' ')[0];
targetKeyup2.value = storedName.split(' ')[1];
*/

targetKeyup1.addEventListener('keyup', handleKeyUp);
targetKeyup2.addEventListener('keyup', handleKeyUp);


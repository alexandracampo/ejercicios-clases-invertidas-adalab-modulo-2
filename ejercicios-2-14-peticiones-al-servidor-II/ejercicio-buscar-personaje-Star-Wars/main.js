'use strict';

const inputElement = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const printResultList = document.querySelector('.js-ul');

function getStarWarsPeople(event) {
    event.preventDefault();
    const search = inputElement.value;
    fetch(`https://swapi.py4e.com/api/people/?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
            for (const person of data.results) {
                printResultList.innerHTML += `<li> ${person.name} </li>`;
            }
        });
}

btn.addEventListener('click', getStarWarsPeople);

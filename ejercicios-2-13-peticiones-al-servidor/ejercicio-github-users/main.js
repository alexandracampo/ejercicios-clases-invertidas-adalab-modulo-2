'use strict';
// 1. capturar nombre añadido al input
// 2. meter ese nombre en la url
// 3. llamar a la api de github con ese nombre
// 4. usar datos de la respuesta para meterlos en el html

function getGithubUsers(event) {
    event.preventDefault();
    const userName = document.querySelector('.js-username').value;
    fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.js-name').innerHTML = data.name;
            document.querySelector('img').src = data.avatar_url;
            document.querySelector('.js-repos').innerHTML = data.public_repos;
        });
}

const btn = document.querySelector('.js-search');
btn.addEventListener('click', getGithubUsers);


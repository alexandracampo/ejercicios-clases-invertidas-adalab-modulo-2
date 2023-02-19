'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false },
];

//const usersWelcome = [];

/* for (let i = 0; i < users.length; i++) {
    if (users[i].isPremium === true) {
        usersWelcome.push(`Bienvenida ${users[i].name}. Gracias por confiar en nosotros.`)
    } else if (users[i].isPremium === false) {
        usersWelcome.push(`Bienvenida ${users[i].name}.`);
    }
} */

function checkPremium(user) {
    if (user.isPremium === true) {
        return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
    } else if (user.isPremium === false) {
        return `Bienvenida ${user.name}.`;
    }
}

const usersWelcome = users.map(usssser => checkPremium(usssser));

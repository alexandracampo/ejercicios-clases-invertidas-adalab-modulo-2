'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false },
];

for (let i = 0; i < length.users; i++) {
    const premiumUsers = users.filter((user) => user[i].isPremium === true);
}
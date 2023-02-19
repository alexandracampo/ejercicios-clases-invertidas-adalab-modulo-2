'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';

// avatar que eligió el usuario al registrarse
let userAvatar = 'https://cdn.pixabay.com/photo/2023/01/29/00/16/drums-7751985_960_720.jpg';


//Apartado 1:

const imgAvatar = document.querySelector('.user__avatar');
imgAvatar.src = userAvatar;

//Apartado 2:

userAvatar = '';
imgAvatar.src = userAvatar;

//Apartado 3. Si el usuario mete foto, saldrá esa foto, si no la mete, saldrá la DEFAULT AVATAR:
//prueba a meter el enlace de una foto entre las comillas de userAvatar = ''; para comprobar el código siguiente:

userAvatar || DEFAULT_AVATAR;


const wrong = document.querySelector('.error');
const titleText = document.querySelector('.title')
const textTitle = document.querySelector('.text');

/* if (wrong.classList.contains('warning')) {
    titleText.innerHTML = 'AVISO', textTitle.innerHTML = 'Tenga cuidado';
} else if (wrong.classList.contains('error')) {
    titleText.innerHTML = 'ERROR', textTitle.innerHTML = 'Ha surgido un error';
} else if (wrong.classList.contains('succes')) {
    titleText.innerHTML = 'CORRECTO', textTitle.innerHTML = 'Los datos son correctos';
} else {
    console.log('No ha realizado ninguna acción')
} */

if (wrong.classList.contains('success')) {
    titleText.innerHTML = 'CORRECTO', textTitle.innerHTML = 'Los datos son correctos';
} else if (wrong.classList.contains('warning')) {
    titleText.innerHTML = 'AVISO', textTitle.innerHTML = 'Tenga cuidado';
} else if (wrong.classList.contains('error')) {
    titleText.innerHTML = 'ERROR', textTitle.innerHTML = 'Ha surgido un error';
} else {
    console.log('Ningún estilo aplicado');
};



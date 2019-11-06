// ---------- MENÚ HAMBURGUESA ----------
   // llamamos a body para poder modificarlo
const body = document.querySelector('.body');
   // llamamos al menú
const menu = document.querySelector('.burger-menu');
   // llamamos al botón "hamburguesa"
const burgerButton = document.querySelector('.burger-button');
   // llamamos al botón "cerrar"
const closeButton = document.querySelector('#close-menu');

   // CLICK para activar las funciones  
burgerButton.addEventListener('click', show)
closeButton.addEventListener('click', hide)

   // la función ADD
function show() {
    menu.classList.add('is-active');
    body.classList.add('hideoverflow');
}
   // la función REMOVE
function hide() {
    menu.classList.remove('is-active');
    body.classList.remove('hideoverflow');
}

// ---------- AUTOPLAY RADIOBUTTONS ----------
//   var reviews = function() {
//     var i = 1;
//     while (i < 5) {
//       (function(i) {
//         setTimeout(function() {
//             document.querySelector('.slider__nav:nth-of-type'+'('+i+')').checked = true;
//         }, 2000 * i);
//       })(i++)
//     }
//   }
// reviews();

(() => {
    let i = 1;
    const timer = 2000;

    const sliderChecked = (i) => document.querySelector(`.slider__nav:nth-of-type(${i})`);

while (i <= 5) {
    setTimeout(() => {
        if (sliderChecked(i))
            sliderChecked(i).checked = true;
        else
            console.error(`El slider ${i} no existe`, sliderChecked(i));
    }, timer * i);
    ++i;
    }
});


  

  
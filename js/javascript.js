// ---------- MENÚ HAMBURGUESA Y FONDO ESTÁTICO ----------
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

// ---------- MENÚ BOTÓN "FAST QUOTE" ----------
const menufastquote = document.querySelector('.fast-quote-menu');
const fastQuoteButton = document.querySelector('.fastquote-button');
const fastQuoteButton2 = document.querySelector('.fastquote-button2');
const closeFMButton = document.querySelector('#close-fast-menu');
const bkgrblack = document.getElementById('bkgrblack');

fastQuoteButton.addEventListener('click', show2)
fastQuoteButton2.addEventListener('click', show2)
closeFMButton.addEventListener('click', hide2)

function show2() {
   menufastquote.classList.add('is-active');
   body.classList.add('hideoverflow');
   bkgrblack.classList.add('cssbkgrblack');
}
function hide2() {
   menufastquote.classList.remove('is-active');
   body.classList.remove('hideoverflow');
   bkgrblack.classList.remove('cssbkgrblack');
}

// ---------- LOAD IMAGE ----------
// var imagen = document.getElementById('id1');
// var newImg = new Image;
// newImg.onload = function() {
//     imagen.src = this.src;
// }
// newImg.src = 'http://lalostyles.com/images/lalostyles.png';

// ---------- AUTOPLAY RADIOBUTTONS ----------
// código hecho por mi hermano Eduardo Hidalgo --GRACIAS!--
(function AutomaticSlides() {
    let slideIndex = 1;
    const timer = 2000;
  
    // obtiene la cantidad total de slides. si añades un nuevo slide, no hace falta tocar el código.
    const slides = document.getElementsByClassName("slider__nav");
  
    const sliderChecked = i =>
      document.querySelector(`.slider__nav:nth-of-type(${i})`);
  
    function RecursiveSlides() {
      // si el index es igual al total de slides, resetea el index a 1, de lo contrario incrementa.
      slideIndex == slides.length ? (slideIndex = 1) : ++slideIndex;
  
      // setea el slide anterior como falso. en caso que el index sea 1, setea el último slide como false.
      if (slideIndex == 1) sliderChecked(slides.length).checked = false;
      else sliderChecked(slideIndex - 1).checked = false;
  
      // setea el siguiente slide como true
      sliderChecked(slideIndex).checked = true;
      // función recursiva
      setTimeout(RecursiveSlides, timer);
    }
  
    // ejecuta la función recursiva por primera vez
    RecursiveSlides();
  })();

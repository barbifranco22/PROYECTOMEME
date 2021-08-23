// MODO NOCTURNO

const botonClaro = document.getElementById ('modo-claro');

const botonOscuro = document.getElementById ('modo-oscuro');

function cambiarModoClaro(){
    document.body.classList.remove('switch-modo-oscuro');
    document.body.classList.add('switch-modo-claro');
};

function cambioModoOscuro(){
    document.body.classList.remove('switch-modo-claro');
    document.body.classList.add('switch-modo-oscuro');
}


//--------------- botones header 


const botonImg = document.getElementById ('btn-imagen');
const solapaImagen = document.getElementById ('solapa-imagen');
const botonTxt = document.getElementById ('btn-texto');
const solapaTexto = document.getElementById ('solapa-texto');

botonImg.addEventListener('click', () => {
  solapaImagen.style.display = 'block'
  solapaTexto.style.display = 'none';
});

botonTxt.addEventListener('click', () => {
  solapaTexto.style.display = 'block'
  solapaImagen.style.display = 'none'
});
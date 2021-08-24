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






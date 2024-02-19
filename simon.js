let serie = [];
let serieJ = [];
let score = 0;
let opciones = [1, 2, 3, 4];
let gameover = false;


function main() {
    turnoCPU();
    turnoJ();
}

function turnoCPU() {
    serie.push(opciones[Math.floor(Math.random() * 4)]);

    for (let i = 0; i < serie.length; i++) {
        setTimeout(()=>cambiarImagen(serie[i]), 500*i);
    }
}

function turnoJ() {

}

function cambiarImagen(numerin) {
    switch (numerin) {
        case 1: document.getElementById("imagen").src ="img/verde.png";
        break;
        case 2: document.getElementById("imagen").src ="img/rojo.png";
        break;
        case 3: document.getElementById("imagen").src ="img/amarillo.png";
        break;
        case 4: document.getElementById("imagen").src ="img/azul.png";
        break; 
    }
}

function neutral() {
    document.getElementById("imagen").src="img/simon.png";
}
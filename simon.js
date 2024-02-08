let serie = [];
let serieJ = [];
let score = 0;
let opciones = [1, 2, 3, 4];
let empezar = false;

while (empezar) {
    turnoCPU();
}

function empezar() {
    empezar = true;
}

function turnoCPU() {
    serie.push(opciones[Math.floor(Math.random() * 4)]);
}

function turnoJ() {

}

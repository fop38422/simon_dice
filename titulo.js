colors = new Array("green", "red", "yellow", "blue");//opciones de colores

colorIndex = 0;//numero que va a coger del array

function cambiarColor() {
 document.getElementById("titulo").style.color= colors[colorIndex]//cambia el color del h1 a uno de los valores del array
 colorIndex = (colorIndex + 1) % colors.length//sube el valor del index para que en cada ejecución use el siguiente color
};

function main() {
 setInterval("cambiarColor()", 400)//ejecuta todo lo anterior dos veces por segundo
};

window.onload = main;
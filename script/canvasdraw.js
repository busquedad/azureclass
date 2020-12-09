//
// START | Dibujar canvas
//
let texto = document.getElementById("lineasDeTexto");
let boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

let id = document.getElementById("dibujo");
let ancho = id.width;
let lienzo = id.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  let lineas = parseInt(texto.value);
  let espacio = ancho / lineas;

  for (let index = 0; index < lineas; index++) {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    let yi = espacio * index;
    let xf = espacio * (index + 1);
    dibujarLinea(color, 0, yi, xf, 300);
  }
  for (let index = 0; index < lineas; index++) {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    let xi = espacio * index;
    let yf = espacio * (index + 1);
    dibujarLinea(color, xi, 0, 300, yf);
  }
  dibujarLinea("#000000", 1, 1, 1, 299);
  dibujarLinea("#000000", 1, 299, 299, 299);
  dibujarLinea("#000000", 299, 1, 1, 1);
  dibujarLinea("#000000", 299, 1, 299, 299);
}
//
// END | Dibujar canvas
//


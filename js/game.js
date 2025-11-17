import { Serpiente } from "../models/serpiente.js";

// Referencias
const board = document.getElementById("board");
const filas = 20;
const columnas = 20;
const velocidad = 300; // milisegundos

let serpiente = new Serpiente();
let intervalo = null;


function crearTablero() {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${filas}, 1fr)`;

  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;
      board.appendChild(cell);
    }
  }
}


function dibujarSerpiente() {
  // Limpia las celdas antiguas
  document.querySelectorAll(".cell").forEach(c => c.classList.remove("snake", "head"));

  // Dibuja cada parte del cuerpo
  serpiente.cuerpo.forEach((segmento, i) => {
    const cell = document.querySelector(
      `.cell[data-x='${segmento.x}'][data-y='${segmento.y}']`
    );
    if (cell) {
      cell.classList.add("snake");
      if (i === 0) cell.classList.add("head"); // cabeza
    }
  });
}


function bucleJuego() {
  serpiente.avanzar();
  dibujarSerpiente();
}

function iniciar() {
  crearTablero();
  dibujarSerpiente();

  if (intervalo) clearInterval(intervalo);
  intervalo = setInterval(bucleJuego, velocidad);
}

// Ejecuta al cargar
iniciar();

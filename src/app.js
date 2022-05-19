/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const botonNumeros = document.getElementsByName("data-number");
const botonOperador = document.getElementsByName("data-operador");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
let resultado = document.getElementById("result");
let opeActual = "";
let opeAnt = "";
let operacion = undefined;

botonNumeros.forEach(function(boton) {
  boton.addEventListener("click", function() {
    agregarNumero(boton.innerText);
  });
});

botonOperador.forEach(function(boton) {
  boton.addEventListener("click", function() {
    selectOperacion(boton.innerText);
  });
});
botonIgual.addEventListener("click", function() {
  calcular();
  actualizarDisplay();
});
botonDelete.addEventListener("click", function() {
  clear();
  actualizarDisplay();
});
function selectOperacion(op) {
  if (opeActual === "") return;
  if (opeAnt !== "") {
    calcular();
  }
  operacion = op.toString();
  opeAnt = opeActual;
  opeActual = "";
}
function calcular() {
  let calculo;
  const anterior = parseFloat(opeAnt);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnt = "";
}
function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}
function clear() {
  opeActual = " ";
  opeAnt = " ";
  operacion = undefined;
}
function actualizarDisplay() {
  resultado.value = opeActual;
}

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//let pintas =[&#9824,&#9829,&#9827,&#9830; ]
//let seleccion = document.querySelector("#pinta1")
//pintas.innerHTML = pintas[0]
//console.log("Hello Rigo from the console!");

window.onload = () => {
  //document.querySelector(".pinta").innerHTML = randomPinta();
  document.querySelector(".pinta").innerHTML = randomPinta();
  document.querySelector(".numero").innerHTML = randomNumero();
};

let randomNumero = () => {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};

let randomPinta = () => {
  let pintas = ["&#9824", "&#9829", "&#9827", "&#9830"];
  let indexpinta = Math.floor(Math.random() * pintas.length);
  return pintas[indexpinta];
};

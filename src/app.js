import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronombres = ["el", "mi", "tu"];
const adjetivos = ["super", "grande", "rápido"];
const sustantivos = ["perro", "gato", "coche"];
const dominios = [".com", ".net", ".org"];

window.onload = () => {
  const boton = document.getElementById("boton-generar");
  const lista = document.getElementById("lista-dominios");

  boton.addEventListener("click", () => {
    // Elegir uno aleatorio de cada array
    const pron = pronombres[Math.floor(Math.random() * pronombres.length)];
    const adj = adjetivos[Math.floor(Math.random() * adjetivos.length)];
    const sust = sustantivos[Math.floor(Math.random() * sustantivos.length)];
    const dom = dominios[Math.floor(Math.random() * dominios.length)];

    const dominio = pron + adj + sust + dom;

    // Mostrarlo en la lista
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = dominio;
    lista.appendChild(li);
  });
};

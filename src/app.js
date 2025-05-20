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
    for (let pron = 0; pron < pronombres.length; pron++) {
      for (let adj = 0; adj < adjetivos.length; adj++) {
        for (let sus = 0; sus < sustantivos.length; sus++) {
          for (let dom = 0; dom < dominios.length; dom++) {
            lista.innerHTML += "<li class='list-group-item'>" + pronombres[pron] + adjetivos[adj] + sustantivos[sus] + dominios[dom] + "</li>"
          }
        }
      }
    }
  });
};

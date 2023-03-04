import { mostrarPokemon } from "./ui";
import { selecionarPagina } from "./ui";
document.querySelector("#contenedor-pokemones").onclick = mostrarPokemon;
document.querySelector("#boton-volver").onclick = selecionarPagina;
document.querySelector("#boton-siguiente").onclick = selecionarPagina;
document.querySelector("#boton-anterior").onclick = selecionarPagina;
document.querySelector("#ir-pagina").onclick = selecionarPagina;

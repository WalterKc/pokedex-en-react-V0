import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import image from "./img/pokedex2.png";
import { obtenerNumeroPaginas } from "./service/service";
import { obtenerPagina } from "./service/service";
import { mostrarPagina } from "./ui/ui";
import { useEffect } from "react";
import { NavPokedex } from "./componentes/nav";
import { mostrarPokemon } from "./ui/ui";
import { selecionarPagina } from "./ui/ui";

//bueno, aca voy pasar la pokedex a react, el codigo puro de js, asumo que va a ser , mayormente compatible
//y vamos a tener que tocar lo que se muestra, por suerte, no es muy complicado, despues de hacerla 5 veces
//se que es cada cosa.....
/* GUIA DE COMO HACER LA POKEDEX EN REACT
  Primero: importemos todo el js, a pelo, pero no lo ejecutemos, solo lo traemos (menos el index),listo
  segundo:ahora que tenemos todos, vamos a activarlo, pero de manera falsa,todo funciona, no hay que hacerle casi cambios
  pero al estar en react, el html es diferente ahora, y tenemos el nav en bootstrap tambien, por lo que tenemos
  que hacer que funcione(hay que instalarlo como hicimos anteriormente )
  acordate que el app(esta funcion de aca) es la que renderiza todo, y el html o cualquiero cosa que lo toque o cree
  tiene que estar aca o poder usarse aca, es el pto de entrada, y no hay otro
  
  primero, vamos a hacer el nav bar, creo que seria lo mas facil por que es algo idependiente,LISTO
  bueno, ahora, vamos a toquetear el resto, empecemos por la api y los servicios, que es lo mas sencillito..
  vamos a probarlo en la app, recibiendo los que entregan y imprimiendolo Listo
  encontre algo raro, veo que repite el fetch, cosa que no deveria de hacer.... creo que algun problema tiene
  
  Bueno, ahora que anda el api y el servicio, hora de meter lo importante, espero que no se complique mucho..
  //ok, esto va a ser un asco total, pero vamos a empezar a hacer programacion horizontal,no es dificil, pero
  es aburrido as f...
  primero, vamos a sacar este html tan grande, solo como test



 */
export async function inicializar() {
  mostrarPagina(await obtenerPagina(1));
}
async function test() {
  console.log(await obtenerNumeroPaginas());
}
async function test2() {
  console.log(await obtenerPagina(1));
}
function App() {
  //creo que aca va un useEffect..
  //test de la api y service

  useEffect(() => {
    inicializar();
    document.querySelector("#contenedor-pokemones").onclick = mostrarPokemon;
    document.querySelector("#boton-volver").onclick = selecionarPagina;
    document.querySelector("#boton-siguiente").onclick = selecionarPagina;
    document.querySelector("#boton-anterior").onclick = selecionarPagina;
    document.querySelector("#ir-pagina").onclick = selecionarPagina;
    //test();
    test2();
  }, []);

  return (
    <div className="App">
      <NavPokedex></NavPokedex>

      <div>
        <div id="contenedor-pokemones"></div>
        <div id="pokemon" hidden>
          <div id="datos-pokemon">
            <p id="nombre">nombre</p>
            <img className="imagen" src="" />
            <p id="tipo">tipo</p>
            <p id="habilidad">habilidad</p>
            <p id="peso">peso</p>
            <p id="altura">altura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

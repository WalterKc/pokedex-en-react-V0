import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import image from "./img/pokedex2.png";
import { obtenerNumeroPaginas } from "./service/service";
import { obtenerPagina } from "./service/service";
import { mostrarPagina, obtenerPaginasTotales } from "./ui/ui";
import { useEffect } from "react";
import { NavPokedex } from "./componentes/nav";
import { mostrarPokemon } from "./ui/ui";
import { selecionarPagina } from "./ui/ui";
import {
  checkeoPaginas,
  listaPokemones,
  obtenerPaginasTotalesM,
  testMapeo,
} from "./mapeador/pokemon";
import { paginasTotales } from "./mapeador/pokemon";

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
//NUEVOS CAMBIOS
/**
 * vamos a poner un par de cosas nuevas aca, el primero va a hacer es crear las clases de los pokemons
 * es similar a lo que hicimos antes y lo que ya haciamos en python, para hacerlo simple, vamos a sincronizarlo
 * con la api, y que, por cada pagina, guarde lo que sea adecuado, tambien tenemos que hacer que trabaje con
 * estas, de base(osea, solo carga las instacia de pokemon)
 * luego, tambien hay que hacer que tenga cache para eso, tenemos que ver localStorage
 * con eso es todo, hace eso y vas a estar(casi) en la clase 17 ya, que es otra cosa
 *
 */
//primero, vamos a crear las clases de pokemon
// NUEVO, primero vamos a hacerlo bien con seccionStorage(un array normal), y luego con el localStorage
//asi no te volves loco
/**
 * bueno, ya tenemos la mitad echo , pero desornedano y no implementado, como digimos arriba, vamos a crear un limitador
 * de objetos enviados(para que no envie datos repetidos)(ya lo tenemos, pero no esta implementado),
 * luego, vamos a enviar los datos al localStoraje, y la leerlos(en un console log basta), cuando esto este bien
 * vamos a implementar/cambiar lo que sea necesario para tener un cache como la gente.
 *
 */
//asi como esta no funciona bien, solo guarda el ultimo, hay que hacer que guarde todos...mmmmmmmmm veamos
//mmm, esto es raro, funciona asi nomas sin ponerle controlador.... asumo que sobreescribe las keys anteriores
//tiene toda la pinta, bueno, asi me sirve igualmente
//ahora, vamos a ver ,como le hacemos para integrarlo...
//ok ,ahora vamos a modificar como se cargan las cosas... vamos a ver primero como se hace , y luego a cambiarlo
//
export async function inicializar() {
  mostrarPagina(await obtenerPagina(1));
}
async function test() {
  console.log(await obtenerNumeroPaginas());
}
async function test2() {
  //console.log(await obtenerPagina(1));
  //console.log(listaPokemones);
  localStorage.setItem("miGato", "Juan");
  obtenerPaginasTotalesM(await obtenerNumeroPaginas());
  //console.log(paginasTotales);
  //checkeoPaginas();
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
    test2();

    //test();
  });

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

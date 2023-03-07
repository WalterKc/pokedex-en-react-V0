import logo from "./logo.svg";
import "./App.css";
import { obtenerPagina } from "./service/service";
import { mostrarPagina } from "./ui/ui";
import { useEffect } from "react";
import { NavPokedex } from "./componentes/nav";
import { mostrarPokemon } from "./ui/ui";
import { selecionarPagina } from "./ui/ui";

export async function inicializar() {
  mostrarPagina(await obtenerPagina(1));
}

function App() {
  useEffect(() => {
    inicializar();
    document.querySelector("#contenedor-pokemones").onclick = mostrarPokemon;
    document.querySelector("#boton-volver").onclick = selecionarPagina;
    document.querySelector("#boton-siguiente").onclick = selecionarPagina;
    document.querySelector("#boton-anterior").onclick = selecionarPagina;
    document.querySelector("#ir-pagina").onclick = selecionarPagina;
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

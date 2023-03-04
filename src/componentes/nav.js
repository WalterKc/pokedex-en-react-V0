import React from "react";
import image from "../img/pokedex2.png";

export function NavPokedex() {
  return (
    <nav className="navbar sticky-top navbar-light bg-white" id="nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="" id="nav-bar-nombre"></a>
        <img src={image} id="imagen-nav" alt="" />

        <button type="button" className="btn btn-primary" id="boton-siguiente">
          siguiente
        </button>
        <button
          type="button"
          className="btn btn-primary"
          id="boton-anterior"
          hidden
        >
          Anterior
        </button>
        <select
          className="form-select"
          aria-label="Default select example"
          id="selector-pagina"
        >
          <option selected>Seleciona Pagina</option>
        </select>
        <button type="button" className="btn btn-primary" id="ir-pagina">
          Ir
        </button>
        <button
          type="button"
          className="btn btn-primary"
          id="boton-volver"
          hidden
        >
          volver
        </button>
      </nav>
    </nav>
  );
}

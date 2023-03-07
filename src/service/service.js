import { cargarPokemon, obtenerPokemones } from "../api/api.js";
<<<<<<< Updated upstream

export async function obtenerPagina(pagina) {
  const pokemones = await obtenerPokemones(pagina);
  console.log(pokemones.results);
  return pokemones.results;
=======
import { mapearPokemon } from "../mapeador/maper.js";
import { obtenerObjetoLocalStorage } from "../storage/controlador.js";
import { guardarObjetoLocalStorage } from "../storage/controlador.js";
//
export async function obtenerPagina(pagina) {
  if (obtenerObjetoLocalStorage("Pagina " + pagina) !== null) {
    return obtenerObjetoLocalStorage("Pagina " + pagina);
  } else {
    const pokemones = await obtenerPokemones(pagina);
    guardarObjetoLocalStorage(pokemones.results, "Pagina " + pagina);
    return pokemones.results;
  }
>>>>>>> Stashed changes
}
export async function obtenerNumeroPaginas() {
  const numero = await obtenerPokemones();
  return numero.count;
}

export async function obtenerPokemon(nombre) {
<<<<<<< Updated upstream
  const pokemon = await cargarPokemon(nombre);
  return pokemon;
=======
  if (obtenerObjetoLocalStorage(nombre) !== null) {
    return obtenerObjetoLocalStorage(nombre);
  } else {
    const pokemon = await cargarPokemon(nombre);
    mapearPokemon(pokemon);

    guardarObjetoLocalStorage(
      mapearPokemon(pokemon),
      mapearPokemon(pokemon).name
    );

    return pokemon;
  }
>>>>>>> Stashed changes
}

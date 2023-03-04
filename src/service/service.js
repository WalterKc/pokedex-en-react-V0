import { cargarPokemon, obtenerPokemones } from "../api/api.js";

export async function obtenerPagina(pagina) {
  const pokemones = await obtenerPokemones(pagina);
  console.log(pokemones.results);
  return pokemones.results;
}
export async function obtenerNumeroPaginas() {
  const numero = await obtenerPokemones();
  return numero.count;
}

export async function obtenerPokemon(nombre) {
  const pokemon = await cargarPokemon(nombre);
  return pokemon;
}

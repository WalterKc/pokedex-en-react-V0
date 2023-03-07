import { cargarPokemon, obtenerPokemones } from "../api/api.js";
import {
  mapearPokemon,
  testStorage,
  testStorageV2,
} from "../mapeador/maper.js";
import { sumadorPokemones } from "../mapeador/maper.js";
import { obtenerObjetoLocalStorage } from "../storage/controlador.js";
//import { testLectorStorage } from "../mapeador/maper.js";
import { guardarObjetoLocalStorage } from "../storage/controlador.js";
let x = 0;
export async function obtenerPagina(pagina) {
  if (obtenerObjetoLocalStorage("Pagina " + pagina) !== null) {
    console.log(" KEY");
    return obtenerObjetoLocalStorage("Pagina " + pagina);
  } else {
    console.log(" NO KEY");
    const pokemones = await obtenerPokemones(pagina);
    guardarObjetoLocalStorage(pokemones.results, "Pagina " + pagina);
    console.log(pokemones.results);
    console.log(
      " LECTURA STORAGE",
      obtenerObjetoLocalStorage("Pagina " + pagina)
    );
    return pokemones.results;
  }
}
export async function obtenerNumeroPaginas() {
  const numero = await obtenerPokemones();
  return numero.count;
}

export async function obtenerPokemon(nombre) {
  if (obtenerObjetoLocalStorage(nombre) !== null) {
    console.log(" KEY OBTENER", obtenerObjetoLocalStorage(nombre));
    return obtenerObjetoLocalStorage(nombre);
  } else {
    console.log(" NO KEY", nombre);
    const pokemon = await cargarPokemon(nombre);
    console.log(" pokemon puro", pokemon);
    sumadorPokemones();
    mapearPokemon(pokemon);
    console.log(" mapearPokemon", mapearPokemon(pokemon).name);
    //console.log(" Intancias de clase de Pokemons ", mapearPokemon(pokemon));
    //localStorage.setItem("pokemons convertidos ",JSON.stringify(mapearPokemon(pokemon)));
    //console.log(" ID", mapearPokemon(pokemon).id);
    guardarObjetoLocalStorage(
      mapearPokemon(pokemon),
      mapearPokemon(pokemon).name
    );
    console.log(
      " pokemons del localStorage ",
      JSON.parse(localStorage.getItem(mapearPokemon(pokemon).name))
    );

    //localStorage.setItem("pokemon", mapearPokemon(pokemon));
    //testStorage();
    return pokemon;
  }
}

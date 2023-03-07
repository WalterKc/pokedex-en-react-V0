import { cargarPokemon, obtenerPokemones } from "../api/api.js";
import { testMapeo, testStorage, testStorageV2 } from "../mapeador/pokemon.js";
import { sumadorPokemones } from "../mapeador/pokemon.js";
import { testLectorStorage } from "../mapeador/pokemon.js";
let x = 0;
export async function obtenerPagina(pagina) {
  if (testLectorStorage("Pagina " + pagina) !== null) {
    console.log(" KEY");
    return testLectorStorage("Pagina " + pagina);
  } else {
    console.log(" NO KEY");
    const pokemones = await obtenerPokemones(pagina);
    testStorageV2(pokemones.results, "Pagina " + pagina);
    console.log(pokemones.results);
    console.log(" LECTURA STORAGE", testLectorStorage("Pagina " + pagina));
    return pokemones.results;
  }
}
export async function obtenerNumeroPaginas() {
  const numero = await obtenerPokemones();
  return numero.count;
}

export async function obtenerPokemon(nombre) {
  if (testLectorStorage(nombre) !== null) {
    console.log(" KEY OBTENER", testLectorStorage(nombre));
    return testLectorStorage(nombre);
  } else {
    console.log(" NO KEY", nombre);
    const pokemon = await cargarPokemon(nombre);
    console.log(" pokemon puro", pokemon);
    sumadorPokemones();
    testMapeo(pokemon);
    console.log(" TESTMAPEO", testMapeo(pokemon).name);
    //console.log(" Intancias de clase de Pokemons ", testMapeo(pokemon));
    //localStorage.setItem("pokemons convertidos ",JSON.stringify(testMapeo(pokemon)));
    //console.log(" ID", testMapeo(pokemon).id);
    testStorageV2(testMapeo(pokemon), testMapeo(pokemon).name);
    console.log(
      " pokemons del localStorage ",
      JSON.parse(localStorage.getItem(testMapeo(pokemon).name))
    );

    //localStorage.setItem("pokemon", testMapeo(pokemon));
    //testStorage();
    return pokemon;
  }
}

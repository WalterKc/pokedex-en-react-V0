import { obtenerPokemon } from "../service/service.js";
import { obtenerPagina } from "../service/service.js";
import { obtenerNumeroPaginas } from "../service/service.js";
import { listaPokemones } from "../mapeador/pokemon.js";
//console.log(listaPokemones);

export let PAGINA = 1;
export let PAGINAS_TOTALES = 0;
export let primeraPaginaHecha = false;
//listo
export async function mostrarPagina(pokemones) {
  //console.log(listaPokemones);
  let contenedorPokemones = document.querySelector("#contenedor-pokemones");
  if (!primeraPaginaHecha) {
    for (let i = 0; i < pokemones.length; i++) {
      const pokemon = pokemones[i];
      let div = document.createElement("div");
      let id = document.createAttribute("id");
      let clase = document.createAttribute("class");
      clase.value = "pokemon";
      id.value = pokemon.name;
      div.setAttributeNode(id);
      div.setAttributeNode(clase);
      contenedorPokemones.appendChild(div);
      div.innerHTML = pokemon.name;
      //por aca abajo, pongo las imagenes, puede estar mal planteado, asi que lo separo
      let pokemonDatos = await obtenerPokemon(pokemon.name);
      let claseImg = document.createAttribute("class");
      let img = document.createElement("img");
      let idImg = document.createAttribute("id");
      claseImg.value = "imagen";
      idImg.value = pokemon.name;
      let src = document.createAttribute("src");
      src.value = pokemonDatos.sprites.front_default;
      img.setAttributeNode(claseImg);
      img.setAttributeNode(idImg);
      img.setAttributeNode(src);
      div.appendChild(img);
    }
    //PAGINA = 1;
    primeraPaginaHecha = true;
    obtenerPaginasTotales(pokemones.length);
    console.log(PAGINA);
  } else {
    for (let i = 0; i < pokemones.length; i++) {
      const pokemon = pokemones[i];
      contenedorPokemones.querySelectorAll(".pokemon")[i].id = pokemon.name;
      contenedorPokemones.querySelectorAll(".pokemon")[i].innerText =
        pokemon.name;

      let pokemonDatos = await obtenerPokemon(pokemon.name);
      let claseImg = document.createAttribute("class");
      let img = document.createElement("img");
      let idImg = document.createAttribute("id");
      claseImg.value = "imagen";
      idImg.value = pokemon.name;
      let src = document.createAttribute("src");
      src.value = pokemonDatos.sprites.front_default;
      img.setAttributeNode(claseImg);
      img.setAttributeNode(idImg);
      img.setAttributeNode(src);
      contenedorPokemones.querySelectorAll(".pokemon")[i].appendChild(img);
    }
    console.log(PAGINA);
  }
}

export async function obtenerPaginasTotales(pokemonesPorPagina) {
  PAGINAS_TOTALES = Math.ceil(
    (await obtenerNumeroPaginas()) / pokemonesPorPagina
  );
  let paginas = document.querySelector("#selector-pagina");

  for (let i = 0; i < PAGINAS_TOTALES; i++) {
    let option = document.createElement("option");
    let id = document.createAttribute("id");
    let valueR = document.createAttribute("value");
    id.value = i + 1;
    valueR.value = i + 1;
    option.innerText = i + 1;
    option.setAttributeNode(id);
    option.setAttributeNode(valueR);
    paginas.appendChild(option);
  }

  return true;
}
//nole gusta a jest tampoco
export async function mostrarPokemon(e) {
  console.log(" TARGET", e.target.id);
  let datosPokemon = document.querySelector("#pokemon");
  const pokemon = await obtenerPokemon(e.target.id);
  datosPokemon.querySelector("#pokemon .imagen").src =
    pokemon.sprites.front_default;
  datosPokemon.querySelector("#nombre").innerHTML = pokemon.name;
  if (pokemon.types.length > 1) {
    document.querySelector("#tipo").innerHTML =
      pokemon.types[0].type.name + "/" + pokemon.types[1].type.name;
  } else {
    document.querySelector("#tipo").innerHTML = pokemon.types[0].type.name;
  }
  datosPokemon.querySelector("#peso").innerHTML = pokemon.weight / 10 + " Kg";
  datosPokemon.querySelector("#habilidad").innerHTML =
    pokemon.abilities[0].ability.name + "/" + pokemon.abilities[1].ability.name;
  datosPokemon.querySelector("#altura").innerHTML =
    pokemon.height / 10 + " Mts";
  datosPokemon.hidden = false;
  document.querySelector("#contenedor-pokemones").hidden = true;
  document.querySelector("#boton-siguiente").hidden = true;
  document.querySelector("#boton-anterior").hidden = true;
  document.querySelector("#ir-pagina").hidden = true;
  document.querySelector("#boton-volver").hidden = false;
}
//no le gusta a jest
export async function selecionarPagina(e) {
  if (e.target.id === "boton-siguiente") {
    PAGINA += 1;
    mostrarPagina(await obtenerPagina(PAGINA));
  } else if (e.target.id === "boton-anterior") {
    PAGINA -= 1;
    mostrarPagina(await obtenerPagina(PAGINA));
  } else if (Number(document.querySelector("#selector-pagina").value) > 0) {
    mostrarPagina(
      await obtenerPagina(
        Number(document.querySelector("#selector-pagina").value)
      )
    );
    PAGINA = Number(document.querySelector("#selector-pagina").value);
  }

  document.querySelector("#selector-pagina").value = PAGINA;
  if (PAGINA > 1 && PAGINA !== PAGINAS_TOTALES) {
    document.querySelector("#boton-anterior").hidden = false;
    document.querySelector("#boton-siguiente").hidden = false;
  }
  if (PAGINA === 1) {
    document.querySelector("#boton-anterior").hidden = true;
  }
  if (PAGINA === PAGINAS_TOTALES) {
    document.querySelector("#boton-siguiente").hidden = true;
    document.querySelector("#boton-anterior").hidden = false;
  } else if (PAGINA > 1) {
    document.querySelector("#boton-anterior").hidden = false;
  }
  if (e.target.id === "boton-volver") {
    document.querySelector("#contenedor-pokemones").hidden = false;
    document.querySelector("#boton-siguiente").hidden = false;
    document.querySelector("#boton-anterior").hidden = false;
    document.querySelector("#ir-pagina").hidden = false;
    document.querySelector("#boton-volver").hidden = true;
    document.querySelector("#pokemon").hidden = true;
  }
}

/* no le gusta a jest esto tampoco
document.querySelector("#contenedor-pokemones").onclick = mostrarPokemon;
document.querySelector("#boton-volver").onclick = selecionarPagina;
document.querySelector("#boton-siguiente").onclick = selecionarPagina;
document.querySelector("#boton-anterior").onclick = selecionarPagina;
document.querySelector("#ir-pagina").onclick = selecionarPagina;
*/

/**
 * @jest-environment jsdom
 */

//aca vamos a testear la ui(lo que se pueda)
//por el momento solo se puede testear una sola funcion "mostrarPagina"
//vamos a ver como le hacemos y vemos
//idea, para ver que esto funciona, solo hay que ver que hay 20 objetos con clase pokemon

import {
  mostrarPagina,
  PAGINAS_TOTALES,
  selecionarPagina,
  PAGINA,
  mostrarPokemon,
} from "../ui.js";
import { obtenerPagina } from "../../service/service.js";
import { primeraPaginaHecha } from "../ui.js";
import { obtenerPaginasTotales } from "../ui.js";

afterEach(() => {
  fetch.mockClear();
});

test("test de la ui.... a cambiar este name", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [],
        }),
    })
  );
  //let PAGINAS_TOTALES = 0;
  //let primeraPaginaHecha = false;
  console.log(primeraPaginaHecha);
  mostrarPagina(await obtenerPagina(1));
  const pokemones = document.querySelectorAll(".pokemon");
  console.log(pokemones);
  console.log(primeraPaginaHecha);

  expect(pokemones.length).not.toBeNull();
  mostrarPagina(await obtenerPagina(2));
  expect(pokemones.length).not.toBeNull();
});

test("test de paginas totales", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 1279,
        }),
    })
  );
  //

  console.log(PAGINAS_TOTALES);
  await obtenerPaginasTotales(20);

  //expect(test).toBe(true);
  console.log(obtenerPaginasTotales(20));
});

//...
//ahora vamos a explicar lo que voy entendiendo y que tengo que hacer,
//bueno, esto lo vamos a pensar de la siguiente manera, ya enemos la pagina funcionanto, y tocamos un boton
//solo vamos a ver si cambia de pagina y ya, que es lo que hace
//primero vamos a aprender a mockear solo esta funcion

/*
test("boton paginador", async () => {
  let PAGINA = 1;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [],
        }),
    })
  );
  //await mostrarPokemon(20);
  const evento = { target: { id: "bulbasaur" } };
  //console.log(evento.target.id);
  //console.log(PAGINA);
  await mostrarPokemon(evento);
  //console.log(PAGINA);
});
*/
/*
test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
*/
/*
test("test pesado , a lo bruto", async () => {
  //mostrarPagina(await obtenerPagina(1));
  //no funca, hay que hacerlo de otra manera
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          src: [],
          name: [],
          types: { type: { name: [] }, type: { name: [] } },
          weight: [],
          height: [],
          abilities: { ability: { name: [] }, ability: { name: [] } },
        }),
    })
  );
  const target = { target: { id: "bulbasaur" } };
  //const e = target;
  console.log(target.target.id);
  mostrarPokemon(target);
});
*/

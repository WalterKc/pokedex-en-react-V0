// aca vamos a mokear los test, y vamos a evitar llamar a la api
//el obtenerPagina, devuelve un array de pokemones y la url de sus datos
//obtenerNumeroPaginas devuelve un numero
//obtenerPokemon devuelve los datos de un pokemon
import { obtenerPagina } from "../service";
import { obtenerPokemon } from "../service";
import { obtenerNumeroPaginas } from "../service";
//jest.mock("../service");
beforeEach(() => {
  //obtenerPagina.mockClear();
  //obtenerPokemon.mockClear();
  //obtenerNumeroPaginas.mockClear();
  //global.fetch = jest.fn();
  //fetch.mockClear();
});
/*
test("test de los servicios, deven devolver un array , un numero, y un array", async () => {
  obtenerPagina.mockReturnValueOnce([]);
  obtenerPokemon.mockReturnValueOnce([]);
  obtenerNumeroPaginas.mockReturnValueOnce(1154);
  expect(obtenerPagina(1)).toEqual([]);
  expect(obtenerPokemon()).toEqual([]);
  expect(obtenerNumeroPaginas()).toEqual(1154);
});
*/
//const numeroTest = 19;
/*
const numeroTest = 19;
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ count: 19 }),
  })
);
*/
afterEach(() => {
  fetch.mockClear();
});

test("prueba de api REAl", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ count: 19 }),
    })
  );

  const respuesta = await obtenerNumeroPaginas();
  //console.log(respuesta);
  expect(respuesta).toEqual(19);
});

test("prueba de api2 REAL", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
  const respuesta = await obtenerPokemon("bulbasaur");
  //console.log(respuesta);
  expect(respuesta).toEqual([]);
});
test("prueba de api3 REAL", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ results: [] }),
    })
  );
  const respuesta = await obtenerPagina(1);
  //console.log(respuesta);
  expect(respuesta).toEqual([]);
});

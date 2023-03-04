import { selecionarPagina } from "../ui";
import { mostrarPokemon } from "../ui";
import { mostrarPagina } from "../ui";

/*
beforeEach(() => {
  selecionarPagina.mockClear();
  mostrarPokemon.mockClear();
});
jest.mock("../ui");
test("mokeo", async () => {
  let PaginaMock = 0;
  console.log(PaginaMock + " PAGINA");
  selecionarPagina
    .mockReturnValueOnce(PaginaMock + 1)
    .mockReturnValueOnce(PaginaMock - 1);
  expect(selecionarPagina(1)).toEqual(1);
  expect(selecionarPagina).toHaveBeenCalledTimes(1);
  expect(selecionarPagina(1)).toEqual(-1);
  expect(selecionarPagina).toHaveBeenCalledTimes(2);
  console.log(PaginaMock + " PAGINA");

  //selecionarPagina.mockImplementationOnce(() => 42);
  //selecionarPagina();
  //selecionarPagina();
  //
});
test("otro mock", async () => {
  mostrarPokemon.mockReturnValueOnce("datos");
  expect(mostrarPokemon()).toEqual("datos");
});
*/
jest.mock("../ui", () => ({
  selecionarPagina: jest.fn(),
  mostrarPokemon: jest.fn(),
  mostrarPagina: jest.fn(),
}));

test("inicializa pokedex", () => {
  selecionarPagina();
  mostrarPokemon();
  mostrarPagina();
  expect(selecionarPagina).toHaveBeenCalledTimes(1);
  expect(mostrarPokemon).toHaveBeenCalledTimes(1);
  expect(mostrarPagina).toHaveBeenCalledTimes(1);
});

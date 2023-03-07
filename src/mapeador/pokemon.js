//aca vamos a testear como se mapea, espero que no sea complicado
import { Pokemon } from "../entidades/pokemon";
import { Movimiento } from "../entidades/movimientos";
import { PAGINA } from "../ui/ui";
import { obtenerNumeroPaginas } from "../service/service";
export let paginasTotales = 0;
let paginasGuardadas = [];
let contadorPokemones = 0;
export function sumadorPokemones() {
  contadorPokemones += 1;
}

export async function obtenerPaginasTotalesM(numeroDePaginas) {
  paginasTotales = Math.ceil(numeroDePaginas / 20);
  checkeoPaginas();
}
export function checkeoPaginas() {
  for (let x = 0; x < paginasTotales; x++) {
    paginasGuardadas.push(false);
    //console.log(" valor X", x);
  }
  //console.log(" check", paginasGuardadas);
}

//obtenerPaginasTotales(await obtenerNumeroPaginas());
//console.log(await obtenerNumeroPaginas());
export let listaPokemones = [];

export function testMapeo(datosApi) {
  const {
    id,
    name: nombre,
    sprites: Imagen,
    types: tipos,
    abilities: habilidades,
    moves: movimientos,
    height: altura,
    weight: peso,
    stats: estadisticas,
    /*
    stats: {
      [0]: hp,
      [1]: ataque,
      [2]: defensa,
      [3]: ataqueEspecial,
      [4]: defensaEspecial,
      [5]: velocidad,
    },
    */
  } = datosApi;
  //console.log(datosApi);
  //console.log(paginasTotales);
  //console.log(" check", paginasGuardadas);
  console.log(contadorPokemones);
  if (contadorPokemones === 20) {
    console.log(" ES 20!!!");
    contadorPokemones = 0;
    console.log(contadorPokemones);
    console.log(" PAGINA", PAGINA);
  }
  return new Pokemon(
    id,
    nombre,
    Imagen,
    habilidades,
    tipos,
    movimientos.map(
      (item) =>
        new Movimiento(
          item.move.name,
          item.version_group_details.map((v) => v.version_group.name)
        )
    ),
    altura,
    peso,
    estadisticas
  );
}
//test de localStorage
//aca vamos a practicar un poco lo del localStorage, como guardarlo correctamente ,como llamarlo, modificarlo
//y borrarlo, lo vamos a hacer con estas frutas
const frutas = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

export function testStorage() {
  //esto es, key/nombre de lo que se quiere guardar, y lo que se quiere guardar en si
  localStorage.setItem("frutas", frutas);
  // si uno guarda las cosas asi, depiendo de que sea, puede dar problemas, como en este caso,
  //para guardar este array de objs bien, primero hay que transformalo a un formato que la maquina entienda
  //esto se hace con JSON.stringify, asi
  localStorage.setItem("frutas convertidas ", JSON.stringify(frutas));
  // para recuperarlo o sacarlo, hay que hacer casi lo mismo, hay que convertir estos datos a un formato adecuado
  //otra vez, esto se hace con JSON.parse(localStorage.getItem("key de lo que se busque"))
  //asi
  let frutasLeidasDelLocalStorage = JSON.parse(
    localStorage.getItem("frutas convertidas ")
  );
  console.log(frutasLeidasDelLocalStorage);
}
export function testStorageV2(pokemon, id) {
  return localStorage.setItem(id, JSON.stringify(pokemon));
}
//con esto, y lo de arriba, podemos guardar las cosas en el local storage, y recuperarlas, pero eso no alcanza
//para tener cache, para tenerlo hay que modificar como se cargan las cosas, primero tenemos que hacer que el
//programa carge desde el local Storage, y si no encuentra nada, carge desde la api....
//asi funcionaria todo por el local storage, ahora , hay que modificar como se cargan las cosas
//probablemente habra que usar un try catch, o algun condicional

//console.log(" Intancias de clase de Pokemons ", listaPokemones);
export function testLectorStorage(id) {
  return JSON.parse(localStorage.getItem(id));
}

//aca vamos a testear como se mapea, espero que no sea complicado
import { Pokemon } from "../entidades/pokemon";
import { Movimiento } from "../entidades/movimientos";

export function mapearPokemon(datosApi) {
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
  } = datosApi;

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

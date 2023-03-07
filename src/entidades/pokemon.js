export class Pokemon {
  constructor(
    id,
    nombre,
    imagen,
    habilidades = [],
    tipos = [],
    movimientos = [],
    altura,
    peso,
    estadisticas = []
  ) {
    this.id = id;
    this.name = nombre;
    this.sprites = imagen;
    this.abilities = habilidades;
    this.types = tipos;
    this.movimientos = movimientos;
    this.height = altura;
    this.weight = peso;
    this.stats = estadisticas;
  }
}

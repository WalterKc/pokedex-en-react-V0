export function obtenerObjetoLocalStorage(id) {
  return JSON.parse(localStorage.getItem(id));
}
export function guardarObjetoLocalStorage(pokemon, id) {
  return localStorage.setItem(id, JSON.stringify(pokemon));
}

// Debe lanzar error al tratar de modificar una propiedad
// Debe lanzar error al tratar de modificar una propiedad anidada
// Debe lanzar error al tratar de agregar una propiedad
// Debe lanzar error al tratar de borrar una propiedad

export function deepFreeze(obj) {
  // Tu código aquí 👈
  if (typeof obj === 'object') {
    Object.freeze(obj);

    for (let key in obj) {
      deepFreeze(obj[key]);
    }
  }
}

const edson = {
  name: 'Edson',
  age: 18,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(edson));
// console.log(Object.getOwnPropertyNames(edson));
// console.log(Object.entries(edson));

Object.defineProperty(edson, 'pruebaNASA', {
  value: 'extraterrestres',
  enumerable: false, // no permite listar usando el método Object.keys
  writable: false, // no permite modificar
  configurable: false, // no permite eliminar
});

Object.defineProperty(edson, 'navigator', {
  value: 'Firefox',
  enumerable: false,
  writable: true,
  configurable: true,
});

Object.defineProperty(edson, 'editor', {
  value: 'VSCode',
  enumerable: true,
  writable: false,
  configurable: true,
});

Object.defineProperty(edson, 'terminal', {
  value: 'Terminator',
  enumerable: true,
  writable: true,
  configurable: false,
});

Object.seal(edson); // hace que todas las propiedades tengan configurable: false evitando la posibilidad de eliminarlas
Object.freeze(edson); // asigna configurable: false y writable: false evitando la posibilidad de modificar y eliminar

console.log(Object.getOwnPropertyDescriptors(edson));
console.log(edson);

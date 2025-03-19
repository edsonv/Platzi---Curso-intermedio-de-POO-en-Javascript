const edson = {
  name: 'Edson',
  age: 18,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

console.log(Object.keys(edson));
console.log(Object.getOwnPropertyNames(edson));
// console.log(Object.entries(edson));
console.log(Object.getOwnPropertyDescriptors(edson));

Object.defineProperty(edson, 'pruebaNASA', {
  value: 'extraterrestres',
  enumerable: true,
  writable: true,
  configurable: true,
});

console.log(edson);

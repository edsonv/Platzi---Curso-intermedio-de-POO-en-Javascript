class Patito {
  static sonidito = 'cuak!';
  static hacerSonidito() {
    return 'cuak!';
  }
}

console.log(Patito.sonidito); // cuak!
console.log(Patito.hacerSonidito()); // cuak!

const objetito = {
  name: 'Edson',
  email: 'edson@email.com',
  age: 18,
};

const keys = Object.keys(objetito);
console.log(keys); // ["name", "email", "age"]

const properties = Object.getOwnPropertyNames(objetito);
console.log(properties); // ["name", "email", "age"]

const entries = Object.entries(objetito);
console.log(entries);
/* 
[
  ['name', 'Edson'],
  ['email', 'edson@email.com'],
  ['age', 18],
]; 
*/

const descriptors = Object.getOwnPropertyDescriptors(objetito);
console.log(descriptors);
/* 
{
  name: {
    value: 'Edson',
    writable: true,
    enumerable: true,
    configurable: true
  },
  email: {
    value: 'edson@email.com',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 18, writable: true, enumerable: true, configurable: true }
}
 */

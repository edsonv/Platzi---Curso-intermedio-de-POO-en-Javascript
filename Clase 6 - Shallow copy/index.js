const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
  },
};

const obj2 = {};

for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

console.log(obj1);
console.log(obj2);

obj2.a = 'aaaaaaa';
console.log(obj2);

obj1.b = 'BBBBBBB';

console.log(obj1);
console.log(obj2);

obj1.c.d = 'DDDDDD';

console.log(obj1);
console.log(obj2);

const obj3 = Object.assign({}, obj1);
obj1.c.d = 'Copia';

console.log(obj3);

const obj4 = Object.create(obj1);

console.log('Objeto 4 prototype', obj4.__proto__);

console.log('Podemos acceder al prototipo', obj4.a);
obj4.a = 'AAAAAAAA';
obj4.c.d = 'DDDDDD';
console.log('Objeto 4', obj4);
console.log('Objeto 1', obj1);

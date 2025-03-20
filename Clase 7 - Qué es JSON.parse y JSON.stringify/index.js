const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
  },
};

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj2);

obj1.a = 'AAAAAAA';
obj1.c.d = 'DDDDDD';

console.log(obj2);

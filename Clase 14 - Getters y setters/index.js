function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function createStudent({
  name = requiredParam('name'),

  age,
  email = requiredParam('email'),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length != 0) {
        private._name = newName;
      } else {
        console.warn('Debe tener al menos un caracter');
      }
    },
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };

  return public;
}

const edson = createStudent({
  name: 'Edson',
  age: 37,
  email: 'email@edson.com',
  twitter: 'edsonv',
});

console.log(edson.name);
edson.name = 'Edson J.';
console.log(edson);
const properties = Object.getOwnPropertyDescriptors(edson);
console.log(properties);

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
    changeName(newName) {
      private._name = newName;
    },
    readName() {
      return private._name;
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
  Object.defineProperty(public, 'readName', {
    configurable: false,
    writable: false,
  });

  return public;
}

const edson = createStudent({
  name: 'Edson',
  age: 37,
  email: 'email@edson.com',
  twitter: 'edsonv',
});

edson.changeName('Edson J.');
console.log(edson);

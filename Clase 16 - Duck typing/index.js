function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function isArray(subject) {
  return Array.isArray(subject);
}

function createLearningPath({ name = requiredParam('name'), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
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
    get courses() {
      return private._courses;
    },
  };
  return public;
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
    _learningPaths: learningPaths,
  };

  const public = {
    age,
    email,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
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
    get learningPaths() {
      return private._learningPaths;
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn('Tu LP no tiene la propiedad nombre');
        return;
      }

      if (!newLP.courses) {
        console.warn('Tu LP no tiene cursos');
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn('Tu LP no es una lista de cursos');
        return;
      }

      private._learningPaths.push(newLP);
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

edson.learningPaths = { name: 'Escuela de desarrollo web', courses: [] };
console.log(edson.learningPaths);

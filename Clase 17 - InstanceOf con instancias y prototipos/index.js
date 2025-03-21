function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function isArray(subject) {
  return Array.isArray(subject);
}

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name;
  this.courses = courses;
  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };

  // const public = {
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn('Debe tener al menos un caracter');
  //     }
  //   },
  //   get courses() {
  //     return private._courses;
  //   },
  // };
  // return public;
}

function Student({
  name = requiredParam('name'),
  age,
  email = requiredParam('email'),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  if (isArray(learningPaths)) {
    this.learningPaths = [];
    for (let learningPath in learningPaths) {
      if (learningPaths[learningPath] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPath]);
      }
    }
  }

  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // };
  // const public = {
  //   age,
  //   email,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn('Debe tener al menos un caracter');
  //     }
  //   },
  //   get learningPaths() {
  //     return private._learningPaths;
  //   },
  //   set learningPaths(newLP) {
  //     if (!newLP.name) {
  //       console.warn('Tu LP no tiene la propiedad nombre');
  //       return;
  //     }
  //     if (!newLP.courses) {
  //       console.warn('Tu LP no tiene cursos');
  //       return;
  //     }
  //     if (!isArray(newLP.courses)) {
  //       console.warn('Tu LP no es una lista de cursos');
  //       return;
  //     }
  //     private._learningPaths.push(newLP);
  //   },
  // };
  // return public;
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de desarrollo web',
  courses: [],
});

const escuelaData = new LearningPath({
  name: 'Escuela de ciencia de datos',
  courses: [],
});

const edson = new Student({
  name: 'Edson',
  email: 'email@edson.com',
  learningPaths: [escuelaWeb, escuelaData],
});

console.log(edson instanceof Student);

console.log(edson);

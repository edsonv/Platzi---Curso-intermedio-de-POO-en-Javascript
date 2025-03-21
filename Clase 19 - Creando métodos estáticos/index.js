function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function isArray(subject) {
  return Array.isArray(subject);
}

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name;
  this.courses = courses;
}

function SuperObject() {}

SuperObject.isObject = function (subject) {
  return typeof subject === 'object';
};

SuperObject.deepCopy = function (subject) {
  let copySubject;
  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
};

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

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, 'learningPaths', {
    get() {
      return private._learningPaths;
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private._learningPaths.push(newLP);
      } else {
        console.warn('Alguno de los LPs no es una instancia de LearningPath');
      }
    },
  });

  for (let learningPath in learningPaths) {
    this.learningPaths = learningPaths[learningPath];
  }
}

Student.prototype.learningPaths;

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

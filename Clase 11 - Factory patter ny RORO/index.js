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
  return {
    name,
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
}

const edson = createStudent({
  name: 'Edson',
  age: 37,
  email: 'email@edson.com',
  twitter: 'edsonv',
});

console.log(edson);

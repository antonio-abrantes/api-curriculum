
module.exports = {
	Query: {
    allUsers: async (root, data, {mongo : {Users}}) => {
      return await Users.find({}).toArray();
    },
    allCourses: async (root, data, {mongo : {Courses}}) => {
      return await Courses.find({}).toArray();
    }
  },
  Mutation: {
    createUser: async (root, data, {mongo: {Users}}) => {
      const newUser = {
          nome: data.nome,
          email: data.email,
      };
      const response = await Users.insert(newUser);
      return Object.assign({id: response.insertedIds[0]}, newUser);
    },
    createCourse: async (root, data, {mongo : {Courses}}) =>{
      const newCourse = {
        nome: data.nome,
        dataInicio: data.dataInicio,
        dataFim: data.dataFim, 
    };
      const response = await Courses.insert(newCourse);
      return Object.assign({id: response.insertedIds[0]}, newCourse);
    },
    signinUser: async (root, data, {mongo: {Users}}) => {
        const user = await Users.findOne({email: data.email.email});
        if (data.email.password === user.password) {
          return {token: `token-${user.email}`, user};
        }
    }
  },
  User: {
    id: root => root._id || root.id
  },
  Course: {
    id: root => root._id || root.id
  }
}
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `

type User{
	id: ID
	nome: String!
	email: String
}

type Course{
	id: ID
	nome: String!
	dataInicio: String
	dataFim: String!
}

type Query{
	allUsers: [User!]!
	allCourses: [Course!]!
}

type Mutation{
	createUser(nome: String!, email: String): User
	createCourse(nome: String!, dataInicio: String, dataFim: String!) : Course
	signinUser(email: AUTH_PROVIDER_EMAIL): SigninPayload!
}

input meusCursos{
	cursos: MEUS_CURSOS
}

input MEUS_CURSOS{
	nome: String!
	dataInicio: String
	dataFim: String!
}

type SigninPayload {
    token: String
    user: User
}

input AuthProviderSignupData {
    email: AUTH_PROVIDER_EMAIL
}

input AUTH_PROVIDER_EMAIL {
    email: String!
    password: String!
}

`;

module.exports = makeExecutableSchema({typeDefs, resolvers});

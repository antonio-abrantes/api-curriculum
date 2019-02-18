const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema');
const connectMongo = require('./db-connect'); 
const PORT = 3000; 

const start = async () =>{
	const mongo = await connectMongo();
	var app = express();

	app.get('/', function(req, res){
		const api = {
			name: "api-curriculum",
			version: "1.0.0"
		}
		res.send(api);
	})

	app.use('/graphql', bodyParser.json(), graphqlExpress({
		context: {mongo},
		schema
	}));

	app.use('/graphiql', graphiqlExpress({
		endpointURL: '/graphql'
	}))

	app.listen(PORT, () => {
		console.log(`server running on ${PORT}`);
	})
}

start();
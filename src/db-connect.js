const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/';
//const MONGO_URL = 'mongodb+srv://<USER>:<PASSWORD>@api-graphql-80elx.mongodb.net/api-posts?retryWrites=true';
const DB_NAME = 'api-curriculum';

module.exports = async () => {
	const connection = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
	var db = connection.db(DB_NAME);

	return {
		Users: db.collection('users'),
		Courses: db.collection('courses')
	}
}
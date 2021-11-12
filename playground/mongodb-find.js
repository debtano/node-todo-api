const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo server');
  }

  console.log('Connected to Mongo server');
  const db = client.db('TodoApp');

  db.collection('Users').find({
    // _id: new ObjectID('618eb9d686a3e6c6a7f3f278')
    name: 'Hernan'
  }).toArray().then((docs) => {
    // console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch docs', err);
  });
});

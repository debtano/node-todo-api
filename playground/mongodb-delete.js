const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo server');
  }

  console.log('Connected to Mongo server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndDelete({_id: new ObjectID("618ed1046e0205e781ad91ff")}).then((result) => {
    console.log(result);
  }, (err) => {});

});

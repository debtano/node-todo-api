const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo server');
  }

  console.log('Connected to Mongo server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("618ed0ff2e8e2de77e41d6e4")
  }, {
    $inc: {age: 1}
  }).then((result) => {
    console.log(result);
  });
});

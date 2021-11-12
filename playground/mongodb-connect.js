const { MongoClient, ObjectID } = require('mongodb');

// let user = {name: 'andrew', age: 25};
// let {name} = user;
// console.log(name);
let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo server');
  }
  console.log('Connected to Mongo server');

  const db = client.db('TodoApp');
  db.collection('Users').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // Insert new doc
      name: 'Hernan',
      age: 51,
      location: 'Villa Gesell'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }

      console.log(result.ops[0]._id.getTimestamp());
    });
  client.close();
});

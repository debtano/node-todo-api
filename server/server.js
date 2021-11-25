const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(4000, () => {
  console.log('Started on port 4000');
});

// const newUser = new User({
//   email: 'hantoli@amazon.com'
// });
//
// newUser.save().then((user) => {
//   console.log(JSON.stringify(user));
// }, (e) => {
//   console.log('Unable to create user', e);
// });

// let newTodo = new Todo({
//   text: 'Cook dinner'
// });

// const otherTodo = new Todo({
//   text : 'Something to do',
//   // completed: true,
//   // completedAt: 123
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(
//     doc, undefined, 2
//   ));
// }, (e) => {
//   console.log('Unable to save', e);
// });

// newTodo.save().then((doc) => {
//   console.log('Saved doc ', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

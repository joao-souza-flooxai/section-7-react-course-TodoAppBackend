const Todo = require("./todoModel");

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;
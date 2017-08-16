//Required from controllers/index.js file
const todosController = require('./../controllers').todos;
const todoItemsController = require('./../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);//create todo
  app.get('/api/todos', todosController.list);//list todos
  app.get('/api/todos/:todoId', todosController.retrieve);//geta single todo
  app.post('/api/todos/:todoId/items', todoItemsController.create);//create todo item
  app.put('/api/todos/:todoId', todosController.update);//update todo
  app.delete('/api/todos/:todoId', todosController.destroy);//delete todo.
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);//update todoItem
};
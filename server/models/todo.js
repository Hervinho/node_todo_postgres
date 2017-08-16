'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {// associations can be defined here
        // 1-to-many relationship between Todo and TodoItem
        Todo.hasMany(models.TodoItem, {
          foreignKey: 'todoId',
          as: 'todoItems',//every time we query for a todo and include it's todo items, under todoItems
        })
      }
    }
  });
  return Todo;
};
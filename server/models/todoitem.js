'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {type: DataTypes.STRING, allowNull: false},
    todoId: {type: DataTypes.INTEGER, allowNull: false},
    complete: {type: DataTypes.BOOLEAN, defaultValue: false}
  }, {
    classMethods: {
      associate: (models) => {// associations can be defined here
        //1-to-1 relationship between TodoItem and Todo
        TodoItem.belongsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE',//when deleting a todo, its associated todo items will be also deleted.
        });
        
      }
    }
  });
  return TodoItem;
};
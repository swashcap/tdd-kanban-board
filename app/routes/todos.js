import Ember from 'ember';
import Todo from 'tdd-kanban-board/models/todo';

export default Ember.Route.extend({
  model: function () {
    var todos = [];

    return $.getJSON('/api/todos').then(function (response) {
      response.forEach(function (data) {
        todos.pushObject(Todo.create(data));
      });

      return todos;
    });
  }
});

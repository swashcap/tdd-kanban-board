import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'tdd-kanban-board/tests/helpers/start-app';

var application;

module('Acceptance: Assignment', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /assignment', function(assert) {
  visit('/');

  andThen(function() {
    var unassigned = find('.unassigned .cards');
    assert.equal(unassigned.length, 3);
    var project = find('.unassigned .cards:eq(0) .todo_project');

    assert.equal(project.text(), 'first');
  });
});

test('assigned items are grouped together', function(assert) {
  visit('/');

  andThen(function() {
    var assigned = find('.assigned .cards');
    assert.equal(assigned.length, 1);
  });
});

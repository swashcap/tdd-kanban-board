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
    var unassigned = find('table.unassigned tr.cards');
    assert.equal(unassigned.length, 3);
  });
});

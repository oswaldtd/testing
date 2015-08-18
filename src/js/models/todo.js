import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

let TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  toggle: function() {
    this.set({
      completed: !this.get('completed')
    });
  }
});

export default TodoModel;

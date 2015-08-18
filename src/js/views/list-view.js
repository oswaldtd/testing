import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

import TodoView from './todo-view';

let ListView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'change:completed', this.filterOne);
    this.listenTo(this.collection, 'filter', this.filterAll);
  },

  filterAll: function(filter) {
    this.filter = filter;
    this.collection.each(this.filterOne, this);
  },

  filterOne: function(todo) {
    console.log('called', todo);
    todo.trigger('visible', this.filter);
  },

  addAll: function() {
    this.$el.html('');

    this.collection.each(function(todo) {
      this.addOne(todo);
    }, this);
  },

  addOne: function(todo){
    var view = new TodoView({model: todo});
    this.$el.append(view.render().el);

  },

  render: function() {
    return this;
  }
});

export default ListView;

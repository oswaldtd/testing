import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

import TodosCollection from '../collections/todos';
import AddView from '../views/add-view';
import ListView from '../views/list-view';
import FooterView from '../views/footer-view';

let AppView = Backbone.View.extend({
  el: '#todo-app',

  initialize: function() {
    var todos = new TodosCollection();
    this.addView = new AddView({
      collection: todos
    });
    this.listView = new ListView({
      collection: todos
    });

    this.footerView = new FooterView();
  },

  render: function() {
    this.addView.render();
    this.listView.render();
    this.footerView.render();

    this.$('header').append(this.addView.el);
    this.$('main').html(this.listView.el);
    this.$('footer').html(this.footerView.el);
  }
});


export default new AppView();

import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

import AppView from '../views/app-view';

let TodoRouter = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: function(param) {
    console.log('param', param);
    AppView.listView.collection.trigger('filter', param);
  }
});

export default new TodoRouter();

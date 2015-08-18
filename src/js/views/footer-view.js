import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

let html = `
  <span id="todo-count"><strong>0</strong> items</span>
  <ul id="filters">
    <li>
      <a href="#/">All</a>
    </li>
    <li>
      <a href="#/active">Active</a>
    </li>

    <li>
      <a href="#/completed">Completed</a>
    </li>
  </ul>

  <button id="clear-completed">Clear Completed</button>
`;

let FooterView = Backbone.View.extend({
  template: _.template(html),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

export default FooterView;

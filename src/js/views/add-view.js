import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';


let html = `
  <input id="new-todo" placeholder="What needs to be done?" autofocus>
`;

let AddView = Backbone.View.extend({
  template: _.template(html),

  events: {
    'keypress #new-todo': 'onEnterPress'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  onEnterPress: function(event) {
    var ENTER_KEY = 13;

    // Listens for the enter key to be pressed
    if (event.keyCode === ENTER_KEY) {
      var $input = this.$('#new-todo');
      var text = $input.val();

      // Reset the text
      $input.val('');

      // Add the new model to the todos collection
      this.collection.add({
        title: text
      });
    }
  }
});

export default AddView;

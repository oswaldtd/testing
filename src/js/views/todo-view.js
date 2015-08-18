import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

let html = `
  <div class="view">
    <input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
    <label><%- title %></label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="<%- title %>">
`;
let TodoView = Backbone.View.extend({
  template: _.template(html),

  tagName: 'li',

  events: {
    'click .toggle': 'onToggle',
    'click .destroy': 'onDestroy',
    'dblclick label': 'onEdit',
    'blur .edit': 'onClose',
    'keydown .edit': 'onEscape',
    'keyup .edit': 'onEnter'
  },

  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onToggle: function() {
    this.model.toggle();
  },

  onDestroy: function(event){
    if (confirm('Are you sure you want to delete ' + this.model.get('title') + '?')) {
      this.model.destroy();
    }
  },

  onEdit: function(){
    this.$el.addClass('editing');
  },

  onClose: function(){
    var $edit = this.$('.edit');
    var title = $edit.val();
    var trimmedTitle = title.trim();

    if (trimmedTitle) {
      this.model.set({
        title: trimmedTitle
      });

      $edit.val(this.model.get('title'));
    } else {
      this.onDestroy();
    }

    this.$el.removeClass('editing');
  },

  onEscape: function(event){
    var ESC_KEY = 27;
    if (event.keyCode === ESC_KEY) {
      var $edit = $(event.target);
      $edit.val(this.model.get('title'));
      this.onClose();
    }
  },

  onEnter: function(event){
    var ENTER_KEY = 13;

    if (event.keyCode === ENTER_KEY) {
      this.onClose();
    }
  },

  toggleVisible: function(filter){
    console.log('called togglevisible');
    this.$el.toggleClass('hidden', this.isHidden(filter));
  },

  isHidden: function(filter){
    if (this.model.get('completed')) {
        return filter === 'active' // true or false
    }

    return filter === 'completed';
  }
});

export default TodoView;

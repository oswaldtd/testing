import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

import TodoModel from '../models/todo';

let TodosCollection = Backbone.Collection.extend({
  model: TodoModel
});

export default TodosCollection;

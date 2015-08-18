import jQuery from 'jquery';
import $ from 'jquery';
import {_} from 'underscore';

import TodoCollection from '../../src/js/collections/todos';
import TodoModel from '../../src/js/models/todo';
import TodoView from '../../src/js/views/todo-view';

  describe('TodoView', function(){
    beforeEach(function(){
      this.model = new TodoModel();

      this.view = new TodoView({
        model: this.model
      });

      this.view.render();
    });

    it('toggle should be run when box in checked', function() {
      let input = $('.toggle');
      spyOn(input, 'toggle');
      let x = jQuery.Event('click');

      input.toggle(x);

      expect(input.toggle).toHaveBeenCalled();
    });

    it('should destroy when clicked', function() {
      let input = $('destroy');
      (input, 'destroy');
      let x = jQuery.Event('click');

      input.trigger(x)

      expect(input.destroy).toHaveBeenCalled();
    });
});

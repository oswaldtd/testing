import jQuery from 'jquery';
import {_} from 'underscore';

import TodoCollection from '../../src/js/collections/todos';
import ListView from '../../src/js/views/list-view';
import TodoModel from '../../src/js/models/todo';

describe('ListView', function(){
  beforeEach(function(){
    this.collection = new TodoCollection();

    this.view = new ListView({
      collection: this.collection
    });

    this.view.render();
  });

  it('should render a single TodoView', function(){
    let title = 'Will heals from surgery';
    let model = new TodoModel({
      title: title
    });

    this.view.addOne(model);

    expect(this.view.$('.view').length).toEqual(1);
    expect(this.view.$('.view label').text()).toEqual(title);
  });

  it('should call addOne() and render a single TodoView when add event is called on the collection', function(){
    let title = 'Will heals from surgery';
    this.collection.add({
      title: title
    });

    expect(this.view.$('.view').length).toEqual(1);
    expect(this.view.$('.view label').text()).toEqual(title);
  });

  it('addAll() should render a TodoView for every TodoModel in the collection', function(){
    let title = 'Will heals from surgery';
    let title2 = 'and give him some pain meds, too';

    this.collection.set(
      [
        {
          title: title
        },

        {
          title: title2
        }
      ]
    );

    this.view.addAll();

    expect(this.view.$('.view').length).toEqual(2);
    expect(this.view.$('.view label')[0].innerText).toEqual(title);
    expect(this.view.$('.view label')[1].innerText).toEqual(title2);
  });

  it('should filter items based on their completed status', function(){
    this.collection.set(
      [
        {title: 'abc', completed: false},
        {title: 'def', completed: true}
      ]
    );

    this.collection.filter('active');
    expect(this.view.$('.toggle:checked').length).toEqual(1);

    this.collection.filter('completed');
    expect(this.view.$('.toggle:checked').length).toEqual(1);
  });
});

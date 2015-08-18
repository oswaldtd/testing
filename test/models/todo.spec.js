import {_} from 'underscore';

import TodoModel from '../../src/js/models/todo';

describe('TodoModel', function(){
  beforeEach(function(){
    this.model = new TodoModel();
  });

  it('should have the proper default values', function(){
    expect(this.model.get('title')).toEqual('');
    expect(this.model.get('completed')).toEqual(false);
  });

  it('should have only set the defined default values', function(){
    let defaults = _.keys(this.model.defaults);

    expect(defaults).toEqual(['title', 'completed']);
  });

  it('toggle() should toggle the completed value', function(){
    expect(this.model.get('completed')).toEqual(false);
    this.model.toggle();
    expect(this.model.get('completed')).toEqual(true);
    this.model.toggle();
    expect(this.model.get('completed')).toEqual(false);
  });
});

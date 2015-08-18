import $ from 'jquery';
import {_} from 'underscore';
import Backbone from 'backbone';

import Router from './routers/router';
import AppView from './views/app-view';

AppView.render();
Backbone.history.start();

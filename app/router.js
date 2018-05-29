import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('goal');
  this.route('problem', function() {
    this.route('features');
    this.route('maintainable');
    this.route('ui-button');
  });
  this.route('approach', function() {
    this.route('theming');
    this.route('variant');
    this.route('blueprint');
    this.route('layouts');
    this.route('ui-section');
  });
  this.route('demo', function() {
    this.route('ui-form');
    this.route('ui-select-date');
    this.route('ui-modal');
    this.route('ui-popover');
    this.route('ui-other');
  });
});

export default Router;

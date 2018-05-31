import Route from "@ember/routing/route";
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  order: [
    'index',
    'goal',
    'problem.index',
    'problem.features',
    'problem.maintainable',
    'approach.index',
    'approach.overview',
    'approach.blueprints',
    'approach.variants',
    'problem.in-practice',
    'problem.ui-button',
    'approach.layouts-pre',
    'approach.layouts',
    'approach.layouts-code',
    'approach.maintainable',
    'demo.validation',
    'demo.ui-form',
    'demo.ui-modal',
    'demo.ui-popover',
    'demo.ui-other',
    'thanks',
    'index'
  ],

  keyUp(event) {
    const current = this.get('router.currentRouteName');
    const order = this.get('order');
    const currentIndex = order.indexOf(current);

    // Right
    if (event.which === 39 && event.shiftKey) {
      let currentController = this.controllerFor(current);
      let next = order[currentIndex + 1];

      if (currentController.get('stage') < currentController.get('maxStage')) {
        currentController.incrementProperty('stage');

      } else {
        this.get('router').transitionTo(next);
      }
    }

    // Left
    if (event.which === 37 && event.shiftKey) {
      let currentController = this.controllerFor(current);
      let previous = order[currentIndex - 1];

      if (currentController.get('stage') > 1) {
        currentController.decrementProperty('stage');

      } else {
        this.get('router').transitionTo(previous);
      }
    }
  },

  init() {
    this._super(...arguments);
    this.keyUp = this.keyUp.bind(this);
    document.body.addEventListener('keyup', this.keyUp, true);
  }
});

import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  router: service(),

  order: [
    'index',
    'problem.features',
    'problem.ui-button',
    'approach.theming',
    'approach.variant',
    'approach.blueprint',
    'approach.layouts',
    'approach.ui-section',
    'demo.ui-form',
    'demo.ui-select-date',
    'demo.ui-modal',
    'demo.ui-popover',
    'demo.ui-other'
  ],

  keyUp(event) {
    const current = this.get('router.currentRouteName');
    const order = this.get('order');
    const currentIndex = order.indexOf(current);

    // Right
    if (event.which === 39) {
      this.get('router').transitionTo(order[currentIndex + 1]);
    }

    // Left
    if (event.which === 37) {
      this.get('router').transitionTo(order[currentIndex - 1]);
    }
  },

  init() {
    this._super(...arguments);
    this.keyUp = this.keyUp.bind(this);
    document.body.addEventListener('keyup', this.keyUp, true);
  }
});

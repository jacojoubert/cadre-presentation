import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  controls: service(),

  init() {
    this.get('controls');
  }
});

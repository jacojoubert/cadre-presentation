import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  select: null,

  submit: task(function * () {
    yield timeout(2000);
    this.transitionToRoute('demo.ui-select-date');
  })
});

import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({
  queryParams: ['stage'],
  stage: 1,
  maxStage: 2,

  select: null,
  locale: 'en-CA',

  continue: true,

  submit: task(function * () {
    this.toggleProperty('continue')
    yield timeout(500);

    if (this.get('continue')) {
      this.transitionToRoute('demo.ui-modal');

    } else {
      throw new Error('This is a server error message');
    }
  })
});

import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['stage'],
  stage: 1,
  maxStage: 4
});

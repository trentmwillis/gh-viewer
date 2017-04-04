import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  queryParams: [ 'error' ],
  actions: {
    clearError() {
      this.set('error', undefined);
    }
  }
});

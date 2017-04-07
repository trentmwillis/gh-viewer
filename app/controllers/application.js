import Ember from 'ember';

const {
  Controller,
  computed,
  inject: {
    service
  }
} = Ember;

export default Controller.extend({
  messageManager: service('message-manager'),
  error: computed.readOnly('messageManager.message'),
  actions: {
    clearError() {
      this.get('messageManager').clearMessage();
    }
  }
});

import Ember from 'ember';

const {
  Service,
  computed
} = Ember;

/**
 * A simple service to control displaying messages to the user.
 * All mutation of the message should go through the setMessage and clearMessage
 * methods so that it is obvious where changes occur.
 * Reading is done through the public property 'message'.
 */
export default Service.extend({
  _message: undefined,

  setMessage(message) {
    let messageType = typeof message;
    if (messageType !== 'string') {
      throw new TypeError(`Expected message to be a string but was ${messageType}`);
    }

    this.set('_message', message);
  },

  clearMessage() {
    this.set('_message', undefined);
  },

  message: computed.readOnly('_message')
});

import Ember from 'ember';
import fetchFromGithub from '../utilities/fetch-from-github';

const {
  Route,
  inject: {
    service
  }
} = Ember;

export default Route.extend({
  messageManager: service('message-manager'),

  model(params) {
    return fetchFromGithub(`orgs/${params.orgName}`);
  },

  redirect(model, transition) {
    if (transition.targetName === 'org.index') {
      this.replaceWith('org.repos');
    }
  },

  actions: {
    error() {
      let { orgName } = this.paramsFor('org');
      this.get('messageManager').setMessage(`Could not find organization ${orgName}`);
      this.transitionTo('index');
    }
  }
});

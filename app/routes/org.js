import Ember from 'ember';
import fetchFromGithub from '../utilities/fetch-from-github';

export default Ember.Route.extend({
  model(params) {
    return fetchFromGithub(`orgs/${params.orgName}`);
  },

  redirect(model, transition) {
    if (transition.targetName === 'org.index') {
      this.replaceWith('org.repos');
    }
  }
});

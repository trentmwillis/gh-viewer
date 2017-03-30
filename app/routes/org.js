import Ember from 'ember';
import fetchFromGithub from '../utilities/fetch-from-github';

export default Ember.Route.extend({
  model(params) {
    return fetchFromGithub(`orgs/${params.orgName}`);
  },

  redirect() {
    this.replaceWith('org.repos');
  }
});

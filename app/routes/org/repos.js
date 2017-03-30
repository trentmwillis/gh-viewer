import Ember from 'ember';
import fetchFromGithub from '../../utilities/fetch-from-github';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org');
    return fetchFromGithub(`orgs/${org.login}/repos`);
  }
});

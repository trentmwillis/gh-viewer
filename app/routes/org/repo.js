import Ember from 'ember';
import fetchFromGithub from '../../utilities/fetch-from-github';

const {
  Route,
  inject: {
    service
  }
} = Ember;

export default Route.extend({
  messageManager: service('message-manager'),

  model(params) {
    let org = this.modelFor('org');
    let repo = fetchFromGithub(`repos/${org.login}/${params.repoName}`);
    let commits = fetchFromGithub(`repos/${org.login}/${params.repoName}/commits`);
    return Ember.RSVP.hash({ repo, commits }).then(hash => ({ org, repo: hash.repo, commits: hash.commits }));
  },

  actions: {
    error() {
      let { orgName } = this.paramsFor('org');
      let { repoName } = this.paramsFor('org.repo');
      this.get('messageManager').setMessage(`Could not load repo ${orgName}/${repoName}`);
      return this.replaceWith('org.repos', orgName);
    }
  }
});

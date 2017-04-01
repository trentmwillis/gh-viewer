import Ember from 'ember';
import fetchFromGithub from '../../utilities/fetch-from-github';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');
    let repo = fetchFromGithub(`repos/${org.login}/${params.repoName}`);
    let commits = fetchFromGithub(`repos/${org.login}/${params.repoName}/commits`);
    return Ember.RSVP.hash({ repo, commits }).then(hash => ({ org, repo: hash.repo, commits: hash.commits }));
  }
});

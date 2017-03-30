import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  actions: {
    orgSubmitted(event) {
      event.preventDefault();

      let githubOrgInput = event.target.querySelector('#github-org');
      let orgName = githubOrgInput.value.toLowerCase();
      this.transitionToRoute('org', { orgName });
    }
  }
});

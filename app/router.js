import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('org', { path: '/organization/:org_name' }, function() {
    this.route('repos');
  });

  this.route('repo', { path: '/repo/:repo_name' }, function() {
    this.route('commit', { path: '/commit/:sha' });
  });
});

export default Router;

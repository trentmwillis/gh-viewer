import { test } from 'qunit';
import moduleForAcceptance from 'gh-viewer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main');

test('home search transitions to org repos page successfully', function(assert) {
  visit('/');
  fillIn('#github-org', 'emberjs');
  triggerEvent('#github-org-search', 'submit');
  andThen(() => {
    assert.equal(currentPath(), 'org.repos', 'on repos page');
    assert.equal(find('.repo-row').length, 8, 'all repos rendered in list');
    assert.equal(find('.org-link')[0].href, 'https://github.com/emberjs', 'renders link to org on github');
  });
  click('.repo-link');
  andThen(() => {
    assert.equal(currentPath(), 'org.repo.index', 'repo name linked to repo page');
    assert.equal(find('.commit-row').length, 1, 'all repos rendered in list');
    assert.equal(find('.repo-link')[0].href, 'https://github.com/emberjs/ember.js', 'renders link to repo on github');
  });
});

test('home search displays error for orgs that are not found', function(assert) {
  visit('/');
  fillIn('#github-org', 'does-not-exist');
  triggerEvent('#github-org-search', 'submit');
  andThen(() => {
    assert.equal(currentPath(), 'index');
    assert.equal(find('#error-modal').length, 1);
  });
  click('#error-modal .dismiss');
  andThen(() => {
    assert.equal(currentPath(), 'index');
    assert.equal(find('#error-modal').length, 0);
  })
});

// TODO: Make these assertions more resilient
test('repos are sorted according to column', function(assert) {
  visit('/organization/emberjs/repos');
  andThen(() => {
    assert.equal(find('.repo-row > .repo-name > a').text(), 'ember.jsdataember-inspectorwebsiterfcsguidesember-qunitember-test-helpers');
  });

  click('.toggle-stars');
  andThen(() => {
    assert.equal(find('.repo-row > .repo-name > a').text(), 'ember-test-helpersember-qunitguidesrfcswebsiteember-inspectordataember.js');
  });

  click('.toggle-forks');
  andThen(() => {
    assert.equal(find('.repo-row > .repo-name > a').text(), 'ember.jswebsitedataguidesember-inspectorrfcsember-qunitember-test-helpers');
  });

  click('.toggle-forks');
  andThen(() => {
    assert.equal(find('.repo-row > .repo-name > a').text(), 'ember-test-helpersember-qunitrfcsember-inspectorguidesdatawebsiteember.js');
  });

  click('.toggle-stars');
  andThen(() => {
    assert.equal(find('.repo-row > .repo-name > a').text(), 'ember.jsdataember-inspectorwebsiterfcsguidesember-qunitember-test-helpers');
  });
});

test('clicking on repo name takes you to repo page with commits', function(assert) {
  visit('/organization/emberjs/repos');
  click('.repo-row > .repo-name > a');
  andThen(() => {
    assert.equal(currentPath(), 'org.repo.index');
  });
});

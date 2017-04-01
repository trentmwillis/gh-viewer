import { test } from 'qunit';
import moduleForAcceptance from 'gh-viewer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main');

test('home search transitions to org repos page successfully', function(assert) {
  visit('/');
  fillIn('#github-org', 'emberjs');
  triggerEvent('#github-org-search', 'submit');
  andThen(() => {
    assert.equal(currentPath(), 'org.repos');
  });
});

test('home search transitions to org repos page with error', function(assert) {
  visit('/');
  fillIn('#github-org', 'does-not-exist');
  triggerEvent('#github-org-search', 'submit');
  andThen(() => {
    assert.equal(currentPath(), 'org.error');
  });
});

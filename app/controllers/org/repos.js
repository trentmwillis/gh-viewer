import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  sortBy: 'stargazers_count',
  sortAscending: true,
  sortedRepos: computed('model.repos', 'sortBy', 'sortAscending', function() {
    let sortBy = this.get('sortBy');
    let sortAscending = this.get('sortAscending')
    return this.get('model.repos').sort((a, b) => {
      if (sortAscending) {
        return a[sortBy] < b[sortBy];
      } else {
        return a[sortBy] > b[sortBy];
      }
    });
  }).readOnly(),

  actions: {
    toggleSort(prop) {
      if (this.get('sortBy') !== prop) {
        this.set('sortBy', prop);
        this.set('sortAscending', true);
      } else {
        this.toggleProperty('sortAscending');
      }
    }
  }
});

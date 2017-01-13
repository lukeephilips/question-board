import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: false,
  actions: {
    toggleForm(){
      this.toggleProperty('showUpdate');
    },
    updateQuestion(question){
      var params = {
      content: this.get('content'),
      author: this.get('author'),
      notes: this.get('notes')
      }
      this.sendAction('updateQuestion', question, params);
      this.toggleProperty('showUpdate');
    }
  }
});

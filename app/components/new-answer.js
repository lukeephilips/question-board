import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    toggleForm() {
      this.toggleProperty('addNewAnswer');
    },
    saveAnswer(){
      var params = {
        content: this.get('content') ? this.get('content'): "",
        author: this.get('author') ? this.get('author'): "",
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.toggleProperty('addNewAnswer');
    },
  }
});

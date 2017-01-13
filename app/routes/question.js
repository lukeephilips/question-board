import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
});

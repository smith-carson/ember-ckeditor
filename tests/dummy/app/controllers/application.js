import Controller from '@ember/controller'

export default Controller.extend({
  text: "Hello world",

  actions: {
    textChanged(newValue) {
      this.set('text', newValue);
    }
  }
})

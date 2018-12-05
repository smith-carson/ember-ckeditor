import Controller from '@ember/controller'

export default Controller.extend({
  text: "Hello world",

  ckEditorConfig: {
    extraPlugins: 'find,pagebreak,font,colorbutton,justify,lineheight'

  },

  actions: {
    textChanged(newValue) {
      this.set('text', newValue);
    }
  }
})

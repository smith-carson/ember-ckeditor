import Controller from '@ember/controller'
import { computed } from '@ember/object'

export default Controller.extend({
  text: "Hello world",

  ckEditorConfig: computed(function() {
    return {
      extraPlugins: 'find,pagebreak,font,colorbutton,justify,lineheight'
    }
  }),

  actions: {
    textChanged(newValue) {
      this.set('text', newValue);
    }
  }
})

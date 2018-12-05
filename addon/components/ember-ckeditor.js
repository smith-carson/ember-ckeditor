/* globals CKEDITOR */
import Component from '@ember/component'
import layout from '../templates/components/ember-ckeditor';
import lineheight from 'ember-ckeditor/utils/lineheight';

export default Component.extend({
  layout: layout,

  _editor: null,
  'on-change': null,

  config: null,

  didInsertElement() {
    let config = this.get('config') || {};
    let textarea = this.element.querySelector('.editor');
    let editor = this._editor = CKEDITOR.replace(textarea,config);
    editor.on('change', (e) => {
      this.set('value',e.editor.getData());
      this.get('on-change')(e.editor.getData());
    });
  },

  willDestroyElement() {
    this._editor.destroy();
    this._editor = null;
  }
});

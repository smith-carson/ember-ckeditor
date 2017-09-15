/* eslint-env node */
'use strict';
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ckeditor',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ckeditor/ckeditor.js');
  },

  contentFor: function(type, config) {
    if (type === 'head') {
      return `<script>window.CKEDITOR_BASEPATH = '${config.rootURL}assets/ckeditor/';</script>`;
    }
  },

  treeForPublic: function(tree) {
    return new Funnel(this.project.bowerDirectory + '/ckeditor', {
      srcDir: '/',
      // include: ['**/*.woff', '**/stylesheet.css'],
      destDir: '/assets/ckeditor'
    });
  }
};

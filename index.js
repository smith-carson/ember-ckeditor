/* eslint-env node */
'use strict';
var Funnel = require('broccoli-funnel');

const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const mergeTrees = require('broccoli-merge-trees');
const stew = require('broccoli-stew');
const path = require('path');

const map = stew.map;

module.exports = {
  name: 'ember-ckeditor',

  included: function(app) {
    this._super.included(app);

    let ckeditorPath = path.dirname(require.resolve('ckeditor'));
    this.ckeditorNode = new UnwatchedDir(ckeditorPath);
    app.import('vendor/ckeditor/ckeditor.js');
  },

  contentFor: function(type, config) {
    if (type === 'head') {
      return `<script>window.CKEDITOR_BASEPATH = '${config.rootURL}assets/ckeditor/';</script>`;
    }
  },

  treeForPublic: function(tree) {
    let trees = [];
    trees.push(
      Funnel(this.ckeditorNode, {
        srcDir: '/',
        destDir: '/assets/ckeditor'
      })
    );
    return mergeTrees(trees);

  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(
      Funnel(this.ckeditorNode, {
        srcDir: '/',
        include: ['ckeditor.js'],
        destDir: 'ckeditor',
      }))

    return map(mergeTrees(trees), (content) => `${content}`)
  }
};

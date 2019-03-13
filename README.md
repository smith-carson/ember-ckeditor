# Ember-ckeditor

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Latest NPM release](https://img.shields.io/npm/v/ember-ckeditor.svg)](https://www.npmjs.com/package/ember-ckeditor)
[![Ember Observer Score](http://emberobserver.com/badges/ember-ckeditor.svg)](http://emberobserver.com/addons/ember-ckeditor)
[![License](https://img.shields.io/npm/l/ember-ckeditor.svg)](LICENSE.md)
[![Dependencies](https://img.shields.io/david/smith-carson/ember-ckeditor.svg)](https://david-dm.org/smith-carson/ember-ckeditor)
[![Dev Dependencies](https://img.shields.io/david/dev/smith-carson/ember-ckeditor.svg)](https://david-dm.org/smith-carson/ember-ckeditor#info=devDependencies)
[![Build Status](https://travis-ci.org/smith-carson/ember-ckeditor.svg?branch=master)](https://travis-ci.org/smith-carson/ember-ckeditor)

Exposes CKEditor via friendly Ember Components

Installation
------------------------------------------------------------------------------

```
ember install my-addon
```


Usage
------------------------------------------------------------------------------

This addon provides the component:

```
{{ember-ckeditor value=text on-change=(mut text)}}
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

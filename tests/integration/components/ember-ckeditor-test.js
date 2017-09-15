import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-ckeditor', 'Integration | Component | ember ckeditor', {
  integration: true
});

test('it renders', function(assert) {
  const done = assert.async();
  this.render(hbs`{{ember-ckeditor value=text}}`);

  const handle = setInterval(() => {
    var text = this.$().text().trim();

    if (text.indexOf('Rich Text Editor') >= 0) {
      assert.ok(1, 'it rendered');
      clearInterval(handle);
      done();
    }
  }, 300);
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember ckeditor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const done = assert.async();
    await render(hbs`{{ember-ckeditor value=text}}`);

    const handle = setInterval(() => {
      var text = this.element.textContent;
      
      if (text.indexOf('Rich Text Editor') >= 0) {
        assert.ok(1, 'it rendered');
        clearInterval(handle);
        done();
      }
    }, 300);
  });
});

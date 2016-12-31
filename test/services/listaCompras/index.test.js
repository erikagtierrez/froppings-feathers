'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('listaCompras service', function() {
  it('registered the listaCompras service', () => {
    assert.ok(app.service('listaCompras'));
  });
});

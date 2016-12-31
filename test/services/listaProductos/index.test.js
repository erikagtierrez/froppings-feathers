'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('listaProductos service', function() {
  it('registered the listaProductos service', () => {
    assert.ok(app.service('listaProductos'));
  });
});

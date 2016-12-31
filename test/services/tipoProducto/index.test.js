'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tipoProducto service', function() {
  it('registered the tipoProductos service', () => {
    assert.ok(app.service('tipoProductos'));
  });
});

'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('pedido service', function() {
  it('registered the pedidos service', () => {
    assert.ok(app.service('pedidos'));
  });
});

'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('compras service', function() {
  it('registered the compras service', () => {
    assert.ok(app.service('compras'));
  });
});

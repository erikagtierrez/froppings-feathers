'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('historialPuntos service', function() {
  it('registered the historialPuntos service', () => {
    assert.ok(app.service('historialPuntos'));
  });
});

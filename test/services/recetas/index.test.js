'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('recetas service', function() {
  it('registered the recetas service', () => {
    assert.ok(app.service('recetas'));
  });
});

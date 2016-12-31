'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('ingredientes service', function() {
  it('registered the ingredientes service', () => {
    assert.ok(app.service('ingredientes'));
  });
});

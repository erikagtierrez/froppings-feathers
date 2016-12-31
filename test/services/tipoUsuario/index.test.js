'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tipoUsuario service', function() {
  it('registered the tipoUsuarios service', () => {
    assert.ok(app.service('tipoUsuarios'));
  });
});

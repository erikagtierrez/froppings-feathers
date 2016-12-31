'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('listaIngredientes service', function() {
  it('registered the listaIngredientes service', () => {
    assert.ok(app.service('listaIngredientes'));
  });
});

'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('usuarioTemp service', function() {
    it('registered the usuarioTemps service', () => {
        assert.ok(app.service('usuarioTemps'));
    });
});
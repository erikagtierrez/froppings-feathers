'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('producto service', function() {
    it('registered the producto service', () => {
        assert.ok(app.service('producto'));
    });
});
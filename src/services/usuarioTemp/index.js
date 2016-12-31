'use strict';

const service = require('feathers-sequelize');
const usuarioTemp = require('./usuarioTemp-model');
const hooks = require('./hooks');

module.exports = function() {
    const app = this;

    const options = {
        Model: usuarioTemp(app.get('sequelize')),
        paginate: {
            default: 5,
            max: 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/usuarioTemps', service(options));

    // Get our initialize service to that we can bind hooks
    const usuarioTempService = app.service('/usuarioTemps');

    // Set up our before hooks
    usuarioTempService.before(hooks.before);

    // Set up our after hooks
    usuarioTempService.after(hooks.after);
};
'use strict';

const service = require('feathers-sequelize');
const producto = require('./producto-model');
const hooks = require('./hooks');

module.exports = function() {
    const app = this;

    const options = {
        Model: producto(app.get('sequelize')),
        paginate: {
            default: 5,
            max: 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/producto', service(options));

    // Get our initialize service to that we can bind hooks
    const productoService = app.service('/producto');

    // Set up our before hooks
    productoService.before(hooks.before);

    // Set up our after hooks
    productoService.after(hooks.after);
};
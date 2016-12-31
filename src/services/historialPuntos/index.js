'use strict';

const service = require('feathers-sequelize');
const historialPuntos = require('./historialPuntos-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: historialPuntos(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/historialPuntos', service(options));

  // Get our initialize service to that we can bind hooks
  const historialPuntosService = app.service('/historialPuntos');

  // Set up our before hooks
  historialPuntosService.before(hooks.before);

  // Set up our after hooks
  historialPuntosService.after(hooks.after);
};

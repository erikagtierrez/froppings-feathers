'use strict';

const service = require('feathers-sequelize');
const tipoUsuario = require('./tipoUsuario-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: tipoUsuario(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/tipoUsuarios', service(options));

  // Get our initialize service to that we can bind hooks
  const tipoUsuarioService = app.service('/tipoUsuarios');

  // Set up our before hooks
  tipoUsuarioService.before(hooks.before);

  // Set up our after hooks
  tipoUsuarioService.after(hooks.after);
};

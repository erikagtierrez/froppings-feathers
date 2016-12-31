'use strict';

const service = require('feathers-sequelize');
const listaCompras = require('./listaCompras-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: listaCompras(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/listaCompras', service(options));

  // Get our initialize service to that we can bind hooks
  const listaComprasService = app.service('/listaCompras');

  // Set up our before hooks
  listaComprasService.before(hooks.before);

  // Set up our after hooks
  listaComprasService.after(hooks.after);
};

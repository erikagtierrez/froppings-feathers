'use strict';

const service = require('feathers-sequelize');
const pedido = require('./pedido-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: pedido(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/pedidos', service(options));

  // Get our initialize service to that we can bind hooks
  const pedidoService = app.service('/pedidos');

  // Set up our before hooks
  pedidoService.before(hooks.before);

  // Set up our after hooks
  pedidoService.after(hooks.after);
};

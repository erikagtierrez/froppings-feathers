'use strict';

const service = require('feathers-sequelize');
const listaProductos = require('./listaProductos-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: listaProductos(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/listaProductos', service(options));

  // Get our initialize service to that we can bind hooks
  const listaProductosService = app.service('/listaProductos');

  // Set up our before hooks
  listaProductosService.before(hooks.before);

  // Set up our after hooks
  listaProductosService.after(hooks.after);
};

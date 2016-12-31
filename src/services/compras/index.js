'use strict';

const service = require('feathers-sequelize');
const compras = require('./compras-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: compras(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/compras', service(options));

  // Get our initialize service to that we can bind hooks
  const comprasService = app.service('/compras');

  // Set up our before hooks
  comprasService.before(hooks.before);

  // Set up our after hooks
  comprasService.after(hooks.after);
};

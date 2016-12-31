'use strict';

const service = require('feathers-sequelize');
const ingredientes = require('./ingredientes-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: ingredientes(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/ingredientes', service(options));

  // Get our initialize service to that we can bind hooks
  const ingredientesService = app.service('/ingredientes');

  // Set up our before hooks
  ingredientesService.before(hooks.before);

  // Set up our after hooks
  ingredientesService.after(hooks.after);
};

'use strict';

const service = require('feathers-sequelize');
const listaIngredientes = require('./listaIngredientes-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: listaIngredientes(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/listaIngredientes', service(options));

  // Get our initialize service to that we can bind hooks
  const listaIngredientesService = app.service('/listaIngredientes');

  // Set up our before hooks
  listaIngredientesService.before(hooks.before);

  // Set up our after hooks
  listaIngredientesService.after(hooks.after);
};

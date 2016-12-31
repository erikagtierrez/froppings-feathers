'use strict';

const service = require('feathers-sequelize');
const recetas = require('./recetas-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: recetas(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/recetas', service(options));

  // Get our initialize service to that we can bind hooks
  const recetasService = app.service('/recetas');

  // Set up our before hooks
  recetasService.before(hooks.before);

  // Set up our after hooks
  recetasService.after(hooks.after);
};

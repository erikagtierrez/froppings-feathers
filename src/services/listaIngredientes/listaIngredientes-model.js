'use strict';

// listaIngredientes-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const listaIngredientes = sequelize.define('listaIngredientes', {
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    listaIngredientes.sync();

    return listaIngredientes;
};
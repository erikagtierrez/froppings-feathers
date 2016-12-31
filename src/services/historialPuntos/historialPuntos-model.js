'use strict';

// historialPuntos-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const historialPuntos = sequelize.define('historialPuntos', {}, {
        freezeTableName: true
    });

    historialPuntos.sync({ force: true });


    return historialPuntos;
};
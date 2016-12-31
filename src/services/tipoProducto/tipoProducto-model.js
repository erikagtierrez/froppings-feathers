'use strict';

// tipoProducto-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const tipoProducto = sequelize.define('tipoProductos', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    tipoProducto.sync();

    return tipoProducto;
};
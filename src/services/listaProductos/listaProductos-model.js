'use strict';

// listaProductos-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const listaProductos = sequelize.define('listaProductos', {
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    listaProductos.sync();

    return listaProductos;
};
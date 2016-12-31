'use strict';

// listaCompras-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const listaCompras = sequelize.define('listaCompras', {
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    listaCompras.sync({ force: true });

    return listaCompras;
};
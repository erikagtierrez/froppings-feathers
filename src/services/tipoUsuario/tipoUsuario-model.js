'use strict';

// tipoUsuario-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const tipoUsuario = sequelize.define('tipoUsuarios', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    tipoUsuario.sync();

    return tipoUsuario;
};
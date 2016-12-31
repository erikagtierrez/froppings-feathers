'use strict';

// usuarioTemp-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const models = Sequelize.models;

module.exports = function(sequelize) {
    const usuarioTemp = sequelize.define('usuarioTemps', {
        cedula: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        codigo: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                //console.log(models);
                usuarioTemp.belongsTo(models.pedidos);
            },
        }
    });
    usuarioTemp.sync({ force: true });
    return usuarioTemp;
};
'use strict';

// pedido-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const models = Sequelize.models;

module.exports = function(sequelize) {
    const pedido = sequelize.define('pedidos', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        total: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        puntos: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                //console.log(models);
                pedido.belongsToMany(models.users, { through: models.historialPuntos });
                pedido.belongsToMany(models.producto, { through: models.listaProductos });
            },
        }
    });

    pedido.sync({ force: true });

    return pedido;
};
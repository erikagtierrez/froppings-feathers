'use strict';

// producto-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const models = Sequelize.models;

module.exports = function(sequelize) {
    const producto = sequelize.define('producto', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        precio: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        puntos: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                producto.belongsTo(models.tipoProductos);
                producto.hasOne(models.recetas);
                producto.belongsToMany(models.pedidos, { through: models.listaProductos });
                producto.belongsToMany(models.compras, { through: models.listaCompras });
            },
        }
    });

    producto.sync({ force: true });

    return producto;
};
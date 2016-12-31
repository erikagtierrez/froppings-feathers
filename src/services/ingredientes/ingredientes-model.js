'use strict';

// ingredientes-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const ingredientes = sequelize.define('ingredientes', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precio: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                ingredientes.belongsToMany(models.recetas, { through: models.listaIngredientes });
            },
        }
    });

    ingredientes.sync({ force: true });

    return ingredientes;
};
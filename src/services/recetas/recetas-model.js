'use strict';

// recetas-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const recetas = sequelize.define('recetas', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                recetas.belongsToMany(models.ingredientes, { through: models.listaIngredientes });
            },
        }
    });

    recetas.sync();

    return recetas;
};
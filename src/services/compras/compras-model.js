'use strict';

// compras-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const models = Sequelize.models;

module.exports = function(sequelize) {
    const compras = sequelize.define('compras', {
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                compras.belongsToMany(models.producto, { through: models.listaCompras });
            },
        }
    });

    compras.sync({ force: true });

    return compras;
};
'use strict';
const listaIngredientes = require('./listaIngredientes');
const listaCompras = require('./listaCompras');
const listaProductos = require('./listaProductos');
const historialPuntos = require('./historialPuntos');
const compras = require('./compras');
const tipoProducto = require('./tipoProducto');
const recetas = require('./recetas');
const ingredientes = require('./ingredientes');
const producto = require('./producto');
const pedido = require('./pedido');
const tipoUsuario = require('./tipoUsuario');
const usuarioTemp = require('./usuarioTemp');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
    const app = this;

    const sequelize = new Sequelize(app.get('postgres'), {
        dialect: 'postgres',
        logging: false
    });
    app.set('sequelize', sequelize);

    app.configure(authentication);
    app.configure(user);
    app.configure(usuarioTemp);
    app.configure(tipoUsuario);
    app.configure(pedido);
    app.configure(producto);
    app.configure(ingredientes);
    app.configure(recetas);
    app.configure(tipoProducto);
    app.configure(compras);
    app.configure(historialPuntos);
    app.configure(listaProductos);
    app.configure(listaCompras);
    app.configure(listaIngredientes);

    // Setup relationships
    const models = sequelize.models;
    Object.keys(models)
        .map(name => models[name])
        .filter(model => model.associate)
        .forEach(model => model.associate(models));

    sequelize.sync({ force: true });
};
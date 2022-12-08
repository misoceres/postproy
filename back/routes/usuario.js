const express = require('express');
const ruta = express.Router();
const cusuario = require('../controllers/UsuarioController');


ruta.get('/listar',cusuario.listar);
ruta.post('/login',cusuario.login);
ruta.post('/agregar',cusuario.agregar);
ruta.post('/borrar',cusuario.borrar);
ruta.post('/modificar',cusuario.modificar);


module.exports = ruta;
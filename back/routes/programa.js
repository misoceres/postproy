const express = require('express');
const ruta = express.Router();
const cprograma = require('../controllers/ProgramaController');


ruta.get('/listar',cprograma.listar);
ruta.post('/agregar',cprograma.agregar);
ruta.post('/borrar',cprograma.borrar);
ruta.post('/modificar',cprograma.modificar);


module.exports = ruta;
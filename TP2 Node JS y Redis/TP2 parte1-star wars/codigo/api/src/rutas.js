//importo express, y el controlador
const express = require('express');
const controladores = require('./controladores');

//creo rutas
const rutas = express.Router();

rutas.get('/', controladores.prueba);
rutas.post('/agregarpersonaje', controladores.agregarPersonaje);
rutas.get('/listarpersonajes/:episodio', controladores.listarPersonajes);
rutas.delete('/eliminarpersonaje', controladores.eliminarPersonaje);



module.exports = rutas;
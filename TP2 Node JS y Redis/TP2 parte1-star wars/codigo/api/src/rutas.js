//importo express, y el controlador
const express = require('express');
const controladores = require('./controladores');

//creo rutas
const rutas = express.Router();

rutas.get('/', controladores.prueba);
rutas.post('/agregarpersonaje/:episodio/:personaje', controladores.agregarPersonaje);
rutas.get('/listarpersonajes/:episodio', controladores.listarPersonajes);
rutas.delete('/eliminarpersonaje/:episodio/:personaje', controladores.eliminarPersonaje);



module.exports = rutas;
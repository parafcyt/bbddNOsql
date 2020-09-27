const redis = require('redis');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//importo rutas
const rutas = require('./rutas');


//instancio express
const app = express();
//para setear el puerto en una variable dentro de express
app.set('puerto', 3000);



//instancio clienteRedis
// const clienteRedis = redis.createClient(6379, 'redis-contenedor');


//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:4200' })); //donde ejecuto angular

//rutas
app.use('/api', rutas);


app.listen(app.get('puerto'), () => {
    console.log(`Escuchando en http://localhost:${app.get('puerto')}/api`); //es el ppal.
});
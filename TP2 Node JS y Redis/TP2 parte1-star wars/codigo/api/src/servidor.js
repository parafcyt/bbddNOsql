const redis = require('redis');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

//importo rutas
const rutas = require('./rutas');


//instancio express
const app = express();
//para setear el puerto en una variable dentro de express
app.set('puerto', 3000);


//para enviar el cliente
app.use(express.static(__dirname + '/dist/cliente'));



//instancio clienteRedis
// const clienteRedis = redis.createClient(6379, 'redis-contenedor');


//middlewares
app.use(express.json());
app.use(morgan('dev'));
//app.use(cors({ origin: 'http://localhost:4200' })); //donde ejecuto angular,no lo uso mas cuando esta en produccion

//rutas
app.use('/api/', rutas);
app.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/dist/cliente/index.html')) });


app.listen(app.get('puerto'), () => {
    console.log(`Escuchando en http://localhost:${app.get('puerto')}`); //es el ppal.
});
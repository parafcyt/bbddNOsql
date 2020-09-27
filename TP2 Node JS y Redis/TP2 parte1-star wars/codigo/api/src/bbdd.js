const redis = require('redis');

//exporto para que lo puedan otros archivos lo puedan usar

module.exports = () => {
    const clienteRedis = redis.createClient(6379, 'redis-contenedor');

    //para estar escuchando eventos: error y connect
    clienteRedis.on("error", () => {
        process.exit();
    });

    clienteRedis.on("connect", () => {
        console.log('Conectado a redis');
    });

    return clienteRedis; //para usarlo afuera

}
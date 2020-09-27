//importo la conexion a la bbdd
const conexionRedis = require('./bbdd');
const db = conexionRedis();

//creo controlador
exports.prueba = (req, res) => {
    return res.send('prueba ok');
}

//funcion para agregar episodios y personaje
exports.agregarPersonaje = (req, res) => {
    const episodio = req.body.episodio;
    const personaje = req.body.personaje;

    db.lpush(episodio, personaje, (err, reply) => {
        if (err) {
            res.status(500).json("Error interno de Redis");
        } else {
            res.status(200).json(`Agregado.Total de personajes en episodio ${episodio}: ${reply}`);
        }
    });


}

//funcion para eliminar personaje de episodio pasado
exports.eliminarPersonaje = (req, res) => {
    const episodio = req.body.episodio;
    const personaje = req.body.personaje;

    db.lrem(episodio, 0, personaje, (err, reply) => {
        if (err) {
            res.status(500).json("Error interno de Redis");
        } else {
            res.status(200).json(`Total de personajes eliminados: ${reply}`);
        }
    });

}

//funcion para listar personajes de un episodio
exports.listarPersonajes = (req, res) => {
    const episodio = req.params.episodio;

    db.lrange(episodio, 0, -1, (err, reply) => {
        if (err) {
            res.status(500).json("Error interno de Redis");
        } else {
            res.status(200).json(reply);
        }
    });


}
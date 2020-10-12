#CONEXION A REDIS
import redis

#conexion a redis
def conexionRedis():
    conexion=redis.Redis(host="localhost",port=6379,db=1,decode_responses=True)#decode_responses para que sea legible lo que devuelve redis

    try:
        if conexion.ping():
            print('\nConectado a REDIS\n')

    except ValueError:
        print('Error de conexion a redis')

    return conexion


from flask import Blueprint, jsonify
from bbdd import conexionRedis
import random

ruta= Blueprint('rutas',__name__) 
db= conexionRedis()


#ruta principal
@ruta.route('/iniciar/<cantTickets>')

#funcion cuando entro a localhost:5000/iniciar
def iniciar (cantTickets):
    db.flushdb()
    precios=[250,500,700,1000]

    #formato de tickets: nombre lista, nro ticket, precio,estado
    for i in range(int(cantTickets)):
        db.rpush(i+1,i+1,random.choice(precios),'disponible')
    return jsonify('Base de datos inicializada con '+cantTickets+' tickets')

#reservar ticket x 4 minutos
@ruta.route('/reservar/<nroticket>')

def reservarTicket(nroticket):
    db.setex(nroticket+'reservado',240,nroticket)
    return jsonify('Ticket '+nroticket+' reservado por 4 minutos')

#comprar ticket
@ruta.route('/comprar/<nroticket>')

def comprarTicket(nroticket):
    #elimino si hay reserva
    db.delete(nroticket+'reservado')

    #cambiamos el estado del ticket
    db.lset(nroticket,2,'vendido')

    return jsonify('Se vendio el ticket '+nroticket)


#LISTARES

#listar disponibles

@ruta.route('/listar/disponibles')
def listarDisponible():
    temporales= db.info('keyspace')['db1'] ['expires']
    
    cantTickets=db.dbsize()-temporales


    
    disponibles=[]

    for i in range(cantTickets):
        ticket=db.lrange(i+1,0,-1)

        #si esta disponible y no tiene reserva
        if ticket[2]=='disponible' and db.ttl(str(i+1)+'reservado') ==-2:
            disponibles.append(ticket)
    
    return jsonify(disponibles)


#listar vendidos
@ruta.route('/listar/vendidos')

def listarVendidos():

    temporales= db.info('keyspace')['db1'] ['expires']
    cantTickets=db.dbsize()-temporales

    vendidos=[]

    for i in range(cantTickets):
        ticket=db.lrange(i+1,0,-1)

        #si el estado es vendido
        if ticket[2]=='vendido':
            vendidos.append(ticket)
    return jsonify(vendidos)


#listar reservados
@ruta.route('/listar/reservados')

def listarReservados():

    temporales= db.info('keyspace')['db1'] ['expires']

    cantTickets=db.dbsize()-temporales

    reservados=[]

    for i in range(cantTickets):
        
        tiempoRestante=db.ttl(str(i+1)+'reservado')

        #si hay tiempo restante
        if tiempoRestante !=-2:
            reservados.append([i+1,round(tiempoRestante/60,2)])

        
    return jsonify(reservados)



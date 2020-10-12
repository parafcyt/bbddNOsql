

from flask import Flask
from flask_cors import CORS
from rutas import ruta

app= Flask(__name__)

#para usar cors
cors=CORS(app,resources={r"/*": {"origins":"*"}}) #"*" para que cualquier ruta se conecte
app.register_blueprint(ruta)



#lo que se ejecuta si este archivo es el main(principal)
if __name__=="__main__":
    #para que escuche los cambios:debug=True
    app.run(debug=True)



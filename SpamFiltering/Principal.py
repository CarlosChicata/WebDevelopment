import pickle
from sklearn.externals import joblib
from flask import Flask, render_template, request

app = Flask( __name__ )


@app.route("/" )
def hello():
    return render_template("Principal.html", por="What's your SMS?",Cantidad="100%",TextoOriginal="")

@app.route("/Procesando" , methods=["POST"])
def Procesando():
    TextoCrudo = request.form["SMS"]
    print( TextoCrudo )
    TextoProcesado =  Convertidor.transform( [ TextoCrudo ] )
    Prediccion = Modelo.predict( TextoProcesado )
    Valor = Modelo.predict_proba(TextoProcesado )
    Rpta = str(int(Valor[ 0 ][ 0 ]*100))+"%" if int(Valor[ 0 ][ 0 ]*100) > 100 else "100%"
    print( str(int(Valor[ 0 ][ 0 ]*100))+"%" )
    return render_template("Principal.html", por=Prediccion[0] + " "+str(round( Valor[ 0 ][ 0 ]*100 , 2 ))+"%", Cantidad= Rpta,TextoOriginal=TextoCrudo)


if __name__ == "__main__":
    inicio = True
    Convertidor=pickle.load( open("TransformadorDataSMS.pickle","rb"))
    Modelo = joblib.load("ClasificadorSMSSpam.pkl")
    app.run( debug = True )

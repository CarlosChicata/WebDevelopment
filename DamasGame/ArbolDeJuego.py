### general purpose:
###     this file containt all code to work in game tree. this file contain two class : NodoDamas and ArbolDamas
###     --> NodoDamas: contain the logic for each nodo
###     --> ArbolDamas : manage how game tree will work
###

from copy import deepcopy
from random import randrange

#
# this class "NodoDamas" contain all logic for each node in the game tree.
# the function in the class are: Creation, check if the position are in the game table, print the node and create new children node using the turn
#
#

class NodoDamas( object ):
    NumeroFichas = 0

    # Inicializar un arbol de damas sin movimiento; el primer corchete es para la fila y el segundo columna; en las piezas  contenido en una array
    # la primera posicion es para los user mientras que las segunda en posicion de arreglo es para la maquina
    def __init__(self):
        # create of number piece in the game table
        self.piece = [ 12 , 12 ]
        # it will be the score or static value
        self.score = 0
        # connection to next level
        self.hojas = []
        # creating the game table
        self.tabla = [ [ 0 for x in range( 8 ) ] for y in range( 8 ) ]
        # initialization of game table
        for x in range( 4 ):
            self.tabla[ 0 ][ 1+x*2 ] = 1
            self.tabla[ 1 ][ 0+x*2 ] = 1
            self.tabla[ 2 ][ 1+x*2 ] = 1
            self.tabla[ 5 ][ 0+x*2 ] = 2
            self.tabla[ 6 ][ 1+x*2 ] = 2
            self.tabla[ 7 ][ 0+x*2 ] = 2

    # destructor para limpiar la memoria
    def __del__(self):
        self.piece = []
        self.score = -1
        self.hojas = []
        self.tabla = []

    # Ver si esta entro del tablero
    def ComprobarNivel(self, x1, y1):
        flag = 0 <= x1 + y1 <= 7
        return flag

    # Imprimir el estado un nodo
    def Imprimir(self):
        #imprime la cabeza
        print("cabeza del arbol")
        for x in range( 8 ):
            cadena = ""
            for y in range( 8 ):
                if self.tabla[x][y] == 0:
                    cadena = cadena +"0"
                elif self.tabla[x][y] == 1:
                    cadena = cadena +"1"
                else:
                    cadena = cadena + "2"
            print( cadena )
        print("\n")

    # Crear nodos hoja, 1 es para turno del usuario ( o False en boolean ) y 2 para la maquina ( True en boolean ), retorna un arreglo de los nuevos hijos
    def CrearNodosHijos(self, Tipo =True ):
        user = 2 if Tipo == True else 1
        oponente = 1 if user == 2 else 2
        posicion = 0 if user == 1 else 1
        siguiente = -1 if user == 2 else 1
        izquierda = -1 if user == 2 else 1
        Rpta = []
        # recorre el tablero para buscar a alguna de sus piezas
        for x in range(2, 8 ):
            for y in range( 8 ):
                # si esta dentro del tablero mi siguiente jugada y es mi ficha
                if self.tabla[ x ][ y ] == user and 0 <= x + siguiente <= 7:
                    # si es valido mi left move y esta libre para moverme - movimiento unico
                    if self.ComprobarNivel( y , izquierda ) and self.tabla[ x + siguiente ][ y +izquierda ] == 0:
                        Temp = deepcopy( NodoDamas() )
                        Temp.tabla = deepcopy( self.tabla )
                        Temp.piece = deepcopy( self.piece)
                        Temp.tabla[ x + siguiente ][ y +izquierda ] = user
                        Temp.tabla[ x ][ y ] = 0
                        Rpta.append( Temp )
                    # si es valido mi right move y esta libre para moverme - movimiento unico
                    if self.ComprobarNivel( y , -izquierda ) and self.tabla[ x + siguiente ][ y - izquierda ] == 0:
                        Temp = deepcopy( NodoDamas() )
                        Temp.tabla = deepcopy( self.tabla )
                        Temp.piece = deepcopy( self.piece )
                        Temp.tabla[ x + siguiente ][ y - izquierda ] = user
                        Temp.tabla[ x ][ y ] = 0
                        Rpta.append( Temp )
                    # si es valido mi movimiento de comer a un enemigo por la izquierda
                    if self.ComprobarNivel( y , 2*izquierda ) and self.ComprobarNivel( y , izquierda ) and self.tabla[ x + siguiente ][ y + izquierda ] == oponente and self.tabla[ x + 2*siguiente ][ y + 2*izquierda ] == 0:
                        Temp = deepcopy( NodoDamas() )
                        Temp.tabla = deepcopy(self.tabla)
                        Temp.piece = deepcopy(self.piece)
                        Temp.tabla[ x + siguiente ][ y + izquierda ] = 0
                        Temp.tabla[x + 2*siguiente][ y + 2*izquierda ] = user
                        Temp.piece[ posicion] = Temp.piece[ posicion ] - 1
                        Temp.tabla[ x ][ y ] = 0
                        Rpta.append( Temp )
                    # si es valido mi movimiento de comer a un enemigo por la derecha
                    if self.ComprobarNivel( y , -2*izquierda ) and self.ComprobarNivel( y, -izquierda ) and self.tabla[x + siguiente][ y - izquierda ] == oponente and self.tabla[ x + 2*siguiente ][ y - 2*izquierda ] == 0:
                        Temp = deepcopy( NodoDamas() )
                        Temp.tabla = deepcopy(self.tabla)
                        Temp.piece = deepcopy(self.piece)
                        Temp.tabla[ x + siguiente ][ y - izquierda ] = 0
                        Temp.tabla[ x + 2*siguiente ][ y - 2*izquierda ] = user
                        Temp.tabla[ x ][ y ] = 0
                        Temp.piece[posicion] = Temp.piece[posicion] - 1
                        Rpta.append( Temp )
        self.hojas = Rpta
        return Rpta

    # Calcular score de nodo de acuerdo al estado que se desee optimizar True = maximizar y False = minimizar
    def CalcularScore(self, Tipo ):
        if len( self.hojas )  == 0 :
            self.score = abs( self.piece[ 0 ] - self.piece[ 1 ] )
            #print( self.score )
            return self.score
        elif len( self.hojas) == 1 :
            self.score = self.hojas[0 ].score
            #print(self.score)
            return self.score
        else :
            funcion = 0
            if Tipo :
                funcion = lambda x , y : max( x, y )
            else:
                funcion = lambda x , y : min( x, y )
            ValorMaximo = self.hojas[0].score
            for elem in self.hojas:
                ValorMaximo = funcion(ValorMaximo, elem.score )
            self.score = ValorMaximo
            #print(self.score)
            return self.score


#
# the "ArbolDamas" class manage the logic in the game tree
# ----> Note <-----
# 1.- the nivel parameter in "TomarDecision" function need to be in 4- 6, 7 or greater the time is bigger then 33 seconds
# 2.- envio de errores para control de eventos internos
#   2.1.- -51 es para poder decir que se accedio a un error que no estaba permitido
#   2.2.- -50 es para decir que no hay fichas en algun jugador
#
#
#

class ArbolDamas( object ):
    # inialization of the game tree
    def __init__(self):
        # create root of the game tree
        self.Cabeza = NodoDamas()

    # imprimir el estado del arbol
    def Imprimir(self):
        self.Cabeza.Imprimir()

    # crear un arbol segun el nivel dado, the level starts in 1 to value's nivel and using minimax algorithm
    def TomarDecision(self, nivel = 4 ):
        if nivel < 3:
            print( "error: nivel no acceptado, debe ser por lo menos mayor o igual a 3")
            return -51
        Cola = [ [self.Cabeza] ]
        turno = True
        nivel -=1
        # recorre cada nivel previo...
        for iteracion in range( 0, nivel ):
            if len( Cola[ iteracion ] ) != 0:
                Temp = [ ]
                # y en cada nivel previo crea sus hijos y los guarda
                for nodo in Cola[ iteracion ]:
                    Temp = Temp + nodo.CrearNodosHijos( Tipo = turno )
                # y los guardas en la cola
                Cola.append( Temp )
                # cambiar de jugador
                turno = False if turno == True else True
            else:
                break
        # recorre la cola para poder encontrar el maximo valor hasta la cabeza
        Cola.pop(0)
        intento = 1
        turno = False if turno == True else True
        for lista in reversed( Cola ):
            for elem in lista:
                elem.CalcularScore( Tipo=turno )
            turno = False if turno == True else True
        # elegir el hijo que representara al padre ahora basandonos en su indice
        if len( self.Cabeza.hojas ) != 0:
            funcion = 0
            if turno == True:
                funcion = lambda x, y: max(x, y)
            else:
                funcion = lambda x, y: min(x, y)
            Opcion = []
            indice = -1
            ValorMaximo = self.Cabeza.hojas[0].score
            for elem in self.Cabeza.hojas:
                if  ValorMaximo == funcion( ValorMaximo, elem.score ):
                    Opcion.append( indice )
                else :
                    ValorMaximo = funcion( ValorMaximo, elem.score )
                    Opcion = [ indice ]
                indice+= 1
            indice = Opcion[ randrange( len( Opcion ) ) ]
            print( indice )
            self.Cabeza.tabla = deepcopy(self.Cabeza.hojas[ indice ].tabla )
        else:
            print("error ya no hay mas hijos en este nodo raiz")
            return -50




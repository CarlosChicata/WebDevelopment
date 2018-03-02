/* this a part of data reception*/
/** logica para formulario y busqueda
    - se podria hace directo por simplicidad del proyecto pero
    por motivos de organizacion escogimos la modularidad apesar que agrega complejidad al proyecto,
    pero escogimos esto por un motivos mas: aprendizaje sobre componentes en Vue.js
**/

/// maneja todo sobre la informacion del a nivel busqueda
var app1 = new Vue({
    el:"#Opciones",
    data:{
        City:[
            { text:"choose your place"},
            {text:"camana, arequipa"},
            {text:"ocoña, arequipa"},
            {text:"arequipa, arequipa"},
            {text:"caraveli, arequipa"},
            {text:"condesuyo, arequipa"}
        ],
        Kitchen:[
            {text:"choose your kitchen"},
            {text:"breakfast place"},
            {text:"restaurants"},
            {text:"coffees"},
            {text:"cakeshop"},
            {text:"bar and pubs"}
        ]

    }
})

/// maneja la gestion del idioma del app
var app2 = new Vue({
    el:"#Lenguaje",
    data:{
        Identificador : 1
    },
    methods:{
        CambioLenguaje: function( idx ){
            var hijos = this.$el.getElementsByClassName("st-BotonHeader")
            hijos[ this.Identificador ].classList.remove("st-BotonDecoretionHeader")
            hijos[ idx ].classList.add("st-BotonDecoretionHeader")
            this.Identificador = idx
        }
    }
})

var app3 = new Vue({
    el:"#Referencias",
    data:{
        Gastronomia:[
            {
                titulo:"La causa limeña",
                origen:"lima , lima",
                conocimiento:"nacido en el Perú pre-independentista, que buscando dinero para poder pagar los gastos de la guerra inventan este platillo.",
                imagen:"/static/image/CausaRellena.jpg"
            },
            {
                titulo:"El anticucho de corazón de vaca",
                origen:"lima , lima",
                conocimiento:"nace en el Perú antiguo que al tener los intestinos de las  vacas, los africanos recidentes inventan esto para comer.",
                imagen:"/static/image/Anticuchos.jpg"
            },
            {
                titulo:"El suspiro a la limeña",
                origen:"lima , lima",
                conocimiento:"este es un postre encargado de dar sabor a la cocina peruana proveiente de lima, que por su sabor es muy conocido en el pais.",
                imagen:"/static/image/SuspiroLimeno.jpg"
            }
        ]
    }

})

//// area de referencias



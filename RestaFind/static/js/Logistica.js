/* this a part of data reception*/
/** logica para formulario y busqueda
    - se podria hace directo por simplicidad del proyecto pero
    por motivos de organizacion escogimos la modularidad apesar que agrega complejidad al proyecto,
    pero escogimos esto por un motivos mas: aprendizaje sobre componentes en Vue.js
**/

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


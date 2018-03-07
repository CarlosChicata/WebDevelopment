/* this a part of data reception*/
/** logica para formulario y busqueda
    - se podria hace directo por simplicidad del proyecto pero
    por motivos de organizacion escogimos la modularidad apesar que agrega complejidad al proyecto,
    pero escogimos esto por un motivos mas: aprendizaje sobre componentes en Vue.js
**/

/* data global **/

var spa = {
    Idioma:{
        Titulo: "RestaFind",
        Subtitulo:"Buscando un buen lugar por un buen momento",
        BotonSubmit:"busca",
        Opciones:[
            { text:"Elige uno!" },
            { text:"Desayunos" },
            { text:"Restaurantes" },
            { text:"Cafes" },
            { text:"Pastelerias" },
            { text:"bar y pubs" }
        ]
    }
};

var eng = {
    Idioma:{
        Titulo: "RestaFind",
        Subtitulo:"find a good place by a good moment",
        BotonSubmit : "search",
        Opciones:[
            { text:"Choose one!" },
            { text:"Breakfast place" },
            { text:"Restaurants" },
            { text:"Coffees" },
            { text:"Cakeshop" },
            { text:"Bar and pubs" }
        ]
    }
};

var Lugares = [
    { text:"camana, arequipa" },
    { text:"ocoña, arequipa" },
    { text:"arequipa, arequipa" },
    { text:"caraveli, arequipa" },
    { text:"condesuyo, arequipa" }
]



var lenguaje = [ spa, eng ];
/****  componentes ****/

var cabeza = {
    props: ["Idioma"],
    data: function(){
        return{
            Ubicacion: Lugares,
            Identificador: 1
        }
    },
    template : "#cabeza-template",
    methods:{
        CambioLenguaje: function( idx ){
            var hijos = this.$el.getElementsByClassName("st-BotonHeader")
            hijos[ this.Identificador ].classList.remove("st-BotonDecoretionHeader")
            hijos[ idx ].classList.add("st-BotonDecoretionHeader")
            this.Identificador = idx
            this.$emit("cambioidioma", { indice : idx})
        }

    }
};

/**** esquema general *****/

var app = new Vue({
   el : "#GestorGeneral",
   data:{
        Idiomag : lenguaje[ 1 ]
   },
   methods:{
        CambiarIdioma: function( obj ){
            this.Idiomag = lenguaje[ obj.indice ]
        }
   },
   components:{
       "cabezaprincipal" : cabeza
   }

})


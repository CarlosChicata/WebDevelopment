/* this a part of data reception*/
/** logica para formulario y busqueda
    - se podria hace directo por simplicidad del proyecto pero
    por motivos de organizacion escogimos la modularidad apesar que agrega complejidad al proyecto,
    pero escogimos esto por un motivos mas: aprendizaje sobre componentes en Vue.js
**/

/* data global **/

var spa = {
    Header:{
        Titulo: "RestaFind",
        Subtitulo:"Buscando un buen lugar por un buen momento",
        BotonSubmit:"busca"
    }
};

var eng = {
    Header:{
        Titulo: "RestaFind",
        Subtitulo:"find a good place by a good moment",
        BotonSubmit : "search"
    }
};

var lenguaje = [ spa, eng ];
/****  componentes ****/

var cabeza = {
    props: ["Text"],
    data: function(){
        return{
            Identificador: 1,
            Texto : Text
        }
    },
    template : "#cabeza-template",
    methods:{
            CambioLenguaje: function( idx ){
                var hijos = this.$el.getElementsByClassName("st-BotonHeader")
                hijos[ this.Identificador ].classList.remove("st-BotonDecoretionHeader")
                hijos[ idx ].classList.add("st-BotonDecoretionHeader")
                this.Identificador = idx
                console.log( this.Texto[ idx ].Header.Subtitulo )
        }
    }
};

/**** esquema general *****/

var app = new Vue({
   el : "#GestorGeneral",
   data:{
        Idioma: spa,
   },
   components:{
       "cabezaprincipal" : cabeza
   }
})


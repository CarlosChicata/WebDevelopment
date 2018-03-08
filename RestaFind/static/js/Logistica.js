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

var info =[
    {
      titulo:"Causa limeña",
      origen:"lima , lima",
      conocimiento:["Nacido en el Perú pre-independentista, que buscando dinero para poder pagar los gastos de la guerra inventan este platillo.", "Born in pre-independence Peru, who seeks money to pay the expenses of war invent this dish."],
      imagen:"/static/image/CausaRellena.jpg"
    },
    {
      titulo:"Anticucho de corazón de vaca",
      origen:"lima , lima",
      conocimiento:["Nace en el Perú antiguo que al tener los intestinos de las  vacas, los africanos recidentes inventan esto para comer.", "It was born in ancient Peru that having the intestines of the cows, the reclining Africans invent this to eat."],
      imagen:"/static/image/Anticuchos.jpg"
    },
    {
      titulo:"Suspiro a la limeña",
      origen:"lima , lima",
      conocimiento:["Este es un postre encargado de dar sabor a la cocina peruana proveniente de lima, que por su sabor es muy conocido en el pais.","This is a dessert in charge of flavoring the Peruvian cuisine from Lima, which for its flavor is well known in the country." ],
      imagen:"/static/image/SuspiroLimeno.jpg"
    }
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

var referencia = {
    props:["idx"],
    template : "#referenciaprincipal-template",
    data : function(){
        return{
            Indice : 1,
            Informacion : info
        }
    }
};

/**** esquema general *****/

var app = new Vue({
   el : "#GestorGeneral",
   data:{
        Idiomag : lenguaje[ 1 ],
        IndiceLenguaje: 0
   },
   methods:{
        CambiarIdioma: function( obj ){
            this.Idiomag = lenguaje[ obj.indice ]
            this.IndiceLenguaje = obj.indice
        }
   },
   components:{
       "cabezaprincipal" : cabeza,
       "referenciaprincipal":referencia

   }

})


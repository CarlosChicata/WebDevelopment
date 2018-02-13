/* this a part of data reception*/
/** logica para formulario y busqueda
    - se podria hace directo por simplicidad del proyecto pero
    por motivos de organizacion escogimos la modularidad apesar que agrega complejidad al proyecto,
    pero escogimos esto por un motivos mas: aprendizaje sobre componentes en Vue.js
**/
var comp1 = {
            template:'#formulario-template',
            props:['getTitulo']
        };

new Vue({
    el: '#buscador',
    data:{
        titulo:"tell me your place",
        descripcion:''
    },
    components:{
        'formulario':comp1
    }
});




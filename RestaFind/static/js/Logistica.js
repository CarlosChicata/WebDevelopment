/* this a part of data reception*/
/** logica para formulario y busqueda
    - se podria hace directo por simplicidad del proyecto pero
    por motivos de organizacion escogimos la modularidad apesar que agrega complejidad al proyecto,
    pero escogimos esto por un motivos mas: aprendizaje sobre componentes en Vue.js
**/

new Vue({
    el: '#buscador',
    data:{
        titulo:"tell me your place",
        descripcion:''
    }

});

new Vue({
    el:"#referencias",
    data:{
        consultores:[
            {
                name: "norman davies",
                comentario:" i would use this app all time",
                image:"/static/image/Face1.jpg"
            },
            {
                name:"harold weasley",
                comentario:" i recommended that all my friend and they like it!",
                image:"/static/image/Face2.jpg"
            },
            {
                name:"samantha gonzales",
                comentario:"i feel so comfortable",
                image:"/static/image/Face3.jpg"
            },
            {
                name:"diana chicata",
                comentario:" i love that!!",
                image:"/static/image/Face4.jpg"
             }
        ]
    }
});


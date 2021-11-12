const app = new Vue({

  el: '#app',

  data: {
   toDoElements: [

    {
      text: 'Costruire la pagina in css',
      done: true
    },
    {
      text: 'Stampare all’interno di una lista, un item per ogni todo',
      done: false
    },
    {
      text: 'Visualizzare a fianco ad ogni item una “x”',
      done: false
    },
   
    {
      text: 'Predisporre un campo di input testuale e un pulsante “aggiungi”',
      done: false
    },

   ],

   stringTodo: '',
   error: false
   
 },

 methods:{
   removeElement(index){
     this.toDoElements.splice(index,1);
   },

   sbarraElemento(index){

    this.toDoElements[index].done =  !this.toDoElements[index].done;
    
   },


 }


})

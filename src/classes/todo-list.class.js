import { Todo } from "./todo.class";


export class TodoList {
    
    constructor(){

        this.loadLocalStorage();

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.saveLocalStorage();
    }

    eliminarTodo( id ){
        
        this.todos = this.todos.filter(todo => todo.id != id );
        this.saveLocalStorage();

    }

    toggleTodo( id ){
        
        for(const todo of this.todos){
            if(todo.id == id){
                
                todo.completado = !todo.completado;
                this.saveLocalStorage();
                break;
            }
        }

    }

    toggleAll(){
        this.todos = this.todos.filter( todo => !todo.completado );
        this.saveLocalStorage();
    } 

    saveLocalStorage(){

        localStorage.setItem('todo', JSON.stringify (this.todos));

    }

    loadLocalStorage(){

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [] ;


        /* if( localStorage.getItem('todo')){

            this.todos = JSON.parse(localStorage.getItem('todo'));

        }else{
            this.todos = [];
        } */

        this.todos = this.todos.map(Todo.fromJson);

    }

}
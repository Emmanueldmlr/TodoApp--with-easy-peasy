import {action, thunk} from 'easy-peasy'
import { v4 as uuidv4 } from "uuid";
export default {
  isLoading: false,
  error: "",
  todos: [
  ],

  fetchTodos:thunk( Actions =>{
      Actions.toggleIsLoading()
      fetch ('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res=> res.json())
      .then(todos => {
          Actions.setTodos(todos)
      })
      .catch(error => {
          Actions.setError(error)
      })
  }),


  //actions
  setTodos: action((state,todos) => {
        state.todos = todos
        state.isLoading = !state.isLoading;
   }),

  setError: action((state,error) => {
        state.error = error
        state.isLoading = !state.isLoading;
   }),

  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  toggleIsLoading: action((state) =>{
      state.isLoading =!state.isLoading
  }),

  add: action((state,title)=>{
      state.isLoading = true
     const todo = {
       id: uuidv4(),
       title:title,
       completed:false
     };
     state.todos = [...state.todos, todo]
  }),

  deleteTodo: action ((state,id)=>{
      state.todos = state.todos.filter( todo => todo.id !== id );
  })
};
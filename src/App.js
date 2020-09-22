import React from 'react';
import './App.css';
import {StoreProvider,createStore} from 'easy-peasy'
import model from './store/peasy-todo'
import TodoList from './components/todoList'
import Header from './components/header'

function App() {
  const store = createStore(model)
  return (
    <StoreProvider store={store}>
      <div className='col-6 offset-3'>
        <Header />
        <TodoList />
      </div>
    </StoreProvider>
  );
}

export default App;

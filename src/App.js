import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import {todoContext} from './components/TodoContext';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <todoContext.Provider value={[todoList, setTodoList]}>
      <div className="App">
        <Header />
        <TodoList />
        <AddItem />
      </div>
    </todoContext.Provider>
  );
}

export default App;

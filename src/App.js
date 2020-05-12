import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css';
import Header from './components/Header';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import {todoContext} from './components/TodoContext';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [retry, setRetry] = useState(false);
  const todoLogin = (response) =>{
    console.log(response);
    setRetry(false);
  }
  const retryLogin = (response) => {
    console.log(response);
    setRetry(true);
  }
  return (
      <div className="App">
        <div className='Home'>
          <Header />
          <todoContext.Provider value={[todoList, setTodoList]}>
            <TodoList />
            <AddItem />
          </todoContext.Provider>
        </div>
        <div className='login-container'>
          <div className='login'>
            <p className='login-label'>Please Login to Continue!</p>
            <GoogleLogin
              clientId="309767756422-d3026dgiuc5f8s2oa15idgtoc8rd99qi.apps.googleusercontent.com"
              onSuccess={todoLogin}
              onFailure={retryLogin}
              cookiePolicy={'single_host_origin'}
            />
            <p className='error-login'>{retry ? 'Please try again!' : ''}</p>
          </div>
        </div>
      </div>
  );
}

export default App;

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
  const [loggedin, setLoggedIn] = useState(false);
  const todoLogin = (response) =>{
    setLoggedIn(true);
    setRetry(false);
  }
  const retryLogin = (response) => {
    setRetry(true);
  }
  const logOut = () => {
    setLoggedIn(false);
    setRetry(false);
  }
  return (
      <div className="App">
        <div className='Home'>
          <Header logoutFun={logOut} isLoggedin={loggedin}/>
          <todoContext.Provider value={[todoList, setTodoList]}>
            <TodoList />
            { loggedin && <AddItem />}
          </todoContext.Provider>
        </div>
        <div className='login-container' style={loggedin? {visibility: 'hidden'} : {visibility: 'visible'}}>
          <div className='login'>
            <p className='login-label'>Please Login to Continue!</p>
            <GoogleLogin
              clientId="547364768749-gs5fjuhgv01g1rb26mae69067j5l6cqn.apps.googleusercontent.com"
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

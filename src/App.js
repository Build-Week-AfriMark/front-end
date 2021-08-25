// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import Login from '../src/components/Login';
import SignUp from './components/SignUp';
import TheMarket from './components/TheMarket';
import Logout from './components/Logout'


function App() {
  return (
    <div>
      <header>
        <nav>
          {localStorage.getItem('token') ?
            <>
              <a href='/the-market'>The Market</a>
              <a href='/logout'>Logout</a>
            </> : 
            <>
              <a href='/signup'>Sign Up</a>
              <a href='/login'>Login</a>
            </>
          } 
        </nav>
      </header>
      <Router>
      <Switch>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <PrivateRoute path='/the-market' component={TheMarket} />
  
        {localStorage.getItem('token') ? 
        <>
        <PrivateRoute path='/' component={TheMarket} />
        <PrivateRoute path='/logout' component={Logout} />
        </> :
          <>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Login />
          </Route> 
          </>
        }
        
      </Switch>
      </Router>
    </div>
  )
}

export default App;

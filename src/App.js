//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Login from '../src/components/Login';
import SignUp from './components/SignUp';

import TheMarket from './components/TheMarket';
import Product from './components/Product';


function App() {
  return (
    <div>
      <header>
        <nav>
          <a href='/signup'>Sign Up</a>
          <a href='/login'>Login</a>
          <a href='/the-market'>The Market</a>
        </nav>
      </header>
      <Router>
      <Switch>
        <Route path='/item/:id'>
          <Product />
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/the-market'>
          <TheMarket />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App;

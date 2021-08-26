import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import Login from '../src/components/Login';
import SignUp from './components/SignUp';
import TheMarket from './components/TheMarket';
import Product from './components/Product';
import Logout from './components/Logout'
import Header from './components/Header';



function App() {
  const [tokenState, setTokenState] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      setTokenState(true)
    } else {
      setTokenState(false)
    }
  },[])

  return (
    <div className='productReturn'>
      <Header tokenState={tokenState}/>
      <Router>
        <Switch>
          <Route path='/item/:id'>
            <Product />
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <PrivateRoute path='/the-market' component={TheMarket} />
          <PrivateRoute path='/logout' setTokenState ={setTokenState} component={Logout} />
          <Route path='/login'>
            <Login setTokenState={setTokenState}/>
          </Route>
          <Route path='/'>
            <Login setTokenState={setTokenState}/>
          </Route> 
          </Switch>        
      </Router>
    </div>
  )
}

export default App;
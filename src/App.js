// import logo from './logo.svg';
import './App.css';
import React,  { useState } from 'react';
import Login from '../src/components/Login';

function App() {
  return (
    <div>
      <img 
src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhZ29zJTJDJTIwbmlnZXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="An image"></img>
      <footer>
      <h2>Login</h2>

      </footer>
      <Login
      />
        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    </div>
  )
}

export default App;

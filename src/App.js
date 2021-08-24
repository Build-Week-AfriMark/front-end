// import logo from './logo.svg';
import './App.css';
import React, { useState }from 'react';
import SignUp from './components/SignUp';



function App() {
  return (
    
    <div className="newaccount">
      <img src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxhZ29zJTJDJTIwbmlnZXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"></img>
      <header>
      <h2>Create a New Account <br></br>Sign up!</h2>
      <SignUp/>
      </header>
      <footer></footer>
  
    </div>
  );
}

export default App;

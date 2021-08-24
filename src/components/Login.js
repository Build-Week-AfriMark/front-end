import React,  { useState } from 'react';

function Login() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
})

function onChangeHandler(e) {
  e.target.name === 'username' ? 
  setLoginForm({...loginForm, username: e.target.value}) : 
  setLoginForm({...loginForm, password: e.target.value})
  console.log(e);
}

function onSubmit(e) {
  e.preventDefault()
  console.log('test');
}
console.log(loginForm);
return (
  <form>
    <input 
      placeholder='Username' 
      name='username' 
      value={loginForm.username} 
      type='text'
      onChange={onChangeHandler}/>
      
    <input 
      placeholder='Password' 
      name='password' 
      value={loginForm.password}
      type='password'
      onChange={onChangeHandler}/>
    <br></br>
    <a onClick={onSubmit} 
      href="#">
      Submit
    </a>
  </form>
)
}

export default Login;
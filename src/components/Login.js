import React,  { useState } from 'react';

function Login(props) {
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

return (
  <form>
    <input placeHolder='Username' name='username' value={loginForm.username} onChange={onChangeHandler}/>
    
    <input placeHolder='Password' name='password' value={loginForm.password} onChange={onChangeHandler}/>
    {/* <br></br>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit */}
    {/* </a> */}
  </form>
)
}

export default Login;
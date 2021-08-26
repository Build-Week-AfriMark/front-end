
import React, { useState } from 'react';

function SignUp(props) {
    const [signUpForm, setSignUForm] = useState({
        username: '',
        password: ''
    })
    console.log('x');
    console.log(props)


    function onChangeHandler(e) {
        e.target.name === 'username' ? setSignUForm({...signUpForm, username: e.target.value}) : setSignUForm({...signUpForm, password: e.target.value})
        console.log(e);
    }
    function onSubmit(e) {
      e.preventDefault()
    }
    console.log('x');
    return (
      <div>
        <h2>Create a New Account <br></br>Sign up!</h2>
        <form>
          <input 
            placeholder='Username' 
            name='username'
            value={signUpForm.username} 
            onChange={onChangeHandler}
            type='text'  
          />

          <input 
            placeholder='Password' 
            name='password' 
            value={signUpForm.password} 
            onChange={onChangeHandler} 
            type='password'
          />
          <a onClick={onSubmit} href="#">Submit</a>
        </form>
      </div>

    )
}

export default SignUp;



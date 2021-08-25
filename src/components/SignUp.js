
import React, { useState } from 'react';
import axios from 'axios'
import { throwStatement } from '@babel/types';

import { useHistory } from 'react-router-dom'

function SignUp(props) {
    const [signUpForm, setSignUForm] = useState({
        username: '',
        password: ''
    })


    const { push } = useHistory()

    function onChangeHandler(e) {
        e.target.name === 'username' ? setSignUForm({...signUpForm, username: e.target.value}) : setSignUForm({...signUpForm, password: e.target.value})
        console.log(e);
    }
    function onSubmit(e) {
      e.preventDefault()
      axios.post('https://build-week-afrimark.herokuapp.com/api/auth/register', signUpForm)
        .then(res => console.log(res), push('/login'))
        .catch(err => console.log(err))
    }

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



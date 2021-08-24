
import React, { useState } from 'react';

function SignUp(props) {
    const [signUpForm, setSignUForm] = useState({
        username: '',
        password: ''
    })

    function onChangeHandler(e) {
        e.target.name === 'username' ? setSignUForm({...signUpForm, username: e.target.value}) : setSignUForm({...signUpForm, password: e.target.value})
        console.log(e);
    }
    function onSubmit(e) {
      e.preventDefault()
    }

    return (
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

    )
}

export default SignUp;



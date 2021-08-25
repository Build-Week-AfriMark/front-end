
import React, { useState } from 'react';

function Product(props) {
    const [productForm, setProductForm] = useState({
        name: '',
        location: '',
        description: '',
        price: ''
    })

    function onChangeHandler(e) {
      if (e.target.name === 'name') {
        console.log('x');
        setProductForm({...productForm, name: e.target.value}) 
        } else if (e.target.value === 'location') {
          
        }
        // e.target.name === 'name' ? setProductForm({...productForm, name: e.target.value}) : setProductForm({...productForm, password: e.target.value})
        // console.log(e);
    }
    function onSubmit(e) {
      e.preventDefault()
    }

    return (
        <form>
            <input 
              placeholder='Username' 
              name='username'
              value={productForm.username} 
              onChange={onChangeHandler}
              type='text'  
            />

            <input 
              placeholder='Password' 
              name='password' 
              value={productForm.password} 
              onChange={onChangeHandler} 
              type='password'
            />
        
        
    <a onClick={onSubmit} href="#">Submit</a>
        </form>

    )
}

export default Product;

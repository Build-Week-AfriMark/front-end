import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  name: '',
  price: '',
  location: '',
  description: '',
  category: '',
  url: ''
}

const ProductForm = (props) => {

  const [formValues, setFormValues] = useState(initialFormValues)
  
   const onSubmit = evt => {
     evt.preventDefault();

     const newProduct = {
       name: formValues.name,
       price: formValues.price,
       location: formValues.location,
       description: formValues.description,
       category: formValues.category,
       url: formValues.url
     }
     console.log(newProduct);
   }

   const onChange = evt => {
     const { name, value } = evt.target
     console.log(evt)
     console.log(evt.target)
     //const valueToUse = type === 'checkbox' ? checked : value;

     setFormValues({...formValues, [name]: value})
     console.log(formValues);
   }

  return (
    <form className='form container' onSubmit={onSubmit}>

      
      <h1>Add a New Product</h1>


        <div className='form-group inputs'>
          <h4>General Information</h4>
          <label>Name
            <input className="productInput"
              value={formValues.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>

          <label>Price
            <input className="productInput"
              value={formValues.price}
              onChange={onChange}
              name='price'
              type='text'
            />
          </label>

          <label>Location
            <select
              onChange={onChange}
              value={formValues.location}
              name='location'
            >
              <option value=''>- Where AreYou? -</option>
              <option value='L1'>Lagos</option>
              <option value='L2'>Joburg</option>
              <option value='L3'>Kinsasha</option>
              <option value='L4'>Kampala</option>
            </select>
          </label>

          <label>Description
            <select
              onChange={onChange}
              value={formValues.description}
              name='description'
            >
              <option value=''>- What Is It? -</option>
              <option value='L1'>This</option>
              <option value='L2'>That</option>
              <option value='L3'>The Other</option>
              <option value='L4'>Another</option>
            </select>
          </label>
        </div>
      </form>
  )
}

export default ProductForm;


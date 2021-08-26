
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

export default function ProductForm(props) {

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


    // validate(name, value)
    // setFormValues({
    //   ...formValues,
    //   [name]: value
    // })
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    console.log(evt)
    console.log(evt.target)
    //const valueToUse = type === 'checkbox' ? checked : value;

    setFormValues({...formValues, [name]: value})
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        {/* <h2>Add a Product</h2> */}
      </div>

      
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
}




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
     axios.post('https://build-week-afrimark.herokuapp.com/api/items/add-item', newProduct)
      .then((res) => console.log(res))
      .catch((err) => alert(err))
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
          <label>Product Name
            <input className="productInput"
              value={formValues.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>

          <label> Your Price
            <input className="productInput"
              value={formValues.price}
              onChange={onChange}
              name='price'
              type='text'
            />
          </label>
          <label>Product Description
            <input className="productInput"
              value={formValues.description}
              onChange={onChange}
              name='description'
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
              <option value='lagos'>Lagos</option>
              <option value='joburg'>Joburg</option>
              <option value='kinsasha'>Kinsasha</option>
              <option value='kampala'>Kampala</option>
            </select>
          </label>

          <label>Category
            <select
              onChange={onChange}
              value={formValues.category}
              name='category'
            >
              <option value=''>Pick One</option>
              <option value='pantry'>Pantry</option>
              <option value='peas'>Peas</option>
              <option value='fashion'>Fashion</option>
              <option value='technology'>Technology</option>
              <option value='wellness'>Wellness</option>
            </select>
          </label>
        </div>
      </form>
  )
}

export default ProductForm;


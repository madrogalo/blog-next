import React, { useReducer, useState } from 'react'
import {postOrderData} from '../utils'

export default function Order() {
  const initValues = {
    name: '',
    tel: '',
    pizza: ''
  }

  const [formValues, setFormValues] = useReducer(
    (curValues, newValues) => ({...curValues, ...newValues}), initValues
  )

  function handleFormChange(e){
    console.log('e', e.target.name);
    const {name, value } = e.target
    setFormValues({[name]: value})
  }


  const postOrder = () => {
    postOrderData('https://bot-test-blog.herokuapp.com/',  JSON.stringify(formValues))
    .then(setFormValues(initValues))
  }
  


  return (
    <div>
      <h1>order</h1>

      <form>
        <label>Імя</label> <br/>
        <input
          name='name'
          placeholder='Ваше імя'
          type='text' 
          value={formValues.name} 
          onChange={handleFormChange}
        />
        <br/>
        <label>Телефон</label> 
        <br/>
        <input 
          name='tel'
          placeholder='+380999999999' 
          type='tel' 
          value={formValues.phone} 
          onChange={handleFormChange}
        />
        <br/>
        <label>Піца</label> 
        <br/>
        <input 
          name='pizza'
          type='text' 
          value={formValues.pizza} 
          onChange={handleFormChange}
        />
      </form>

      <button
        onClick={postOrder}
        style={{marginTop: 20}}
      >
        Post Order
      </button>  
    </div>
  )
}

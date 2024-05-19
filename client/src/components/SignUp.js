import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [formData,setFormData]= useState({})

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
    }
  return (
    <div className="container my-container">
      <h5>Signup</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          required
          name="fname"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="last name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={handleChange}
        />
        <Link to="/login"><p>Already have a account? Click here</p></Link>
        <button className="btn #673ab7 deep-purple" type='submit'>submit</button>
      </form>
    </div>
  );
}

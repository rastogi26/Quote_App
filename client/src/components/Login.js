import React, { useState } from 'react'

export default function Login() {
     
    const [formData,setFormData]= useState({})

    const handleChange = (e)=>{
        setFormData({
           ...formData, //to make copy
           [e.target.name]:e.target.value

        })
    }
   


    const handleSubmit = (e)=>{
           e.preventDefault()  //page will not refresh
           console.log(formData);
    }

  return (
    <div className="container my-container">
      <h5>Login</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name='email'
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name='password'
          onChange={handleChange}  //passing only defination, react wil call the evenyt automatically
          required
        />
        <button className="btn #673ab7 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

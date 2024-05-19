import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
     
    const [formData,setFormData]= useState({})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setFormData({
           ...formData, //to make copy
           [e.target.name]:e.target.value

        })
    }
   


    const handleSubmit = (e)=>{
           e.preventDefault()  //page will not refresh
           console.log(formData);
           navigate("/")
    }

  return (
    <div className="container my-container">
      <h5>Login</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange} //passing only defination, react wil call the evenyt automatically
          required
        />
        <Link to="/signup">
          <p>Don't have an account? Click here</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

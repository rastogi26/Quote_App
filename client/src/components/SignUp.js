import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SIGNUP_USER } from '../gqlOperations/mutations'

export default function Signup() {

    const [formData,setFormData]= useState({})
    const[signupUser,{data,loading,error}]= useMutation(SIGNUP_USER)

    // if(loading)return <h1>Loading</h1>
    if (loading) {
      return (
        <div className="progress">
          <div className="indeterminate">
            <h2>Loading</h2>
          </div>
        </div>
      );
    }
   

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(formData);
        signupUser({
          variables:{
            userNew:formData
          }
        });
    }
  return (
    <div className="container my-container">
    {
      error &&
      <div className='red card-panel'>{error.message}</div>
    }
    {
      data && data.user &&
      <div className='green card-panel'>{data.user.fname} is successfully register.</div>

    }
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

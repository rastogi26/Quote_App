import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_USER } from '../gqlOperations/mutations'

export default function Login() {
     
    const [formData,setFormData]= useState({})
    const navigate = useNavigate()
    const[loginUser,{data,loading,error}] = useMutation(LOGIN_USER,{
      onCompleted(data){
        localStorage.setItem("token",data.user.token)
        navigate("/")
      }
    })

    if(loading)
      {
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
           ...formData, //to make copy
           [e.target.name]:e.target.value

        })
    }
   


    const handleSubmit = (e)=>{
           e.preventDefault()  //page will not refresh
          //  console.log(formData);
          //  navigate("/")
          loginUser({
            variables: {
              userSignin:formData
            },
          });
    }

  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
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

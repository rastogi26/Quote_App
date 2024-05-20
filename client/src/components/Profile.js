import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_MY_PROFILE } from '../gqlOperations/queries';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const {loading,error,data} = useQuery(GET_MY_PROFILE)
  const navigate = useNavigate()

  if (!localStorage.getItem("token")) {
    navigate("/login")
    return <h1>Unauthorized</h1>
  }
  if (loading) {
    return (
      <div className="progress">
        <div className="indeterminate">
          <h2>Loading</h2>
        </div>
      </div>
    );
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="container my-container">
      <div className='center-align'>
        <img className="circle" style={{border: "2px solid", marginTop:"10px"}} src={`https://robohash.org/${data.user.fname}.png?size=200x200`} alt="pic" />
        <h5>{data.user.fname} {data.user.lname}</h5>
        <h6>Email:- {data.user.email}</h6>
      </div>
      <h3>Your Quotes</h3>
      {
        data.user.quotes.map(quo=>{
          return (
            <blockquote>
              <h6>{quo.name}</h6>
            </blockquote>
          );
        })
      }

    </div>
  );
}

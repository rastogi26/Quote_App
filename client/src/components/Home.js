import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_ALL_QUOTES } from '../gqlOperations/queries';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
         
  const {loading,error,data} = useQuery(GET_ALL_QUOTES)
  const navigate = useNavigate()
  
  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h1>Unauthorized, Please login</h1>;
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
    console.log(error.message);
   }
   if (data.quotes.length ===0 ) {
    return <h1>No quotes available</h1>
   }

  return (
    <div className="container">
    {
      data.quotes.map(quote=>{
        return (
          <blockquote>
            <h6>{quote.name}</h6>
            <Link to={`/profile/${quote.by._id}`}>
              <p className="right-align">~{quote.by.fname}</p>
            </Link>
          </blockquote>
        );
      })
    }
    </div>
  );
}

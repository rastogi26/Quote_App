import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_QUOTE } from '../gqlOperations/mutations'


export default function CreateQuote() {
    const [quote,setQuote]=useState("")
    const [createQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
      refetchQueries: ["getAllQuotes", "getMyProfile"], //refresh every time  getAllQuotes when new quote created so that apoloclient dont not take from cache
    });


    const handleSubmit= (e)=>{
        e.preventDefault()
        // console.log(quote);
        createQuote({
          variables:{
            name:quote
          }
        })
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

    // if (error) {
    //   console.log(error.message); 
    // }
    if (data) {
      console.log(data);
    }
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && <div className="green card-panel">{data.quote}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write your quote here...."
        />
        <button className="btn green" type="submit">
          Happy Quote!!
        </button>
      </form>
    </div>
  );
}

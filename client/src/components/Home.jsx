import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ALL_QUOTES } from '../graphql/queries'

export default function Home() {

  // const {loading , error , data} = useQuery(GET_ALL_QUOTES)

  // if(loading) return <h1>Loading</h1> 
  // if(error) console.log(error.message);
  useEffect(async()=>{
    fetch("https://localhost:4000",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        query:`
        query getAllQuotes{
          quotes{
              name
              by{
                  _id
                  firstName
              }
          }
      }
        `
      })
    }).then(r=>r.json()).then(d=>console.log(d)
    )
  },[])
  
  return (
    <div className='container'>
      hello
        {/* {data.quotes.map(q=>{
          return(
            <blockquote>
               <h4>{q.name}</h4>
              <h6>{q.by.name}</h6> 
            </blockquote>
          )
        })} */}
    </div>
  )
}

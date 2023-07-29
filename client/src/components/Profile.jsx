// import React from 'react'
export default function Profile() {
    const random = "bruh"
  return (
    <div className="container">
        <div>
            <img src={`https://robohash.org/${random}.png`} alt="pic" height={"100%"}/>
            <h1>dihadi</h1>
            <h5>email@email.com</h5>
        </div>
        <blockquote>
            <h6>Quotes blaj bal</h6>
            <p className="right-align">ramesh</p>
        </blockquote>
    </div>
  )
}

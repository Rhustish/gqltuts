import React from 'react'

export default function CreateQuote() {

    const [x,setX] = React.useState("")
    function submitHandler(e){
        e.preventDefault();
        console.log(x);
        
    }

  return (
        <div className="container" style={{width:"50vw"}}>
        <h5 style={{fontWeight:"bolder",}}>New Quote</h5>
        <form onSubmit={submitHandler}>
            <input type="text" name='x' placeholder='Enter your Quote ' required value={x} onChange={(e)=>setX(e.target.value)}/> <br />
            <button className='btn deep-purple' type='submit'>Submit</button>
        </form>
    </div>
  )
}

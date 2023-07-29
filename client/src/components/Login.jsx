import React from 'react'

export default function Signup() {

    const [formData,setFormData]  = React.useState({"email":"","password":""})
    const onChangeHandler = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        }) 
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(JSON.stringify(formData));
    }

  return (
    <div className="container">
        <h5 style={{fontWeight:"bolder"}}>Login here</h5>
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <input type="email" name='email' placeholder='email' required value={formData.email} onChange={onChangeHandler}/> <br />
            <input type="password" name='password' placeholder='password' required value={formData.password} onChange={onChangeHandler}/>
            <button className='btn deep-purple' type='submit'>Submit</button>
        </form>
    </div>
  )
}

import React from 'react'

export default function Login() {

    const [formData,setFormData]  = React.useState({})
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
        <h5 style={{fontWeight:"bolder"}}>Signup here</h5>
        <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" name='firstName' placeholder='First Name' required value={formData.firstName} onChange={onChangeHandler}/> <br />
        <input type="text" name='lastName' placeholder='Last Name' required value={formData.lastName} onChange={onChangeHandler}/> <br />
            <input type="email" name='email' placeholder='Email' required value={formData.email} onChange={onChangeHandler}/> <br />
            <input type="password" name='password' placeholder='Password' required value={formData.password} onChange={onChangeHandler}/>
            <button className='btn deep-purple' type='submit'>Submit</button>
        </form>
    </div>
  )
}

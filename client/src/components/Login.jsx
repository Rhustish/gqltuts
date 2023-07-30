import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
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
        navigate("/");
    }

  return (
    <div className="container">
        <h5 style={{fontWeight:"bolder"}}>Login here</h5>
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <input type="email" name='email' placeholder='email' required value={formData.email} onChange={onChangeHandler}/> <br />
            <input type="password" name='password' placeholder='password' required value={formData.password} onChange={onChangeHandler}/>
            <Link to="/signup">Create new account??</Link> <br />
            <button className='btn deep-purple' type='submit'>Submit</button>
        </form>
    </div>
  )
}

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom-Nav.css'; // Import your custom CSS file
import 'animate.css/animate.min.css';
import {Nav,Navbar } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

export const Signup = () => {
   const [name,setName] = useState()
   const [email,setEmail] = useState()
   const [password,setPassword] = useState()
  

const handleSubmit=(e)=>
{
  e.preventDefault();
  axios.post('',{name,email,password})
  .then(result=>console.log(result))
  .catch(err=> console.log(err))
}

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-dark'>
     <div className='form_container p-5 rounded bg-white' >
     <form onSubmit={handleSubmit}>
     
     <h2 className='text-center underline '>
  <Navbar.Brand href="#home" className='text-center fs-3 fw-bolder text-warning'>&#x270E;BLOG IT</Navbar.Brand>
  </h2> 
<h1 className='text-center text-dark'>
   SIGN UP
   </h1>
  
   <div className='mb-2'>
<label htmlFor="email" className="form-label fs-2 text-center text-warning">Email</label>
<input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
</div>

<div className='mb-2'>
<label htmlFor="username" className="form-label fs-2 text-center text-warning">Username</label>
<input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
</div>

<div className='mb-2'>
<label htmlFor="password" className="form-label fs-2 text-center text-warning content-center mb-2">Password</label>
<input type="password" className="form-control mb-2" onChange={(e)=>setPassword(e.target.value)} />
</div>
</form>
<div className='d-grid'>
<button className='btnz rounded mt-2 content-center'>Sign Up</button>

<p className='text-end d-inline'>
Already a user?<Nav.Link href="/login" className='d-inline' >Login</Nav.Link>
</p>

     </div>
    
     </div>
    </div>
  )
}
export default Signup;
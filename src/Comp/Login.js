import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom-Nav.css'; // Import your custom CSS file
import 'animate.css/animate.min.css';
import {Nav,Navbar } from 'react-bootstrap';

export const Login = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-dark'>
     <div className='form_container p-5 rounded bg-white' >
     <form>
     
     <h2 className='text-center underline '>
  <Navbar.Brand href="#home" className='text-center fs-3 fw-bolder text-warning'>&#x270E;BLOG IT</Navbar.Brand>
  </h2> 
<h1 className='text-center text-dark'>
   LOGIN
   </h1>
  
<div className='mb-2'>
<label htmlFor="username" className="form-label fs-2 text-center text-warning">Username</label>
<input type="text" className="form-control " />
</div>

<div className='mb-2'>
<label htmlFor="password" className="form-label fs-2 text-center text-warning content-center mb-2">Password</label>
<input type="password" className="form-control mb-2" />
</div>

<div className='d-grid'>
<button className='btnz rounded mt-2 content-center' onClick={<Nav/>} >Sign In</button>

<p className='text-end'>
Dont have an account?<Nav.Link href="/signup" className='d-inline' >Sign up</Nav.Link>
</p>

     </div>
     </form>
     </div>
    </div>
  )
}
export default Login;
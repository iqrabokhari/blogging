import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './Custom-Nav.css'; // Import your custom CSS file
import 'animate.css/animate.min.css';
function AppNavbar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className='p-5 container-fluid animate__animated animate__fadeIn'>
            <Navbar.Brand href="#home" className='mr-4 fs-3 fw-bolder text-warning'>&#x270E;BLOG IT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/home" className='custom-nav-link d-inline '>Home</Nav.Link>
                    <Nav.Link href="/createblog" className='custom-nav-link  ' >CreateBlog</Nav.Link>         
                    <Nav.Link href="/liked" className='custom-nav-link  ' >Liked</Nav.Link>
                    <Nav.Link href="/myblogs" className='custom-nav-link  ' >myBlogs</Nav.Link>
                    <input type='search ' className='custom-search-input p-1' placeholder='enter blog category' style={{ borderBlockColor:"yellow"}}>
                    </input>
                    
                </Nav>
               
               <Nav className='text-end'>
               <Nav.Link href="/editprofile" className='custom-nav-link d-inline ' >Edit Profile</Nav.Link>
               <Nav.Link href="/signout" className='custom1-nav-link text-end'>Sign Out</Nav.Link>
               </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;

import React from 'react';
import Nav from './Comp/Nav.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Comp/Home.js';
import Signout from './Comp/Signout.js';
import Login from './Comp/Login.js';
import Signup from './Comp/Signup.js';
export const App = () => {
  return (
    <div>
     

      <BrowserRouter>
      <Nav/>
      <Routes>

        
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/signout" element={<Signout/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    

      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
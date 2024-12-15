import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

 return (
    <>
    <header>
        <h1>QutoesHub</h1>
        <div onClick={()=>menuBtn} className='menu-bar'>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <nav>
           <ul>
           <li ><Link className='list' to="/" style={{color:"goldenrod"}}>Home</Link></li>
           <li  ><Link className='list'to="addpost" style={{color:"goldenrod"}}>Add Post</Link></li>
           <li  ><Link className='list'to="about" style={{color:"goldenrod"}}>About Us</Link></li>
          </ul>
        </nav>
      </header>
      
    </>
  )
}

export default Header

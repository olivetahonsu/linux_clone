import React from 'react';
import './header.css';



export default function Header() {
  return (
    <div className='header'>
      
      <img src="http://prodclassroom.linuxjobber.com/assets/image/Final-Logo.png" alt="" />
      <h3 className='class-pro'>Classroom Profile</h3>
      <p className='goto-class'>Go to Classroom <span className='angle-right'><i className="fa-solid fa-angle-right"></i></span></p>

    </div>
  )
}

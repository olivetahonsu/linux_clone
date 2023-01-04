import React from 'react';
import './profile.css';


export default function Profile() {
  return (
    <div className='profile'>

        <img src="images/david.jpg" alt='' id='profile-img'/>
        <span><i class="fa-solid fa-camera" Style="color: #8f1734; margin-left:50%; margin-right:auto;"></i></span>
        <h4 className='profile-name'>David Ahonsu</h4>
       <div className='profile-details'><span><i class="fa-solid fa-user" Style="background-color: lightsteelblue; width:10px; height:12px; border-radius:10px; padding:10px"></i></span><p className='profile-text'>Profile</p><span><i className="fa-solid fa-angle-right" Style="float:right"></i></span></div> 
       <div className='profile-details'><span><i class="fa-solid fa-graduation-cap" Style="background-color: lightsteelblue; width:10px; height:12px; border-radius:10px; padding:10px"></i></span><p className='profile-text'>Course</p><span><i className="fa-solid fa-angle-right"></i></span></div> 
       <div className='profile-details'><span><i class="fa-solid fa-check" Style="background-color: lightsteelblue; width:10px; height:12px; border-radius:10px; padding:10px"></i></span><p className='profile-text' Style="margin-left:18px; margin-right:15px">Attendance</p><span><i className="fa-solid fa-angle-right"></i></span></div> 
       <div className='logout'><span><i class="fa-solid fa-arrow-right-from-bracket"></i></span><p Style="margin-left:10px">Logout</p></div>

    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import './form.css'

export default function Form() {

  const [studAnswer, setStudAnswer] = useState(false);

    const studentQuestion =()=>{
      
        setStudAnswer(true);
        console.log('you clicked me')  
      
    }

  return (
        <form className='form' action="">
            <i id="circle-check " class="fa-solid fa-circle-check" Style="color: #8f1734; margin-left:auto"></i>

           <div id="first" className='questions'> <p><span className='numbers'>1.</span>Course of study in school</p>
           <input type="text" placeholder='Course of study' />
           </div>
            

            <div className='questions'><p><span className='numbers'>2.</span>Are you a student? <span style={{color:'red'}} className={studAnswer? 'show':'hidden'}><i className="fa-solid fa-check"></i> Yes</span></p> 
            <span id='yes' onClick={()=>studentQuestion()} className={studAnswer? 'hidden':'show'}>Yes</span> <button id='no' className={studAnswer? 'hidden':'show'}>No</button>
            <input type="text" placeholder='Course of study' className={studAnswer? 'show':'hidden'} style={{width: 150, marginLeft: 0, float:'left'}}/> <input  style={{width: 155}} type="text" placeholder='Expected graduation date' className={studAnswer? 'show':'hidden'}/>
            </div>

            

            <div className='questions'><p><span className='numbers'>3.</span>Did you graduate?</p>
            <button  className='yes'>Yes</button> <button className='no'>No</button>
            </div>

            <div className='questions'><p><span className='numbers'>4.</span>Does your country require post-graduation service?</p>
            <button  className='yes'>Yes</button> <button className='no'>No</button>
            </div>
            
        </form>
  )
}

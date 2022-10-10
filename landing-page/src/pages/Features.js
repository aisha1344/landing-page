import React from 'react'
import './Features.css'
function Features() {
    return (
        <>
       <div className='main-feature' id='FEATURE'>
           <div className='FEATURES'>
               <h2>FEATURES</h2>
               <div className='empty'></div>
               <div className='middle-feature'>
                   <div className='box'>
                   <span><i class="fas fa-comments"></i></span>
                   <h3>LOREM IPSUM</h3>
                   <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                   </div>
                   <div className='box'>
                   <span><i class="fas fa-microscope"></i></span>
                   <h3>LOREM IPSUM</h3>
                   <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                   </div>
                   <div className='box'>
                   <span><i class="fas fa-users"></i></span>
                   <h3>LOREM IPSUM</h3>
                   <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                   </div>
                   <div className='box'>
                   <span><i class="fas fa-outdent"></i></span>
                   <h3>LOREM IPSUM </h3>
                   <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                   </div>
               </div>
           </div>
       </div>
        </>
    )
}

export default Features

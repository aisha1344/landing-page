import React from 'react'
import './About.css'
import image from'../pages/about.jpg'
function About() {
    return (
        <div>
            <div className='main-about' id='ABOUT'>
                <div className='about'>
                    <div className='img'>
                        <img src={image} alt=''/>
                    </div>
                    <div className='rside'>
                        <h2>ABOUT US</h2>
                        <div className='empty'></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut
                         enim ad minim <br/>quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea ad minim <br/> consequat. Lorem ipsum dolor sit amet, consectetur
                             adipiscing commodo<br/> elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali.</p>
                       <div className='list'>
                           <div className='list1'>
                           <ul>Why Choose Us?
                            <li>Lorem ipsum dolor</li>
                            <li>Tempor incididunt</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Incididunt ut labore</li>
                        </ul>
                           </div>
                           <div className='list2'>
                           <ul>
                            <li>Lorem ipsum dolor</li>
                            <li>Tempor incididunt</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Incididunt ut labore</li>
                        </ul>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

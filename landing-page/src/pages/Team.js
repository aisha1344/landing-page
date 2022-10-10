import React from 'react'
import i1 from './img/team/01.jpg'
import i2 from './img/team/02.jpg'
import i3 from './img/team/03.jpg'
import i4 from './img/team/04.jpg'
import './Team.css'
function Team() {
    return (
        <>
            <div className='team' id='TEAM'>
                <div className='team-con' >
                <h2>MEET THE TEAM</h2>
                <div className='empty'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                <div className='middle-team'>
                    <div className='team'>
                        <img src={i1}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis sed dapibus leo nec ornare diam sedasd commodo
nibh ante facilisis bibendum dolor feugiat at.</p>
                        <button>Read More</button>
                    </div>
                 <div className='team'>
                        <img src={i3}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis sed dapibus leo nec ornare diam sedasd commodo
nibh ante facilisis bibendum dolor feugiat at.</p>
                        <button>Read More</button>
                    </div>
                    <div className='team'>
                        <img src={i4}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis sed dapibus leo nec ornare diam sedasd commodo
nibh ante facilisis bibendum dolor feugiat at.</p>
                        <button>Read More</button>

                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Team

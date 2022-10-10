import React from 'react'
import im1 from './img/testimonials/01.jpg'
import im2 from './img/testimonials/02.jpg'
import im3 from './img/testimonials/03.jpg'
import im4 from './img/testimonials/04.jpg'
import im5 from './img/testimonials/05.jpg'
import im6 from './img/testimonials/06.jpg'
import './OurClients.css'
function OurClients() {
    return (
        <>
            <div id='TESTIMONIALS' className='main-clients'>
                <div className='con-clients'>
                    <h2>WHAT OUR CLIENTS SAY</h2>
                    <div className='empty'></div>
                    <div className='clients'>
                        <div className='client'>
                            <div className='innerimg'>
                            <img src={im1} />
                            </div>
                            <div className='innertxt'>
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <h3>- John Doe</h3>
                            </div>
                        </div>
                        <div className='client'>
                            <div className='innerimg'>
                            <img src={im2} />
                            </div>
                            <div className='innertxt'>
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <h3>- John Doe</h3>
                            </div>
                        </div>
                        <div className='client'>
                            <div className='innerimg'>
                            <img src={im3} />
                            </div>
                            <div className='innertxt'>
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <h3>- John Doe</h3>
                            </div>
                        </div>
                        </div>
                        <div className='clients'>
                        <div className='client'>
                            <div className='innerimg'>
                            <img src={im4} />
                            </div>
                            <div className='innertxt'>
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <h3>- John Doe</h3>
                            </div>
                        </div>
                        <div className='client'>
                            <div className='innerimg'>
                            <img src={im5} />
                            </div>
                            <div className='innertxt'>
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <h3>- John Doe</h3>
                            </div>
                        </div>
                        <div className='client'>
                            <div className='innerimg'>
                            <img src={im6} />
                            </div>
                            <div className='innertxt'>
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <h3>- John Doe</h3>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            
            
        </>
    )
}

export default OurClients

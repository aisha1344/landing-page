import React from 'react'
import im1 from './img/portofile images/01-small.jpg'
import im2 from './img/portofile images/02-small.jpg'
import im3 from './img/portofile images/03-small.jpg'
import im4 from './img/portofile images/04-small.jpg'
import im5 from './img/portofile images/05-small.jpg'
import im6 from './img/portofile images/06-small.jpg'
import im7 from './img/portofile images/07-small.jpg'
import im8 from './img/portofile images/08-small.jpg'
import im9 from './img/portofile images/09-small.jpg'
import './Gallery.css'
export default function Gallery() {
    return (
        <>
            <div className='gallery-main' id='GALLERY'>
                <div className='gallery'>
                    <h2>GALLERY</h2>
                    <div className='empty'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                </div>
                <div className='images'>
                    <img src={im1} />
                    <img src={im2} />
                    <img src={im3} />
                    <img src={im4} />
                    <img src={im5} />
                    <img src={im6} />
                    <img src={im7} />
                    <img src={im8} />
                    <img src={im9} />
                </div>
            </div>
        </>
    )
}

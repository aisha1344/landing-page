import React from 'react'
import './ContactUs.css';
function ContactUs() {
    return (
        <>
            <section className='contact-main' id='CONTACT'>
                <div className='contect'>
                    <div className='con-middle'>
                    <h2>GET IN TOUCH</h2>
                    <div className='empty'></div>
                    <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                    <input type='text' placeholder='NAME'/>
                    <input type='text' placeholder='Email'/>
                    <div>
                    <textarea placeholder='Message'/>
                    </div>
                    
                    <button>SEND MESSAGE</button>
                        
                    </div>
                    <div className='con-middle-r'>
                        <h4>Contact Info</h4>
                        <i class="fas fa-map-marker-alt">Address</i>
                        <p>4321 California St, San Francisco, CA 12345</p>
                        <i class="fas fa-phone">Phone</i>
                        <p>+1 123 456 1234</p>
                        <i class="fas fa-envelope">Email</i>
                        <p>ayeshaosman11@gmail.com</p>
                    </div>
                </div>
                <div className='empty'> </div>
               <div className='icons'>
               <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
               </div>
            </section>
            <div className='footer'>
                <p>© 2021 challange React Land Page. Designed by <a href='/' >Ayesha Web App Dev</a> </p>
            </div>
        </>
    )
}

export default ContactUs

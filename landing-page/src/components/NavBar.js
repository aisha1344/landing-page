import React from 'react'
import '../components/NavBar.css'
import '../App.css'
const  NavBar = ()=>{
    return(
        <>
            <div className='nav'>
            <div className='main'>
           <div className='logo'>
               <h2> the legend one of kind </h2>
           </div>
           <div className='menus'>
               <ul>
                      <li><a href='#'>Home</a></li>
                      <li> <a href='#ABOUT'>ABOUT</a></li>
                
                      <li><a href='#TEAM'>TEAM</a></li>
                      <li> <a href='#CONTACT'>Join Us</a> </li>
               </ul>
           </div>
            </div>
            <div className='middle'>
                <h2>WE ARE A <br/> LANDING PAGE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus<br/>  leo nec
                    ornare diam sed commodo nibh ante facilisis bibendum.</p>
                <button className='btnlearn'>LEARN MORE</button>
            </div>
            </div>
        </>
    )
}

export default NavBar;
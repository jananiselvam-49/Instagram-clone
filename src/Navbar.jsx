import React from 'react'
import textLogo from './assets/text.png';
import './Navbar.css'


function Navbar() {
  return (
    <>
    <div className="navvv">
    <div className="items">
         <img className='textlogo' src={textLogo} alt="" />  
         <div><i className="fa-solid fa-house"></i>Home</div>
         <div><i className="fa-solid fa-magnifying-glass"></i>Search</div>
         <div><i className="fa-regular fa-compass"></i>Explore</div>
         <div><i className="fa-regular fa-circle-play"></i>Reels</div>
         <div><i className="fa-regular fa-message"></i>Message</div>
         <div><i className="fa-regular fa-heart"></i>Notification</div>
         <div><i className="fa-solid fa-plus"></i>Create</div>
         <div><i className="fa-regular fa-circle-user"></i>Profile</div>
         </div>
         <div className="belowitems">
            <div><i className="fa-brands fa-threads"></i>Threads</div>
            <div><i className="fa-solid fa-list"></i>More</div>
         </div>
         
    </div>
     
    </>
  )
}

export default Navbar
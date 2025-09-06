import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';

import './index.css';

function footer() {
  return (
    <div name='Contact' className='footer'>
      <div className='container'>
        <div className='top'>
         <h3>HyfemBox</h3>
         <div className='socials'>
            <a href='https://twitter.com/Hyfem_Box'><FaSquareXTwitter className='icon' /></a>
            <a href='https://www.instagram.com/hyfem_box/'><FaInstagram className='icon' /></a>
            <a href='https://www.linkedin.com/in/yusuf-ayinde-a9251a297/'><FaLinkedin className='icon' /></a>

         </div>
        </div>
        <div className='bottom'>
          <div className='left'>
            <ul>
              <li>About</li>
              <li>Partnership</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className='right'>
          <ul>
              <li>Contacts</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default footer;
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from 'react-scroll';
import './index.css'

function Navbar() {
    const [nav, setNav] = useState(false); 

    const handleNav = () => setNav(!nav);
    const closeMenu = () => setNav(false);


    return (
        <div name='home' className={nav ? 'navBar navBar-bg' : 'navBar'}>
            <div className={nav ? 'logo dark': 'logo'}>
                <h2>HyfemBox</h2>
            </div>
            <ul className='nav-menu'>
               <Link to='Home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='About' smooth={true} duration={500}><li>About</li></Link>
                <Link to='Mystack' smooth={true} duration={500}><li>Stacks</li></Link>
                <Link to='Contact' smooth={true} duration={500}><li>Contacts</li></Link>
                <Link to='Project' smooth={true} duration={500}><li>Projects</li></Link>

                
            </ul>
            <div className='nav-icons'>
                <FaSearch style={{marginRight: '1rem'}} />
                <BsPerson />
            </div>
            <div className='hamburger' onClick={handleNav}>
                {!nav ?(<FaHamburger className='icon' />) : (<AiOutlineClose   style={{color: '#000'}} />)}
                
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                <Link to='Home' smooth={true} duration={500} onClick={closeMenu}><li>Home</li></Link>
                <Link to='About' smooth={true} duration={500} onClick={closeMenu}><li>About</li></Link>
                <Link to='Mystack' smooth={true} duration={500} onClick={closeMenu}><li>Mystack</li></Link>
                   
                </ul>
                <div className='mobile-menu-button'>
                    <div className='menu-icons'>
                        <Link to='Project' smooth={true} duration={500} onClick={closeMenu} ><button className='btn bg-red-600 text-white p-[5px] '>PROJECTS</button></Link>
                        <Link to='Contact' smooth={true} duration={500} onClick={closeMenu}><button className='btn bg-red-700 text-white p-[5px]'>CONTACT</button></Link>
                    </div>
                    <div className='social-icons'>
                        <a href='https://twitter.com/Hyfem_Box'><FaSquareXTwitter className='icon' /></a>
                        <a href='https://www.instagram.com/hyfem_box/'><FaInstagram className='icon' /></a>
                        <a href='https://www.linkedin.com/in/yusuf-ayinde-a9251a297/'><FaLinkedin className='icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

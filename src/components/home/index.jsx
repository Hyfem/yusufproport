import React from 'react';
import portLanding from "../../assets/last.jpeg";
import { Link } from 'react-scroll';

import './index.css'

function Home(){
    return(
        <>
        <div name='Home' className='Land relative w-full h-screen'>
            <img id="image" src={portLanding} alt="/" 
             className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"     
            />


            <div className='layout'></div>
            <div className='content relative z-20 text-center mt-28 px-4 text-white' >
                <div className='left '>
                    <h1>AYINDE YUSUF IFEMI</h1>
                    <h2 className='text-[20px]'>Frontend Web Developer</h2>
                    <p className='text-[20px]'> I focused on meeting deadlines and delivering</p>
                    <p className='text-[17px]'>results — confident working solo or with a team.</p>

                </div>
                <div className='right'>
                    <Link to='Mystack' smooth={true} duration={500}><button className='btn text-white bg-red-700 p-[5px] m-[5px] '>Check Stacks</button></Link> <br/>
                    <a href="/Ayinde_Yusuff_resume.pdf" download="AYINDE Yusuf Resume"><button className='btn text-white bg-red-700 p-[5px] m-[5px]'>Download Resume</button></a>
                </div>

            </div>
        
        </div>

        </>
    )
}
export default Home;
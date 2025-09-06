import React from 'react';
import portLanding from "../../assets/last.jpeg";
import { Link } from 'react-scroll';

import './index.css'

function Home(){
    return(
        <>
        <div name='Home' className='Land relative w-full h-screen'>
            <img id="image" src={portLanding} alt="Landing" 
             className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover -z-10 pointer-events-none"     
            />


            <div className='layout'></div>
            <div className='content ' >
                <div className='left '>
                    <h1>AYINDE YUSUF IFEMI</h1>
                    <h2>Frontend Web Developer</h2>
                    <p> I focused on meeting deadlines and delivering</p>
                    <p>results — confident working solo or with a team.</p>

                </div>
                <div className='right'>
                    <Link to='Mystack' smooth={true} duration={500}><button className='btn text-white bg-red-700 p-[5px] m-[5px] '>Check Stacks</button></Link> <br/>
                    <button className='btn text-white bg-red-700 p-[5px] m-[5px]'>Download Resume</button>
                </div>

            </div>
        
        </div>

        </>
    )
}
export default Home;
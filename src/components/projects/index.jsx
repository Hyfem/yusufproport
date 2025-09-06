import Logo from '../../assets/bakesncravelogo.webp';
import Sign from '../../assets/signature.png';

import { Link } from 'react-router-dom';



import './index.css';

function Projects (){
    return(
        <div name='Project' className='main-container text-white w-full '>
            <h1 className='w-full'>PROJECTS</h1>
            <div className='prj w-full'>
                <div className='box'>
            
                   <img src={Logo} alt="/" className='w-[150px]  Logo ' />

                 <p className='w-full mt-4'>
                    I built the frontend of this website using 
                    React and am currently developing the backend 
                    to add full functionality. 
                 </p>
                 <a href='https://bakencraves.vercel.app/'>
                  <button className='btn p-[5px] m-[5px] text-white bg-red-500 '>Check</button>
                 </a>
                </div>
                <div className='box'>            
                   <img src={Sign} alt="/" className='w-[300px]  Logo mt-20' />
                 <p className='w-full mt-10'>
                   
                   This flight booking site demonstrates UI and user experience,
                    but lacks full booking functionality at the moment  
                 </p>
                 <a href='https://spaceair.netlify.app'><button className='btn p-[5px] m-[5px] text-white bg-red-500 '>Check</button></a>
                </div>
            </div>

        </div>
    )
}

export default Projects;
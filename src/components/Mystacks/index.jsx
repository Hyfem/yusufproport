import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaCss3, FaJs, FaPython } from 'react-icons/fa';
import { SiDjango, SiMysql, SiPostgresql, SiTailwindcss } from 'react-icons/si';

import "./index.css"
import { BsDatabase } from 'react-icons/bs';



function Mystack (){
    return(
        <div name='Mystack' className="mystacks h-[100%] w-full my-10" >
            <h1>MY STACKS</h1>
            <div className="h-fit w-full my-10" >
                <h2>FRONTEND</h2>
                
                <div class="container my-10 w-[80%]">
                 <div class="row gap-4 my-10 w-full justify-center">
                   
                    <div class="col-5 col-lg-3 text-red-500 p-10 rounded ">
                        <FaHtml5 className='htmlicon'/>
                        <p>HTML</p>
                    </div>
                    <div class="col-5 col-lg-3 p-10 rounded text-blue-600">
                        <FaCss3 className='cssicon '/>
                        <p>CSS</p>
                    </div>
                    <div class="col-5 col-lg-3 p-10 rounded text-yellow-500">
                        <FaJs className='jsicon '/>
                        <p>JAVA SCRIPT</p>
                    </div>
                    <div class="col-5 col-lg-3 p-10 rounded text-sky-500">
                        <FaReact className='reacticon '/>
                        <p>REACT</p>
                    </div>
                    <div class="col-5 col-lg-3 p-10 rounded text-cyan-500">
                        <SiTailwindcss className='tailwindsicon '/>
                        <p>TAIL WIND</p>

                    </div>
                    <div class="block col-5 col-lg-3 p-10 justify-center rounded text-purple-600">
                        <p><FaBootstrap className='bootstrapicon '/></p>
                        <p>BOOT STRAP</p>
                    </div>
                 </div>
                </div>

                

            </div>
            <div className="backendstacks w-full my-10">
                <h2>BACKEND</h2>
               
              <div className="h-fit my-10 w-full flex justify-center">
                <div class="container2 p-4 grid grid-cols-2 lg:grid-cols-4  w-[80%]">
                  <div class=" p-12 text-yellow-500">
                    <FaPython className='text-[50px] '/>
                    <p className='text-blue-700'>PYTHON</p>
                  </div>
                  <div class=" p-12 text-gray-500">
                    <BsDatabase className='text-[50px] '/>
                    <p>SQL</p>
                  </div>
                  <div class=" p-12 text-blue-700">
                    <SiMysql className='text-[50px] '/>
                  </div>
                  <div class="p-12 text-green-800">
                    <SiDjango className='text-[50px]  '/>
                    <p>
                        DJANGO
                    </p>
                  </div>
                </div>
              </div>

            </div>
        </div>
    )
}

export default Mystack;
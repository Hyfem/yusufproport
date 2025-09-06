import './index.css'

function About(){
    return(
        <div name='About' className='contentdiv  text-black h-full' >
            <h1 className='about-me w-full h-fit mt-20 mb-5'>About Me</h1>

            <div className='leftnote' >
             
            <h2>
              Hi, I'm Ayinde Yusuf Ifemi, a passionate frontend 
              web developer from Lagos, Nigeria.
            
            </h2>
            <p>
                I’ve always loved computers since high school, 
                but I never imagined I’d one day become a developer. 
            
            
                My journey into tech began in 2022, after i temporarily 
                shotdown my logistics business due to shortage of 
                bikers and increasing government regulations. <br /> 
                I found myself idle and searching for a new 
                path—until I came across a video about web 
                development.
             
            
                 That sparked my curiosity, and I immediately began researching
                 and learning everything I could. <br /> 
                 As an introvert who loves browsing and 
                 exploring new ideas online, web 
                 development felt like the perfect fit. 
            
            
            </p>
           </div>
           <div className='middlenote '>
            <h2>
                I took my first course on Udemy, focusing on 
                frontend fundamentals. From there, 
            </h2>
            <p>
               I moved on
               to SoloLearn, where I learned Angular.
               However, Angular didn’t quite click with 
               me—so I switched to React, and everything 
               changed. 
            
            
                I fell in love with the process,
               the creativity, and the problem-solving. <br />
               After spending about six months learning
               frontend technologies, I wanted to 
               understand the backend side of things
               too.<br /> I explored various options and 
               eventually chose Python, SQL, and Django.
            </p>
               
           </div>
           <div className='rightnote '>
              <h2>
                 Today, I specialize in frontend development,
              </h2>
              <p>
                 and I'm constantly improving my skills.
                 I'm looking forward to working in a
                 collaborative and growth-focused
                 environment where I can bring 
                 ideas to life and grow as a developer.
              </p>
           </div>

        </div>
    )
}
export default About;
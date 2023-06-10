import React from 'react'
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <div className='bg-[url("/sourav.jpg")] bg-cover md:bg-cover h-screen w-[76] bg-center bg-no-repeat flex items-center'>
      <div className='container mx-auto px-4'>
        <div className='max-w-[500px] text-white flex flex-col gap-[40px]'>
          <div className='mt-80 ml-4 md:mt-auto'>
            <h1 className='text-4xl text-[#fffbeb] md:text-5xl md:text-[#020617]'><strong>I'm Sourav Kumar Agarwal</strong></h1>
            <h4 className='text-2xl text-[#fffbeb] md:text-[#020617] mt-3'>
              <Typewriter 
              options={{
                strings:[
                  "Frontend Developer"
                ],
                changeDelay:3,
                changeDeleteSpeed:2,
                autoStart:true,
                loop:true,
              }} />
            </h4>
          </div>
          <div className='bg-black h-[4px] w-[80px] ml-4'></div>
          <div className='text-[#fffbeb] ml-4'>
            <p className='text-[20px]'>“The first step towards getting somewhere is to decide you're not going to stay where you are.”</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

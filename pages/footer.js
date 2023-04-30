import React from 'react'
import Link from 'next/link'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='bg-[url("/footer.jpg")] bg-cover bg-center h-[200px] md:text-[16px] text-white grid md:grid-cols-2 justify-center items-center mt-6'>
          <div className='flex flex-cols-3 justify-center gap-[1rem] items-center font-medium'>
            <h3>Quick Links</h3>
            <Link href="#" className='my-2'>Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
          </div>
          <div className='flex flex-cols-3 justify-center items-center gap-[1.5rem] font-medium'>
            <h3>Social Links</h3>
            <Link href="https://github.com/SouravKAgarwal" target='_blank'>
              <FaGithub className='text-[white] text-[24px]'/>
            </Link>

            <Link href="https://www.linkedin.com/in/sourav-kumar-agarwal09/" target='_blank'>
              <FaLinkedinIn className='text-blue-600 text-[24px]'/>
            </Link>

            <Link href="https://instagram.com/_souravagarwal_09?igshid=Yjk4NWM2ZWVkMw==" target='_blank'>
              <FaInstagram className='text-pink-600 text-[24px]'/>
            </Link>
          </div>
          <div className='flex w-[76rem] justify-center align-center -mb-6'>
            <p className='font-thin'>&copy; 2023|Sourav Kumar Agarwal</p>
          </div>
      </div>
    </div>
  )
}

export default Footer

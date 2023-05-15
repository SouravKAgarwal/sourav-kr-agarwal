import Link from 'next/link'
import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Navbar = ({toggleSideBar}) => {
  return (
    <div className='bg-black fixed top-0 w-[100%] z-10'>
      <div className='container flex mx-auto justify-between justify-items-end items-center py-4'>
        <div className='text-[22px] text-[#f8fafc] px-4 mx-0'>Sourav Kumar Agarwal</div>
          <div className='hidden md:justify-between md:items-center md:flex gap-11'>
            <Link href="#">
              <div className='text-[#f8fafc] hover:text-[#d4d4d8]'>Home</div>
            </Link>
            <Link href="#about">
              <div className='text-[#f8fafc] hover:text-[#d4d4d8]'>About Me</div>
            </Link>
            <Link href="#projects">
              <div className='text-[#f8fafc] hover:text-[#d4d4d8]'>My Projects</div>
            </Link>
            <Link href="#contacts">
              <div className='text-[#f8fafc] hover:text-[#d4d4d8]'>Contact Me</div>
            </Link>
        </div>

        <div className='hidden md:justify-between md:items-center md:flex'>
          <div className='flex gap-[2rem] items-center font-medium'>
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
        </div>

        <div className='md:hidden text-[24px] px-2 text-[#f8fafc] hover:cursor-pointer' onClick={toggleSideBar}>
          <FiMenu/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

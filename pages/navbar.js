import Link from 'next/link'
import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {HiOutlineDownload} from 'react-icons/hi'

const Navbar = ({toggleSideBar}) => {
  return (
    <div className='bg-black fixed top-0 w-[100%] z-10'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div className='text-[24px] text-[#f8fafc] px-4 mx-0'>Sourav Kumar Agarwal</div>
          <div className='hidden md:flex gap-6'>
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
        <Link href='Resume.pdf' download className='btn hidden md:flex border border-[#6b7280] px-4 py-1 text-[#f3f4f6] rounded-[8px] items-center gap-2 hover:bg-[#d4d4d8] hover:text-black transition duration-200'>
          Download CV
          <HiOutlineDownload />
        </Link>

        <div className='md:hidden text-[24px] text-[#f8fafc] pr-4 hover:cursor-pointer' onClick={toggleSideBar}>
          <FiMenu/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

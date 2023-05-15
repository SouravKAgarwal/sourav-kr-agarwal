import React from 'react'
import Link from "next/link"
import {RiCloseFill} from "react-icons/ri"
import { HiOutlineDownload } from 'react-icons/hi'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'


const Sidebar = ({isOpen, toggleSideBar}) => {
  return (
    <div className={`w-screen h-screen ${isOpen?"fixed":"hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}>
      <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-pointer' onClick={toggleSideBar}>
        <RiCloseFill/>
      </div>

      <div className='flex flex-col gap-4 text-[20px] place-items-center'>
        <Link className='hover:text-[#d4d4d8]' onClick={toggleSideBar} href='#'>Home</Link>
        <Link className='hover:text-[#d4d4d8]' onClick={toggleSideBar} href='#about'>About Me</Link>
        <Link className='hover:text-[#d4d4d8]' onClick={toggleSideBar} href='#projects'>My Projects</Link>
        <Link className='hover:text-[#d4d4d8]' onClick={toggleSideBar} href='#contacts'>Contact Me</Link>
        <Link href='Resume.pdf' download className='btn flex border border-[#6b7280] px-4 py-1 text-[#f3f4f6] rounded-[8px] items-center gap-2 hover:bg-[#d4d4d8] hover:text-black transition duration-200'>
          Download CV
          <HiOutlineDownload />
        </Link>
        <div className='flex justify-between items-center'>
          <div className='flex  gap-[2rem] items-center font-medium'>
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
      </div>
    </div>
  )
}

export default Sidebar

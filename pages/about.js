import React from 'react'
import Heading from "./heading"
import {FiSmartphone} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"
import {FaBook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {ImLocation} from "react-icons/im"
import {HiOutlineDownload} from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
      <section className='container mx-auto w-screen px-4 py-10' id="about">
        <Heading title="About Me" />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[5px]'>
            <div>
                <Image className='rounded-[8px]' src="/aboutme.jpg" width={600} height={750} alt="" />
            </div>
            <div>
                <div className='flex item-center w-[370px] md:w-[450px] md:mx-[120px] justify-around mt-4'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex my-2 gap-4 items-center font-medium'>
                            <FiSmartphone className='text-blue text-[22px]'/>
                            Phone
                        </div>
                        <div className='flex my-2 gap-4 items-center font-medium'>
                            <FaBook className='text-[#422006] text-[22px]'/>
                            Education   
                        </div>
                        <div className='flex my-2 gap-4 items-center font-medium'>
                            <ImLocation className='text-[#e11d48] text-[22px]'/>
                            Location 
                        </div><br></br>
                        <div className='flex my-2 gap-4 items-center font-medium'>
                            <GrMail className='text-[#86198f] text-[22px]'/>
                            Gmail
                        </div>
                    </div>

                    <div className='flex flex-col gap-[22px] text-black '>
                        <div className='mt-2'>:</div>
                        <div className='-mt-1'>:</div>
                        <div>:</div>
                        <div className='mt-6'>:</div>
                    </div>

                    <div className='flex flex-col gap-[22px] text-black'>
                        <div className='mt-2'>+91-6001386472</div>
                        <div className='-mt-1'>Rajasthan Technical University</div>
                        <div className=' -mt-0'>Kumarpara Panchali,Bharalumukh,<br></br> Guwahati-781009, Assam</div>
                        <div>aggarwalsaurav948@gmail.com</div>
                    </div>

                </div>

                <div className='flex flex-cols-1 justify-center items-center w-[370px] md:w-[450px] md:mx-[120px] mt-[30px] gap-[70px]'>
                    <div className='flex gap-4 items-center text-[20px] font-medium'>
                        <Link href='Resume.pdf' download className='btn flex border border-[#6b7280] px-4 py-1 text-[#f3f4f6] rounded-[8px] items-center gap-2 hover:bg-[#d4d4d8] hover:text-black transition duration-200'>Download CV<HiOutlineDownload /></Link>
                    </div>
                </div>
                <div className='max-w-[600px] md:mx-[22px]'>
                    <h2 className='font-bold mt-12 mb-10'>I'm Sourav and FrontEnd Developer</h2>
                    <p className='text-[#0f172a]'>Hi! My name is Sourav Kumar Agarwal. I'm a Web Developer, and I'm very passionate and dedicated toward my work. I am very hard-working and very eager to learn new technologies.</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default About

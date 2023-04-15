import React from 'react'
import Heading from "./heading"
import {FaBirthdayCake} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaBook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {ImLocation} from "react-icons/im"
import Button from './button'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
      <section className='container mx-auto w-screen px-4 py-10'>
        <Heading title="About Me" />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[5px]'>
            <div>
                <Image className='rounded-[8px]' src="/aboutme.jpg" width={450} height={550} alt="" />
            </div>
            <div>
                <div className='flex item-center justify-between w-[400px] mt-4'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='flex my-2 gap-4 items-center font-medium'>
                            <FaBirthdayCake className='text-[#ec4899] text-[22px]'/>
                            Birthday
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
                        <div className='mt-2'>09/04/2002</div>
                        <div className='-mt-1'>Rajasthan Technical University</div>
                        <div className=' -mt-0'>Kumarpara Panchali, Bharalumukh,<br></br> Guwahati-781009, Assam</div>
                        <div>aggarwalsaurav948@gmail.com</div>
                    </div>

                </div>

                <div className='container mx-auto flex justify-end place-items-center mt-[30px] gap-[50px] w-[100px]'>
                    <div className='flex gap-4 items-center font-medium'>
                        <FaGithub className='text-[black] text-[24px]'/>
                        <Link href="https://github.com/SouravKAgarwal" target='_blank'>
                        Github
                        </Link>
                    </div>
                    <div className='flex gap-4 items-center font-medium'>
                        <FaLinkedin className='text-[#1e3a8a] text-[24px]'/>
                        <Link href="https://www.linkedin.com/in/sourav-kumar-agarwal09/" target='_blank'>
                        LinkedIn
                        </Link>
                    </div>
                </div>
                <div className='max-w-[450px] '>
                    <h2 className='font-bold mt-12 mb-10'>I'm Sourav and FrontEnd Developer</h2>
                    <p className='text-[#0f172a]'>Hi! My name is Sourav Kumar Agarwal. I'm a Web Developer, and I'm very passionate and dedicated toward my work. I am very hard-working and very eager to learn new technologies.</p>

                    <Button link="/contacts" text="Hire me"/>
                </div>
            </div>
        </div>
      </section>
  )
}

export default About

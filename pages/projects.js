import React from 'react'
import Heading from './heading'
import {GrProjects} from "react-icons/gr"
import Button from './button'

const Projects = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="My Projects" />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
            <div className='shadow-lg flex flex-col rounded-[10px] gap-4 px-8 py-10 bg-[#64748b] text-[#f4f4f5]'>
                <GrProjects className='text-[#ef4444] text-[28px]' />
                <h2 className='font-medium text-[28px]'>QR-Generator</h2>
                <p>It is a utility which can be used to generate QR's for links,text,etc for handy sharing.</p>
                <div className='mt-4'>
                    <img className='w-[500px] rounded-[5px]' src="/qr.jpg" alt=""/>
                </div>
                <Button link ="#" text="Click to view" />
            </div>
            <div className='shadow-lg flex flex-col rounded-[10px] gap-4 px-8 py-10 bg-[#64748b] text-[#f4f4f5]'>
                <GrProjects className='text-[#ef4444] text-[28px]' />
                <h2 className='font-medium text-[28px]'>QR-Generator</h2>
                <p>It is a utility which can be used to generate QR's for links,text,etc for handy sharing.</p>
                <div className='mt-4'>
                    <img className='w-[500px] rounded-[5px]' src="/qr.jpg" alt=""/>
                </div>
                <Button link ="#" text="Click to view" />
            </div>
            <div className='shadow-lg flex flex-col gap-4 rounded-[10px] px-8 py-10 bg-[#64748b] text-[#f4f4f5]'>
                <GrProjects className='text-[#ef4444] text-[28px]' />
                <h2 className='font-medium text-[28px]'>QR-Generator</h2>
                <p>It is a utility which can be used to generate QR's for links,text,etc for handy sharing.</p>
                <div className='mt-4'>
                    <img className='w-[500px] rounded-[5px]' src="/qr.jpg" alt=""/>
                </div>
                <Button link ="#" text="Click to view" />
            </div>
        </div>
        <Heading title="Skills" />
        <p className='text-[#0f172a] -mt-10 mb-10 text-[18px]'>Learning new skills everyday has been a part of my life now. I have learned many new things and continuing to do so. Below are some of the skills which I have gained till date and hope to make a command on it.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <p>React.js</p>
                <div className='relative bg-slate-400 h-[4px] mt-2'>
                    <div className='bg-[#f59e0b] absolute h-[4px] w-[50%]'></div>
                </div>
            </div>
            <div>
                <p>Next.js</p>
                <div className='relative bg-slate-400 h-[4px] mt-2'>
                    <div className='bg-[#f59e0b] absolute h-[4px] w-[75%]'></div>
                </div>
            </div>
            <div>
                <p>Tailwind CSS</p>
                <div className='relative bg-slate-400 h-[4px] mt-2'>
                    <div className='bg-[#f59e0b] absolute h-[4px] w-[50%]'></div>
                </div>
            </div>
            <div>
                <p>HTML/CSS/JavaScript</p>
                <div className='relative bg-slate-400 h-[4px] mt-2'>
                    <div className='bg-[#f59e0b] absolute h-[4px] w-[80%]'></div>
                </div>
            </div>
            <div>
                <p>Python</p>
                <div className='relative bg-slate-400 h-[4px] mt-2'>
                    <div className='bg-[#f59e0b] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Projects

import React from "react";
import Heading from "./Heading";
import { GrProjects } from "react-icons/gr";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="container mx-auto py-10 px-4" id="projects">
      <Heading title="My Projects" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="shadow-lg rounded-[10px] justify-center align-center gap-4 p-5 bg-gray-200 text-[#000]">
          <div className="flex font-sans">
            <div className="mt-4">
              <Image
                className="border-black rounded-[5px]"
                src="/qr.jpg"
                width={500}
                height={250}
                alt=""
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  QR-Generator
                </h1>
                {/* <Link
                  href=""
                  className="w-full flex-none text-sm font-medium text-slate-700 mt-2"
                >
                  Github Repo
                </Link> */}
              </div>

              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <Button
                    className="btn body mt-10 text-[#000]"
                    link="https://qr-sourav.vercel.app/"
                    text="Click to view"
                  />
                </div>
              </div>

              <p className="text-sm text-slate-700">
                It is a utility which can be used to generate QR's for
                links,text,etc for handy sharing. It is very reliable, fast and
                easy to use. It can generate QR's for any text or URL's at a
                click.
              </p>
            </form>
          </div>
        </div>

        {/*2nd project*/}
        <div className="shadow-lg rounded-[10px] justify-center align-center gap-4 px-8 py-10 bg-gray-200 text-[#000]">
          <div className="flex font-sans">
            <div className="mt-4">
              <Image
                className="border-black rounded-[5px]"
                src="/tictactoe.jpg"
                width={500}
                height={250}
                alt=""
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Tic-Tac-Toe
                </h1>
                {/* <Link
                  href=""
                  className="w-full flex-none text-sm font-medium text-slate-700 mt-2"
                >
                  Github Repo
                </Link> */}
              </div>

              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <Button
                    className="btn body mt-10 text-[#000]"
                    link="https://tictactoe-ska.vercel.app/"
                    text="Click to view"
                    target="_blank"
                  />
                </div>
              </div>

              <p className="text-sm text-slate-700">
                It is a game made for entertainment purposes. It is a two player
                game in which one player chooses cross and the other chooses
                tick and fills the boxes until one of them have three cross or
                tick in one line.
              </p>
            </form>
          </div>
        </div>

        {/* <div className='shadow-lg flex flex-col gap-4 rounded-[10px] justify-center align-center px-8 py-10 bg-[#64748b] text-[#f4f4f5]'>
                <GrProjects className='text-[#ef4444] text-[28px]' />
                <h2 className='font-medium text-[28px]'>MovieMarvel</h2>
                <p className='text-[16px] max-height-[170px] mb-4'>A movie suggestion and info app designed for quick information regarding latest trending and popular Movies and TV Shows. Find your show and grab a popcorn to enjoy...</p>
                <div className='mt-4'>
                    <Image className=' justify-center align-center rounded-[8px]' src="/movie_app.jpg" width={500} height={250} alt=""/>
                </div>
                <Button link ="https://skatv.vercel.app" text="Click to view" />
            </div> */}
      </div>

      {/* <Heading title="Skills" />
        <p className='text-[#0f172a] -mt-10 mb-10 text-[18px]'>Learning new skills everyday has been a part of my life now. I have learned many new things and continuing to do so. Below are some of the skills which I have gained till date and hope to make a command on it.</p> */}

      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
        </div> */}
    </section>
  );
};

export default Projects;

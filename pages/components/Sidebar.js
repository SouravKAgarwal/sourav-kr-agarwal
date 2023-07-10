import React from "react";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-pointer"
        onClick={toggleSideBar}
      >
        <RiCloseFill />
      </div>

      <div className="flex flex-col gap-4 text-[20px] place-items-center">
        <Link className="hover:text-[#d4d4d8]" onClick={toggleSideBar} href="#">
          Home
        </Link>
        <Link
          className="hover:text-[#d4d4d8]"
          onClick={toggleSideBar}
          href="#about"
        >
          About Me
        </Link>
        <Link
          className="hover:text-[#d4d4d8]"
          onClick={toggleSideBar}
          href="#projects"
        >
          My Projects
        </Link>
        <Link
          className="hover:text-[#d4d4d8]"
          onClick={toggleSideBar}
          href="#contacts"
        >
          Contact Me
        </Link>
        <Link
          href="Resume.pdf"
          download
          className="btn flex border border-[#6b7280] px-4 py-1 text-[#f3f4f6] rounded-[8px] items-center gap-2 hover:bg-[#d4d4d8] hover:text-black transition duration-200"
        >
          Resume
          <HiOutlineDownload />
        </Link>
        <div className="flex justify-between items-center">
          <div className="flex  gap-[2rem] items-center font-medium">
            <Link href="https://github.com/SouravKAgarwal" target="_blank">
              <FaGithub className="text-[white] text-[24px]" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/souravkragarwal/"
              target="_blank"
            >
              <FaLinkedinIn className="text-blue-600 text-[24px]" />
            </Link>

            <Link
              href="https://www.linkedin.com/SouravK_Agarwal"
              target="_blank"
            >
              <FaTwitter className="text-blue-500 text-[24px]" />
            </Link>

            <Link
              href="https://instagram.com/_souravagarwal_09?igshid=Yjk4NWM2ZWVkMw=="
              target="_blank"
            >
              <FaInstagram className="text-pink-600 text-[24px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex font-sans">
<div className="flex-none w-60 relative">
  <img
    src="/movie_app.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
</div>
<form className="flex-auto p-6">
  <div className="flex flex-wrap">
    <h1 className="flex-auto text-lg font-semibold text-slate-900">
      MovieMarvel
    </h1>
    <Link
      href=""
      className="w-full flex-none text-sm font-medium text-slate-700 mt-2"
    >
      Github Repo
    </Link>
  </div>

  <div className="flex space-x-4 mb-6 text-sm font-medium">
    <div className="flex-auto flex space-x-4"></div>
    <button
      className="btn rounded-md text-slate-300 border border-slate-200"
      type="button"
      aria-label="Like"
    >
      MovieMarvel
    </button>
  </div>

  <p className="text-sm text-slate-700">
    A movie suggestion and info app designed for quick information
    regarding latest trending and popular Movies and TV Shows. Find your
    show and grab a popcorn to enjoy...
  </p>
</form>
</div>




<h2 className="font-medium text-[28px]">Tic-Tac-Toe</h2>
          <div className="max-height-[170px]">
            <p className="text-[16px]">
              It is a game made for entertainment purposes. It is a two player
              game in which one player chooses cross and the other chooses tick
              and fills the boxes until one of them have three cross or tick in
              one line.
            </p>
          </div>
          <div className="mt-4">
            <Image
              className="rounded-[8px] justify-center align-center"
              width={500}
              height={250}
              src="/tictactoe.jpg"
              alt=""
            />
          </div>
          <Button
            className="btn body text-[#000]"
            link="https://tictactoe-ska.vercel.app/"
            text="Click to view"
            target="_blank"
          />




          <div className="shadow-lg flex flex-col rounded-[10px] justify-center align-center gap-4 px-8 py-10 bg-[#fff] text-[#000]">
          <GrProjects className="text-[#ef4444] text-[28px]" />
          <h2 className="font-medium text-[28px]">QR-Generator</h2>
          <div className="max-height-[170px] mb-4">
            <p className="text-[16px]">
              It is a utility which can be used to generate QR's for
              links,text,etc for handy sharing. It is very reliable, fast and
              easy to use. It can generate QR's for any text or URL's at a
              click.
            </p>
          </div>
          <div className="mt-4">
            <Image
              className="inset-0 w-full h-full object-contain border-black rounded-[5px]"
              src="/qr.jpg"
              width={500}
              height={250}
              alt=""
            />
          </div>
          <Button
            className="btn body text-[#000]"
            link="https://qr-sourav.vercel.app/"
            text="Click to view"
          />
        </div> */}
    </div>
  );
};

export default Sidebar;

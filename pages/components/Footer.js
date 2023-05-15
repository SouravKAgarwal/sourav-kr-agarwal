import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center flex-col bg-[black] bg-center px-[50px] relative text-white">
      <div className="text-center ">
        <ul className="flex items-center justify-center gap-[15px] mb-[20px] text-[16px] md:mb-[30px] md:gap-[70px]">
          <li className="my-[30px] hover:text-[#d4d4d8]">
            <Link href="#">Home</Link>
          </li>
          <li className="my-[30px] hover:text-[#d4d4d8]">
            <Link href="#about">About</Link>
          </li>
          <li className="my-[30px] hover:text-[#d4d4d8]">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="my-[30px] hover:text-[#d4d4d8]">
            <Link href="#contacts">Contact</Link>
          </li>
        </ul>
      </div>
      {/* <div className="text-center text-[12px] leading-[20px] opacity-[0.5] max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px]">
        Designed and Hosted by Sourav Kumar Agarwal
      </div> */}
      <div className="flex items-center justify-center gap-[10px]">
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[var(--black3)] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.225em_#d4d4d8]"><Link href="https://github.com/SouravKAgarwal" target='_blank'><FaGithub className='text-[white] text-[24px]'/></Link>
        </span>
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[var(--black3)] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.225em_#d4d4d8]"><Link href="https://www.linkedin.com/in/sourav-kumar-agarwal09/" target='_blank'><FaLinkedinIn className='text-blue-600 text-[24px]'/></Link>
        </span>
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[var(--black3)] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.225em_#d4d4d8]"><Link href="https://instagram.com/_souravagarwal_09?igshid=Yjk4NWM2ZWVkMw==" target='_blank'><FaInstagram className='text-pink-600 text-[24px]'/></Link>
        </span>
        {/* <span className="w-[50px] h-[50px] rounded-[50%] bg-[var(--black3)] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.225em_#d4d4d8]">
          <FaLinkedin />
        </span> */}
      </div>
      <ul className="flex items-center justify-center gap-[15px] mt-[20px] md:mt-[30px] md:gap-[30px]">
        <li className="text-[12px] md:text-[16px]">
          &copy; 2023 | Sourav Kumar Agarwal
        </li>
      </ul>
    </div>
  );
};

export default Footer;

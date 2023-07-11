import React from "react";
import Heading from "./Heading";
import { FiSmartphone } from "react-icons/fi";
import { FaBook, FaFilePdf } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { GrDocumentPdf, GrGithub, GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="container mx-auto w-screen px-4 py-10" id="about">
      <div className="shadow-lg rounded-[10px] justify-center align-center gap-4 px-8 py-5 bg-gray-200 text-[#000]">
        <div className="flex font-sans">
          <div className="mt-4">
            <Image
              className="rounded-[80em]"
              src="/aboutme.jpg"
              width={300}
              height={600}
              alt=""
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <Heading title="About Me" />

              {/* <Link
                  href=""
                  className="w-full flex-none text-sm font-medium text-slate-700 mt-2"
                >
                  Github Repo
                </Link> */}
            </div>

            <div className="flex space-x-4 mb-6 text-sm font-medium"></div>

            <p className="text-sm text-slate-700">
              Hi! My name is Sourav Kumar Agarwal. I'm a Web Developer, and I'm
              very passionate and dedicated toward my work. I am very
              hard-working and very eager to learn new technologies.
            </p>
            <div className="flex flex-col-2 gap-4 items-center text-[14px] font-medium">
              <Link href="Resume.pdf" download className="btn mt-10 flex body">
                <FaFilePdf className="text-red-700" />
                Resume
                <HiOutlineDownload />
              </Link>
              <div className="flex-auto flex space-x-4">
                <Link
                  className="btn flex body mt-10 ]"
                  href="https://github.com/SouravKAgarwal"
                  target="_blank"
                >
                  <GrGithub className="text-black text-[20px]" /> Github
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-[5px]">
        
        <div>
          <div className="flex item-center w-[370px] md:w-[450px] md:mx-[120px] justify-around mt-4">
            <div className="flex flex-col gap-[4px]">
              <div className="flex my-2 gap-4 items-center font-medium">
                <FiSmartphone className="text-blue text-[22px]" />
                Phone
              </div>
              <div className="flex my-2 gap-4 items-center font-medium">
                <FaBook className="text-[#422006] text-[22px]" />
                Education
              </div>
              <div className="flex my-2 gap-4 items-center font-medium">
                <ImLocation className="text-[#e11d48] text-[22px]" />
                Location
              </div>
              <br></br>
              <div className="flex my-2 gap-4 items-center font-medium">
                <GrMail className="text-[#86198f] text-[22px]" />
                Gmail
              </div>
            </div>

            <div className="flex flex-col gap-[22px] text-black ">
              <div className="mt-2">:</div>
              <div className="-mt-1">:</div>
              <div>:</div>
              <div className="mt-6">:</div>
            </div>

            <div className="flex flex-col gap-[22px] text-black">
              <div className="mt-2">+91-6001386472</div>
              <div className="-mt-1">Rajasthan Technical University</div>
              <div className=" -mt-0">
                Kumarpara Panchali,Bharalumukh,<br></br> Guwahati-781009, Assam
              </div>
              <div>aggarwalsaurav948@gmail.com</div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;

import Link from "next/link";
import React from "react";
import Button from "./Button";

const ProjectCard = ({ src, name, link, paragraph, website }) => {
  return (
    <div>
      <div className="shadow-lg rounded-[10px] justify-center align-center gap-4 px-8 py-10 bg-gray-200 text-[#000]">
        <div className="flex font-sans">
          <div className="flex-none w-60 relative">
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-contain border-black rounded-[5px]"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {name}
              </h1>
              <Link
                href={link}
                className="w-full flex-none text-sm font-medium text-slate-700 mt-2"
              >
                Github Repo
              </Link>
            </div>

            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <Button
                  className="btn body mt-10 text-[#000]"
                  link={website}
                  text="Click to view"
                />
              </div>
            </div>

            <p className="text-sm text-slate-700">{paragraph}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

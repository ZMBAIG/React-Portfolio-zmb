import React from "react";
import { data } from "../data/data.js";
import { FaGithub, FaLaptop } from "react-icons/fa";

const Project = () => {
  const project = data;

  return (
    <div
      name="work"
      className="sm:w-full h-fit text-gray-300 bg-gradient-to-r  from-indigo-900 to-sky-500 pl-[100px] pt-14 px-8 ml-8"
    >
      <div className=" max-w-[800px] mx-auto p-4 flex flex-col w-full h-full">
        <div className="pb-8 mx-auto">
          <p className="text-2xl flex-inline shadow-lg shadow-[#54749b] border-b-[1.8px] text-gray-300 p-2 flex justify-center tracking-[14px]">
            PROJECTS
          </p>
          <p class="pt-8 text-center">
            Here are some of my personal projects, you may like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-md font bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-2 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-full p-3 m-2
                      hover:bg-emerald-500 text-white font-bold text-lg"
                    >
                      <FaGithub size={30} />
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-full p-3 m-2
                      hover:bg-blue-500 text-white font-bold text-lg "
                    >
                      <FaLaptop size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

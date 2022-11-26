import React from "react";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JavaScript from "../assets/images/javascript.png";
import ReactImg from "../assets/images/react.png";
import Node from "../assets/images/node.png";
import Sql from "../assets/images/sql.png";
import GitHub from "../assets/images/github.png";
import Sass from "../assets/images/sass.png";
import Python from "../assets/images/python.png";
import Flask from "../assets/images/flask.png";
import Tailwind from "../assets/images/tailwind.png";
import Arcgis from "../assets/images/arcgis.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="sm:w-full h-fit bg-gradient-to-r  from-indigo-900 to-sky-500 text-gray-300 ml-10"
    >
      <div className="max-w-[800px] mx-auto p-4 flex flex-col  w-full h-full pl-[100px]">
        <div className="pb-8 mx-auto">
          <p className="text-2xl shadow-lg shadow-[#54749b] border-b-[1.8px] px-6 flex justify-center items-center tracking-[22px]">
            SKILLS
          </p>
        </div>
        <div className="sm: grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-10 ">
          <div className="hover:scale-150 duration-500 ">
            <img className="w-12 mx-auto" src={HTML} alt="HTML icon " />
            <p className="">HTML5</p>
          </div>
          <div className=" hover:scale-150 duration-500 ">
            <img className="w-12 mx-auto" src={CSS} alt="HTML icon" />
            <p className="">CSS3</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Sass} alt="HTML icon" />
            <p className="">SASS</p>
          </div>

          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="">JavaScript</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Node} alt="HTML icon" />
            <p className="">Node.Js</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="">React</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="">GitHub</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Python} alt="HTML icon" />
            <p className="">Python</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Flask} alt="HTML icon" />
            <p className="">Flask</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Sql} alt="HTML icon" />
            <p className="">SQL</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="">Tailwind</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Arcgis} alt="HTML icon" />
            <p className="">Arc GIS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

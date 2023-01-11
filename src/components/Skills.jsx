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
import ArcGIS from "../assets/images/arcgis.png";
import Jest from "../assets/images/jest.png";
import Git from "../assets/images/git.png";
import Redux from "../assets/images/redux.png";
import Photoshop from "../assets/images/photoshop.png";
import Figma from "../assets/images/figma.png";
import Powerdirector from "../assets/images/powerdirector.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="sm:w-full h-fit bg-gradient-to-r  from-indigo-900 to-sky-500 text-gray-300 ml-10"
    >
      <div className="mx-0 text-center ml-10">
        <p className="text-2xl shadow-lg shadow-[#54749b] border-b-[1px]  justify-center items-center tracking-[20px] bg-gradient-to-r  from-indigo-900 to-sky-500 px-8 inline-flex">
          SKILLS
        </p>
      </div>

      <div className=" max-w-[800px] mx-auto p-4 flex flex-col  w-full h-full pl-[100px]">
        <div className="sm: grid grid-cols-2 sm:grid-cols-6 gap-4 text-center pt-10 ">
          {" "}
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={ArcGIS} alt="HTML icon" />
            <p className="">Arc GIS</p>
          </div>
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
            <img className="w-12 mx-auto" src={Jest} alt="HTML icon" />
            <p className="">Jest</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Git} alt="HTML icon" />
            <p className="">Git</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Redux} alt="HTML icon" />
            <p className="">Redux</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Photoshop} alt="HTML icon" />
            <p className="">Photoshop</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Figma} alt="HTML icon" />
            <p className="">Figma</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-12 mx-auto" src={Powerdirector} alt="HTML icon" />
            <p className="">Powerdirector</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

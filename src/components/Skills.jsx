import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sql from "../assets/sql.png";
import GitHub from "../assets/github.png";
import Sass from "../assets/sass.png";
import Python from "../assets/python.png";
import Flask from "../assets/flask.png";
import Tailwind from "../assets/tailwind.png";
import Arcgis from "../assets/arcgis.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-fit bg-[#2d3d55] text-gray-300 ;">
      <div className="max-w-[900px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        <div className="mb-8">
          <p className="text-2xl font-bold inline shadow-lg shadow-[#54749b] p=8 ">
            SKILLS
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center">
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={HTML} alt="HTML icon p-2" />
            <p className="my-2">HTML5</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-2">CSS3</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Sass} alt="HTML icon" />
            <p className="my-2">SASS</p>
          </div>

          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-2">JavaScript</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-2">Node.Js</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-2">React</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-2">GitHub</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-2">Python</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Flask} alt="HTML icon" />
            <p className="my-2">Flask</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Sql} alt="HTML icon" />
            <p className="my-2">SQL</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-2">Tailwind</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Arcgis} alt="HTML icon" />
            <p className="my-2">ArcGIS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

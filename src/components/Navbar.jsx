import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/cube-logo.png";
import { Link } from "react-scroll";
import ResumePDF from "../assets/NL-Zafar-Resume-FSD-2022-23.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px]  flex justify-between items-center px-4 bg-[#282c34] text-white shadow-lg shadow-[#54749b] p-4 top-0 left-0">
      <div class="mt-4 ">
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      <p class=" quote text-[2rem] text-shadow-lg shadow-[#54749b] inline-flex">
        Zafar______
      </p>

      {/* menu */}
      <ul className="hidden md:flex ">
        <li class="menu hover:border-b-4 border-emerald-600">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li class="menu hover:border-b-4 border-emerald-600">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li class="menu hover:border-b-4 border-emerald-600">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li class="menu hover:border-b-4 border-emerald-600">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li class="menu hover:border-b-4 border-emerald-600">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li class="menu hover:border-b-4 border-emerald-600">
          <a href={ResumePDF} target="_blank" rel="noreferrer">
            Resume
          </a>{" "}
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#282c34] flex flex-col  items-center gap-6  pt-[35%]"
        }
      >
        <li className="text-2xl hover:border-b-4 border-emerald-600 hover:text-[#f211a3]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-2xl hover:border-b-4 border-emerald-600 hover:text-[#f211a3]">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-2xl hover:border-b-4 border-emerald-600 hover:text-[#f211a3]">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" text-2xl hover:border-b-4 border-emerald-600 hover:text-[#f211a3]">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-2xl hover:border-b-4 border-emerald-600 hover:text-[#f211a3]">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li class="menu hover:text-[#f211a3] text-2xl border-b-[1px]p-4 top-0 left-0 hover:border-b-4 border-emerald-600">
          <a href={ResumePDF} target="_blank" rel="noreferrer">
            Resume
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      name="home"
      className="object-none object-left fixed w-[60px] h-screen bg-[#282c34] shadow-lg shadow-[#54749b] py-6 px-4 top-20 left-0 "
    >
      <div className=" mx-0 p-2 flex-col py-3 my-12 flex items-center gap-4">
        <a
          className=" hover:bg-[#0077B5] hover:border p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
          href="https://www.linkedin.com/in/zmbaig/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          className=" hover:bg-[#282828] hover:border p-2 flex justify-center items-center  text-white rounded-full shadow-lg shadow-[#54749b]"
          href="https://github.com/ZMBAIG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={22} />
        </a>
        <a
          className="hover:bg-[#E4405F] hover:border p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
          href="https://www.instagram.com/64zmb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={22} />
        </a>
        <a
          className="hover:bg-[#FF0000] hover:border p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
          href="/"
        >
          <FaYoutube size={22} />
        </a>
        <a
          className="hover:bg-[#1DA1F2] hover:border flex p-2 justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
          href="https://twitter.com/zmbaig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={22} />
        </a>
        <a
          className="hover:bg-emerald-500 hover:border p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
          href="https://api.whatsapp.com/send?phone=31625262050"
          target="_blank "
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;

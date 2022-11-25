import React from "react";
import ResumePDF from "../assets/NL-Zafar-Resume-FSD-2022-23.pdf";

const Resume = () => {
  return (
    <div className="sm:bg-gradient-to-r  from-indigo-900 to-sky-500 flex justify-center">
      <button className="rounded-full text-white border-[1px] hover:bg-emerald-600 hover:border-emerald-600 px-4 py-2 mx-auto flex items-center shadow-lg shadow-[#54749b]">
        <a href={ResumePDF} target="_blank" rel="noreferrer">
          Download CV
        </a>{" "}
      </button>
    </div>
  );
};

export default Resume;

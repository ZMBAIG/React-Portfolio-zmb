import React from "react";

const AnimationBox = () => {
  return (
    <div class="w-16 md:w-32 lg:w-48 ">
      <section class="container ">
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <div class="text-white text-md  animate-ping duration-5000 delay-100  relative  w-10 h-10 flex items-center ml-16 ">
              🎈Hi
            </div>
            <h1 className="text-3xl font-bold text-[#9edef0] ml-8">
              I'm Zafar Baig
            </h1>
            <h2 className="text-1xl text-teal-200 shadow-lg shadow-[#54749b] p-2 mb-2 border-b-[1px] ml-8">
              Full Stack Developer
            </h2>
            <p className="transform-text text-white text-sm mt-2 ml-8">
              I've transformed my life from a Geologist to{" "}
              <p class="font-serif text-blue-300 inline-flex">
                "Developer 😄"{" "}
              </p>
              ,build value through code and am ready to accept a challenge.
              <br></br>I have a diverse set of skills, including creativity and
              design, to HTML, CSS, JavaScript, React,Tailwind, GitHub & Python.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationBox;

import React from "react";

const AnimationBox = () => {
  return (
    <div class="w-16 md:w-32 lg:w-48 py-8">
      <section class="container ">
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <div class="text-white text-sm  animate-ping relative inline-flex h-50 w-50 bg-sky-400 opacity-100 p-1 font-sans">
              Hoi,
            </div>
            <p class="text-lg ml-12">Ik ben</p>
            <h1 className="text-4xl font-bold text-[#9edef0] ml-12">
              Zafar Baig
            </h1>
            <h2 className="text-1xl text-teal-200 shadow-lg shadow-[#54749b] p-2 mb-2 border-b-[1px] ml-4">
              Full Stack Developer
            </h2>
            <p className="transform-text text-white text-sm mt-8 ml-4">
              Ik heb mijn leven getransformeerd van een geoloog naar een
              "ontwikkelaar" en kan hetzelfde voor jou doen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationBox;

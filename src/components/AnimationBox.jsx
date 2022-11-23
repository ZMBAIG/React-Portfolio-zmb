import React from "react";

const AnimationBox = () => {
  return (
    <div
      name="home"
      className="sm:w-full h-screen bg-gradient-to-r  from-indigo-900 to-sky-500 text-gray-300 flex items-center"
    >
      {/* Animation box with contents */}
      <section class="container w-full h-screen">
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <div class="text-white text-sm  animate-ping relative inline-flex h-50 w-50 bg-sky-400 opacity-100 font-sans float-left">
              Hoi,
            </div>

            <p class="text-md text-center">Ik ben</p>
            <h1 className="text-2xl font-bold text-[#9edef0] text-center tracking-[4px]">
              Zafar Baig
            </h1>
            <h2 className="text-md text-teal-200 text-center">
              Full Stack Developer
            </h2>
            <p className="text-white text-[.8rem] text-justify">
              Mijn persoonlijke zoektocht heeft er toe geleid dat ik vol
              enthousiasme ben omgeschoold van een geoloog naar een
              ontwikkelaar. Met dezelfde drive en energie kan ik d.m.v. digitale
              transformatie de toekomstbestendigheidheid van uw organisatie
              vergroten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationBox;

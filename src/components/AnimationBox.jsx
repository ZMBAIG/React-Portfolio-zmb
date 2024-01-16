import React from "react";

const AnimationBox = () => {
  return (
    <div
      name="home"
      className="sm:w-full h-screen bg-gradient-to-r  from-indigo-900 to-sky-500 text-gray-300 flex justify-center ml-10 "
    >
      {/* Animation box with contents */}
      <section class="container sm:w-full h-full">
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <div class="text-white text-2xl  animate-ping relative inline-flex h-50 w-100 font-sans float-left">
              Hoi,
            </div>

            <p class="text-md text-center">I'm</p>
            <h1 className="text-2xl font-bold text-[#9edef0] text-center tracking-[4px]">
              Zafar Baig
            </h1>

            <h2 className="text-sm text-teal-200 text-center">
              Front-end Developer
            </h2>
            <p className="text-white text-[12px] m-4">
              {/* Mijn persoonlijke zoektocht heeft er naar toe geleid dat ik vol
              enthou-siasme ben omgeschoold van een geoloog naar een
              ontwikkelaar. Met dezelfde drive en energie kan ik d.m.v. digitale
              transformatie de toekomstbest-endigheidheid van uw organisatie
              vergroten. */}
              Enthusiastic and detail-oriented front-end developer with skill
              and qualification in building responsive and user-friendly web
              applications. Proficient in HTML, CSS, JavaScript, and modern
              front-end frameworks. Adept at collaborating with cross-functional
              teams to deliver high-quality solutions. Passionate about staying
              up-to-date with the latest web technologies and trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationBox;

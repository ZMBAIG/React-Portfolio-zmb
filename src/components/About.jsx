import React from "react";

const About = () => {
  return (
    <div
      name="home"
      className="sm:w-full h-screen bg-gradient-to-r  from-indigo-900 to-sky-500 text-gray-300 pb-0 pl-20 "
    >
      <section class="container w-full h-screen ">
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

      <div
        name="about"
        className=" flex flex-col justify-center items-left w-full h-full bg-gradient-to-r  from-indigo-900 to-sky-500 px-8"
      >
        <p className=" text-1xl font-bold bg-gradient-to-r from-indigo-900 to-sky-500 px-6  py-2 shadow-lg shadow-[#54749b]">
          Over mij
        </p>
        <div className="max-w-[800px] w-full grid sm:grid-cols-2 py-8 ">
          <p class="about pt-0 ">
            Het mooie in de veelzijdige wereld van de informatietechnologie is
            dat het kansen biedt om je op meerdere fronten te ontwikkelen. Dit
            was voor mij een reden om het hbo – omscholingstraject tot Full
            Stack Developer te volgen, wat ik zeer recent met succes heb
            afgerond. In mijn loopbaan heb ik voornamelijk werkervaring opgedaan
            als Geo-informatica medewerker. Hierin is de bekendheid met diverse
            softwareapplicaties ontstaan, waarbij mijn werkzaamheden onder
            andere bestonden uit het visualiseren en actualiseren van de geodata
            en vastgoedinformatie.
            <br></br>
            Door een jaar oefenen en vele persoonlijke projecten heb ik mijn
            kennis en vaardigheden als programmeur opgebouwd en een zekere
            veelzijdigheid ontwikkeld in het gebruik van technologieën en
            codeertalen. Mijn leergierigheid en interesse zorgen ervoor dat ik
            nieuwe dingen snel eigen kan maken en nooit een uitdaging uit de weg
            zal gaan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

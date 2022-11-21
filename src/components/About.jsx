import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="sm:w-full h-screen bg-gradient-to-r  from-indigo-900 to-sky-500 text-gray-300 pl-[100px] pb-8"
    >
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="ml-30 max-w-[800px] w-full grid grid-cols-2 ">
          <div className="px-8 sm:text-right pl-4">
            <p className="text-1xl font-bold inline-flex  shadow-[#54749b] bg-indigo-900 p-2  ">
              Over mij
            </p>
          </div>
        </div>
        <div className="max-w-[800px] w-full grid sm:grid-cols-2 px-4">
          {/* <div className="sm:text-right text-2xl font-bold">
            <p class="pt-4">Hi. I'm Zafar Baig,</p>
            <p class="text-sm">the Full Stack Developer</p>
          </div> */}
          <p class="about pt-4">
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

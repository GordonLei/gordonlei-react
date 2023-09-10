import React from "react";
import SkillsCard from "../updatedPageComponents/SkillsCard";
import Languages from "../../json/Languages.js";
import WD from "../../json/WebDevelopment.js";
import FL from "../../json/FrameworksLibraries.js";
import Misc from "../../json/Misc.js";
function SkillsInfo() {
  return (
    <>
      <div className="font-bold text-2xl">About My Skills / Tech Stack</div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <section>
        <div className="text-center font-semibold text-2xl ">Languages</div>
        <div className="flex flex-col sm:flex-row justify-center md:space-x-20">
          {Languages.map((each, index) => {
            return (
              <SkillsCard
                key={index}
                imgSrc={each.imgSrc}
                hoverText={each.hoverText}
              />
            );
          })}
        </div>
        <div className="text-center font-semibold text-2xl ">
          Web Development
        </div>
        <div className="flex flex-col sm:flex-row justify-center md:space-x-20">
          {WD.map((each, index) => {
            return (
              <SkillsCard
                key={index}
                imgSrc={each.imgSrc}
                hoverText={each.hoverText}
              />
            );
          })}
        </div>
        <div className="text-center font-semibold text-2xl ">
          Frameworks and Libaries
        </div>
        <div className="flex flex-col sm:flex-row justify-center md:space-x-20">
          {FL.map((each, index) => {
            return (
              <SkillsCard
                key={index}
                imgSrc={each.imgSrc}
                hoverText={each.hoverText}
              />
            );
          })}
        </div>
        <div className="text-center font-semibold text-2xl ">Misc.</div>
        <div className="flex flex-col sm:flex-row justify-center md:space-x-20">
          {Misc.map((each, index) => {
            return (
              <SkillsCard
                key={index}
                imgSrc={each.imgSrc}
                hoverText={each.hoverText}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SkillsInfo;

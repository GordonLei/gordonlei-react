import React from "react";
import SkillsCard from "./SkillsCard";
import Languages from "../json/Languages.js";
import WD from "../json/WebDevelopment.js";
import FL from "../json/FrameworksLibraries.js";
import Misc from "../json/Misc.js";

function Skills() {
  return (
    <section className="">
      <div>
        <div className="text-center font-semibold text-3xl text-white">
          Skills
        </div>
        <div className="m-8 text-center text-arch_alpha_mod text-lg">
          Below are the skills I possess. I'm always trying to learn new
          techniques or technologies whether it be for the frontend or the
          backend.
        </div>
      </div>
      <section>
        <div className="text-center font-semibold text-2xl text-white">
          Languages
        </div>
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
        <div className="text-center font-semibold text-2xl text-white">
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
        <div className="text-center font-semibold text-2xl text-white">
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
        <div className="text-center font-semibold text-2xl text-white">
          Misc.
        </div>
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
    </section>
  );
}

export default Skills;

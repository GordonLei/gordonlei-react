import React from "react";
import ExperienceCard from "./ExperienceCard";
import data from "../json/Experience.js"

function Experience() {
  return (
    <section className="">
      <div className="text-center font-semibold text-3xl text-playground_red">
        Experience 
      </div>
      <div className="text-center text-lg text-playground_white">
        Below are the work experience and clubs I have attended. 
      </div>
      <div className="grid grid-cols-1 divide-y m-16 ">
        {data.map((anExperience, index) => {
        return (
          <ExperienceCard
            key={index}
            category = {anExperience.category}
            company = {anExperience.company}
            title = {anExperience.title}
            dates = {anExperience.dates}
            description = {anExperience.description}
          />
        );
        })}
      </div>
    </section>
  );
}

export default Experience;

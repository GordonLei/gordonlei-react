import React from "react";
import ExperienceCard from "./ExperienceCard";
import data from "../json/Experience.json"

function Experience() {
  return (
    <section>
      <div className="text-center">
        Experience 
      </div>
      <div className="text-center">
        Below are the work experience and clubs I have attended. 
      </div>
      <div className="grid grid-cols-1 divide-y">
        {data.map((anExperience) => {
        return (
          <ExperienceCard
            category = {anExperience.category}
            company = {anExperience.company}
            title = {anExperience.title}
            date = {anExperience.date}
            description = {anExperience.description}
          />
        );
        })}
      </div>
    </section>
  );
}

export default Experience;

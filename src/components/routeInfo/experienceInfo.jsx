import React from "react";
import ExperienceCard from "../updatedPageComponents/ExperienceCard";
import data from "../../json/Experience";

function ExperienceInfo() {
  return (
    <>
      <div className="font-bold text-2xl">About My Experience</div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid grid-cols-1 divide-y ">
        {data.map((anExperience, index) => {
          return (
            <ExperienceCard
              key={index}
              category={anExperience.category}
              company={anExperience.company}
              title={anExperience.title}
              dates={anExperience.dates}
              description={anExperience.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default ExperienceInfo;

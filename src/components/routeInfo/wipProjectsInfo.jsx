import React from "react";
import RightCard from "../updatedPageComponents/RightCard";
import data from "../../json/WIP";

function WipProjectsInfo() {
  return (
    <>
      <div>Work-In-Progress Chapters</div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mx-8 sm:mx-8 flex flex-col-reverse">
        {data.map((aProject, index) => {
          return (
            <RightCard
              key={index}
              title={aProject.title}
              technology={aProject.technology}
              subheader={aProject.subheader}
              description={aProject.description}
              demoLink={aProject.demoLink}
              githubLink={aProject.githubLink}
              images={aProject.images}
              headerTextColor={"text-metropolis_alpha_yellow"}
              subheaderTextColor={"text-metropolis_alpha_red"}
              desTextColor={"text-metropolis_alpha_teal"}
            />
          );
        })}
      </div>
    </>
  );
}

export default WipProjectsInfo;

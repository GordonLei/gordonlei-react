import React from "react";
import RightCard from "./RightCard";
import data from "../json/Completed.json"

function Completed() {
  return (
    <section>
      <div className="text-center">
        Completed Projects
      </div>
      <div>
      {data.map((aProject) => {
        return (
          <RightCard
            title = {aProject.title}
            technology = {aProject.technology}
            subheader = {aProject.subheader}
            description = {aProject.description}
            demoLink = {aProject.demoLink}
            githubLink = {aProject.githubLink}
            images = {aProject.images}
          />
        );
        })
      }
      </div>

    </section>
  );
}

export default Completed;

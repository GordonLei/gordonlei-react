import React from "react";
import RightCard from "./RightCard";
import data from "../json/WIP.json"

function WIP() {
  return (
    <section>
      <div className="text-center">
        WIP Projects
      </div>
      <div className="text-center">
        These are projects that I am working on or are planning on working on.
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

export default WIP;

import React from "react";
import RightCard from "./RightCard";
import data from "../json/WIP.js"

function WIP() {
  return (
    <section className="my-36 mx-8 lg:mx-40 ">
      <div className="text-center font-semibold text-3xl text-metropolis_alpha_yellow">
        WIP Projects
      </div>
      <div className="text-center text-metropolis_alpha_teal text-lg">
        These are projects that I am working on or are planning on working on.
      </div>
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
        })
        }
      </div>

    </section>
  );
}

export default WIP;

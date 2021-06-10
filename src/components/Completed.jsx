import React from "react";
import RightCard from "./RightCard";
import data from "../json/Completed.js";

function Completed() {
  return (
    <section className="mx-8 lg:mx-80">
      <div className="text-center font-semibold text-3xl text-white">
        Completed Projects
      </div>
      <div className="mx-8 flex flex-col-reverse">
      {data.map((aProject,index) => {
        return (
          <RightCard
            key={index}
            title = {aProject.title}
            technology = {aProject.technology}
            subheader = {aProject.subheader}
            description = {aProject.description}
            demoLink = {aProject.demoLink}
            githubLink = {aProject.githubLink}
            images = {aProject.images}
            headerTextColor = {"text-white"}
            subheaderTextColor = {"text-black"}
            desTextColor = {"text-hammerhead_teal"}
          />
        );
        })
      }
      </div>

    </section>
  );
}

export default Completed;

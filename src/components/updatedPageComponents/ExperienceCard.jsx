import React from "react";

function ExperienceCard(props) {
  return (
    <section className="">
      <div className="font-bold text-3xl mx-4 mt-4 ">{props.company}</div>

      <div className="font-semibold text-lg mx-4 ">{props.title}</div>

      <div className="text-lg mx-4 ">{props.dates}</div>
      <div className="py-4 mx-4">
        <span className="rounded-full border-2 py-2 px-4 w-1/2 bg-white">
          {props.category}
        </span>
      </div>
      <div className="mx-4  text-lg">{props.description}</div>
    </section>
  );
}

export default ExperienceCard;

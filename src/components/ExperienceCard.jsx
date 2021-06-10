import React from "react";

function ExperienceCard(props) {
  return (
    <section className="my-4 mx-8 lg:mx-96">
        <div className="font-bold text-3xl mx-4 mt-4 text-playground_yellow">
            {props.company}
        </div>

        <div className="font-semibold text-lg mx-4 text-playground_green">
            {props.title}
        </div>

        <div className="text-lg mx-4 text-playground_blue">
            {props.dates}
        </div>
        <div className = "py-4 mx-4">
            <span className="rounded-full border-2 py-2 px-4 w-1/2 bg-white">
                {props.category}
            </span>
        </div>
        <div className="mx-4 text-playground_white text-lg">
            {props.description}
        </div>
    </section>
  );
}

export default ExperienceCard;

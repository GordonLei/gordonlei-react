import React from "react";

function ExperienceCard(props) {
  return (
    <section>
        <div>
            {props.category}
        </div>
        <div>
            {props.company}
        </div>

        <div>
            {props.title}
        </div>

        <div>
            {props.dates}
        </div>

        <div>
            {props.description}
        </div>
    </section>
  );
}

export default ExperienceCard;

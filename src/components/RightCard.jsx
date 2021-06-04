import React from "react";

function RightCard(props) {
  return (
    <section className="">
      <div>
        {props.title}
      </div>
      <div>
        {props.subheader}
      </div>

      <div>
      {
        props.technology.map((aTechnology) => {
          return (
            <div>
              {aTechnology}
            </div>
          );
        })
      }
      </div>

      <div>
        {props.description}
      </div>
      <div>
        {props.demoLink}
      </div>
      <div>
        {props.githubLink}
      </div>
      
      <div>
      {
        props.images.map((anImage) => {
          return (
            <img src={anImage} alt="missing RightCard"></img>
          );
        })
      }
      </div>
    </section>
  );
}

export default RightCard;

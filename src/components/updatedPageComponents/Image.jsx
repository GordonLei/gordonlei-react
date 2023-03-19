import React from "react";
function Image(props) {
  console.log(props.imagePath);
  return (
    <div className="carousel-item float-left w-full  h-full">
      <img src={props.imagePath} className="block  h-80" alt="temp " />
    </div>
  );
}
export default Image;

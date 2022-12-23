import React from "react";
function Image(props) {
  console.log(props.imagePath);
  return (
    <div className="carousel-item float-left w-full">
      <img src={props.imagePath} className="block w-full" alt="temp " />
    </div>
  );
}
export default Image;

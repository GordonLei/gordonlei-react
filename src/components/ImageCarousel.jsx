import React from "react";
import Image from "./Image";
function ImageCarousel(props) {
  console.log(props.images);
  const id_name =
    "carouselExampleIndicators_" + props.name.split(" ").join("_");
  /*
    Source of Carousel: https://tailwind-elements.com/docs/standard/components/carousel/  
    */
  return (
    <div
      id={id_name}
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        {props.images.map((imagePath, index) => {
          console.log(imagePath, index);
          if (index === 0) {
            return (
              <div className="carousel-item active float-left w-full">
                <img
                  src={imagePath}
                  className="block w-full"
                  alt="IDK WHAT THIS IS"
                  key={imagePath + index}
                />
              </div>
            );
          } else {
            return <Image imagePath={imagePath} key={imagePath + index} />;
          }
        })}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target={`#${id_name}`}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target={`#${id_name}`}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageCarousel;

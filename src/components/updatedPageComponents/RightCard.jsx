import React from "react";
import ImageCarousel from "./ImageCarousel";

function RightCard(props) {
  return (
    <section className="py-4 my-10 flex  items-stretch place-items-center justify-center border-2 rounded-xl shadow-2xl md:flex-row">
      <div className="relative w-full flex-grow flex-row  pb-16 ">
        {/* Name and Subheader*/}
        <div>
          <div className={" font-bold text-3xl ml-4"}>{props.title}</div>
          <div className={" font-semibold text-lg ml-4"}>{props.subheader}</div>
        </div>
        {/* Image Carousel */}
        <div className="flex items-stretch justify-center m-4">
          <ImageCarousel images={props.images} name={props.title} />
        </div>
        {/* Description */}
        <div>
          <div className={" ml-4 mr-4 text-lg"}>{props.description}</div>
        </div>
        {/* Buttons */}
        <div className="flex absolute bottom-0 left-0 ">
          <div className="my-4 items-end">
            <a
              className="place-content-end content-end ml-4 text-blue-500 hover:text-gray-700 duration-500 ease-in rounded-xl bg-green-100 font-bold border-2 px-4 py-2"
              href={props.githubLink}
            >
              GitHub Link
            </a>
          </div>
        </div>

        {props.demoLink.length > 0 && (
          <div className="flex absolute bottom-0 right-0 ">
            <div className="my-4 items-end">
              <a
                className="place-content-end content-end ml-4 text-blue-500 hover:text-gray-700 duration-500 ease-in rounded-xl bg-green-100 font-bold border-2 px-4 py-2"
                href={props.demoLink}
              >
                Demo Link
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RightCard;

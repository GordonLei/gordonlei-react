import React from "react";
import ImageCarousel from "./ImageCarousel";

function RightCard(props) {
  return (
    <section className="py-4 my-10 flex flex-col items-stretch place-items-center justify-center border-2 rounded-xl shadow-2xl md:flex-row">
      <div className="relative w-full flex-grow sm:w-1/2 pb-16 ">
        <div>
          <div className={props.headerTextColor + " font-bold text-3xl ml-4"}>
            {props.title}
          </div>
          <div
            className={props.subheaderTextColor + " font-semibold text-lg ml-4"}
          >
            {props.subheader}
          </div>
          <div className="mx-2 my-4 sgrid grid-cols-3 sm:flex">
            {props.technology.map((aTechnology, index) => {
              return (
                <span
                  className="md:m-2  rounded-full border-2 w-min p-2 mx-2 bg-white"
                  key={index}
                >
                  {aTechnology}
                </span>
              );
            })}
          </div>

          <div className={props.desTextColor + " ml-4 mr-4 text-lg"}>
            {props.description}
          </div>
        </div>
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

      <div className="sm:w-1/2 flex items-stretch m-4">
        <div className="">
          <ImageCarousel images={props.images} name={props.title} />
        </div>

        {/*
        props.images.map((anImage, index) => {
          return (
            <img
              className="self-stretch border-2 border-white h-full"
              src={anImage}
              alt="missing RightCard"
              key={index}
            ></img>
          );
        })
      */}
      </div>
    </section>
  );
}

export default RightCard;

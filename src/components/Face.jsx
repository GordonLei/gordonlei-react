import React from "react";

function Face() {
  return (
    <div className="mx-auto p-8 mb-72 md:mb-0 text-metropolis_alpha_teal">
      <div className="mx-8 lg:mx-48 h-96 content-center flex flex-col md:flex-row md:w-auto md:flex-grow md:flex md:items-center ">
        <div className="inline-block h-full md:mx-0 lg:mx-20 flex-row md:flex-col">
          <div className="flex-col md:flex-none ">
            <div className="font-bold text-4xl p-2 "> Gordon Lei </div>
            <div className="font-medium text-2xl p-2 text-metropolis_alpha_yellow">
              {" "}
              Graduate Student Pursuing MS in Software Engeering @ Carnegie
              Mellon University Silicon Valley{" "}
            </div>
            <div className="font-normal text-xl p-2 text-metropolis_alpha_red grid grid-cols-1 divide-y-4">
              {" "}
              Email:
              <a className="text-blue-400 " href="mailto: glei@andrew.cmu.edu">
                {" "}
                glei@andrew.cmu.edu
              </a>
              <div className="mb-2 text-metropolis_alpha_teal font-semibold text-2xl my-4">
                <div className="my-4">Welcome to my website!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block h-full">
          <img
            className="h-full w-auto mb-8"
            src={process.env.PUBLIC_URL + "/img/mountains.jpg"}
            alt="profile"
          />
          <div className="flex flex-row place-content-center space-x-8 md:space-x-20 ">
            <span className="w-16 h-16  p-2 rounded-xl bg-white opacity-50 border-4 border-metropolis_alpha_yellow hover:border-metropolis_alpha_red hover:opacity-100  ease-in duration-500">
              <a className="" href="https://github.com/GordonLei">
                <img
                  className="sm:w-min justify-center"
                  src={process.env.PUBLIC_URL + "/img/favicons/github.png"}
                  alt="missing SkillsCard"
                ></img>
              </a>
            </span>
            <span className="w-16 h-16 p-2 rounded-xl bg-white opacity-50 border-4 border-metropolis_alpha_yellow hover:border-metropolis_alpha_red hover:opacity-100  ease-in duration-500">
              <a
                className=""
                href="https://linkedin.com/in/gordon-lei-a1b238181"
              >
                <img
                  className="h-full justify-center"
                  src={process.env.PUBLIC_URL + "/img/favicons/LI-In-Bug.png"}
                  alt="missing SkillsCard"
                ></img>
              </a>
            </span>
            <span className="w-16 h-16 p-2 rounded-xl bg-white opacity-50 border-4 border-metropolis_alpha_yellow hover:border-metropolis_alpha_red hover:opacity-100  ease-in duration-500">
              <a className="" href="mailto: lei.gordon@nyu.edu">
                <img
                  className="h-full justify-center"
                  src={process.env.PUBLIC_URL + "/img/favicons/email.png"}
                  alt="missing SkillsCard"
                ></img>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Face;

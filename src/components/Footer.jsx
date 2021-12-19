import React from "react";

function Footer() {
  return (
    <section className="my-8 py-4 px-8">
      <footer className="flex flex-col md:flex-row">
        <div className="flex-1 items-center px-16 text-xl text-justify py-4">
          <a className="text-blue-400 " href="mailto: lei.gordon@nyu.edu">
            {" "}
            lei.gordon@nyu.edu
          </a>
        </div>
        <div className="flex items-center float-right">
          <a
            className="text-blue-500 border-2 rounded-xl py-2 px-4"
            href="https://github.com/GordonLei/gordonlei-react/tree/main"
          >
            Source code
          </a>

          <a href="https://github.com/GordonLei">
            <img
              className="h-10 mb-2 mx-4 justify-center"
              src={process.env.PUBLIC_URL + "/img/favicons/github.png"}
              alt="missing SkillsCard"
            ></img>
          </a>
          <a href="https://linkedin.com/in/gordon-lei-a1b238181">
            <img
              className="h-10 mb-2 mx-4 justify-center"
              src={process.env.PUBLIC_URL + "/img/favicons/LI-In-Bug.png"}
              alt="missing SkillsCard"
            ></img>
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;

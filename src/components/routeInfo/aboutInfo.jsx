import React from "react";

function AboutInfo() {
  return (
    <>
      <div className="font-bold text-2xl">About Me</div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="relative w-full flex-grow py-8 px-8 text-lg space-y-8">
        <p className="indent-8">
          Hello, my name is Gordon Lei, a current graduate student pursuing a
          Masters of Science in Software Engineering at the Carnegie Mellon
          University Silicon Valley Campus. For me, my love for computer science
          began from an unconventional item but was essential for any student; a
          TI-84 graphing calculator. Since the first day of class, my professor
          discussed how important it was to understand how to use our tools
          efficiently and suggested to everyone to read the TI-84 manual and
          learn their basic language known as TI-Basic.
        </p>
        <p>
          From making small applets that were mainly games that interested me,
          my love for programming sprouted to something I hold dearly today
          which is a little strange to me when I think back on how much one item
          impacted my whole life. In the future, I hope to be a software
          developer or potentially working within the cyber-security field. If
          I'm not working on schoolwork or personal projects, I am probably
          pursuing my newfound passion for photography or researching the latest
          news on mechanical keyboards.
        </p>
      </div>
    </>
  );
}

export default AboutInfo;

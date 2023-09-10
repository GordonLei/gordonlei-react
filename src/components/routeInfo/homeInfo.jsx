import React from "react";

function HomeInfo() {
  return (
    <>
      <div className="font-bold text-2xl">Home Page</div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="relative w-full flex-grow py-8 px-8 text-lg space-y-8">
        <div>
          During 8th grade, I was introduced to a tool tangental to computer
          science but essential to any math student's toolkit, a TI-84 graphing
          calculator. Ever since the first day of class, my Algebra 1 teacher
          professed the importance of being able to understand how to use our
          tools to the full extent and persuaded his students to read the TI-84
          manual and encouraged us to learn how to program using the calculator.
          From creating simple apps such as the 22-counting math game, I fell
          into the rabbit hole of programming.
        </div>

        <div>
          Today I am a last semester graduate student pursuing a Masters in
          Software Engineering at Carnegie Mellon University. If I am not
          working on school work or personal projects, I am usually pursuing my
          passion of photography, hanging out with friends, or playing video
          games.
        </div>
      </div>
    </>
  );
}

export default HomeInfo;

import React from "react";

function About() {
  return (
    <section className="m-8 mt-24 sm:mt-0">
      <div className="text-center font-semibold text-3xl text-metropolis_alpha_yellow">
        About
      </div>
      <div className="mx-8 lg:mx-16 xl:mx-40 w-auto p-4 my-10 flex flex-col place-items-center border-2 border-gray-100 shadow-2xl md:flex-row">
        <div className="w-auto mx-8">
          <img className="h-80" src={process.env.PUBLIC_URL + '/img/profile.png'} alt="profile" />
        </div>

        <div className="relative w-full flex-grow py-8 text-metropolis_alpha_teal text-lg sm:w-1/2 ">
          Hello, my name is Gordon Lei, a current junior pursuing a Bachelor of Science in computer
          science at the New York University Tandon School Of Engineering. For me, my love for
          computer science began from an unconventional item but was essential for any student; a
          TI-84 graphing calculator. Since the first day of class, my professor discussed how important
          it was to understand how to use our tools efficiently and suggested to everyone to read the
          TI-84 manual and learn their basic language known as TI-Basic. From making small applets that
          were mainly games that interested me, my love for programming sprouted to something I hold
          dearly today which is a little strange to me when I think back on how much one item impacted my
          whole life. In the future, I hope to be a software developer or potentially working within the
          cyber-security field. If I’m not working on schoolwork or personal projects, I am probably pursuing my
          newfound passion for cooking or researching the latest news on mechanical keyboards.
        </div>

      </div>

    </section>

  );
}

export default About;

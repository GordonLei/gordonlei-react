import React from "react";

function Resume() {
  return (
    <section className="my-28">
      <div className="flex flex-col place-items-center">
      
        <div className="text-center font-semibold text-3xl text-metropolis_alpha_yellow mb-16"> 
            Resume
        </div>
        <iframe className="" width="75%" height="750px" src= {process.env.PUBLIC_URL + '/documents/leiG_resume_GITHUB.pdf'} title="Gordon Lei Resume">
        </iframe>
      </div>
    </section>
  );
}

export default Resume;

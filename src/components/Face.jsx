import React from "react";

function Face() {
  return (
    <section className = "mx-auto p-8"> 
      <div className="h-96 content-center flex flex-col md:flex-row md:w-auto md:flex-grow md:flex md:items-center ">
        <div className="inline-block h-full">
          <img className="h-full w-auto" src= {process.env.PUBLIC_URL + '/img/profile.png'}  alt="profile" />
        </div>
        <div className = "inline-block h-full m-auto">
          <p className="text-center font-bold text-4xl p-2"> Gordon Lei </p>
          <p className="text-center font-medium text-2xl p-2"> Undergraduate at New York University Tandon School of Engineering </p>
          <p className="text-center font-normal text-xl p-2"> Email:  
            <a className = "text-blue-400" href="mailto: lei.gordon@nyu.edu"> lei.gordon@nyu.edu</a> 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Face;

import React from "react";

function ResumeInfo() {
  return (
    <>
      <div className="font-bold text-2xl">Resume</div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex justify-center">
        <iframe
          className=""
          width="100%"
          height="750px"
          src={process.env.PUBLIC_URL + "/documents/leiG_resume_GITHUB.pdf"}
          title="Gordon Lei Resume"
        ></iframe>
      </div>
    </>
  );
}

export default ResumeInfo;

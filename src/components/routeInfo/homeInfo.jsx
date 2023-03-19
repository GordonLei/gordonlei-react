import React from "react";

function HomeInfo() {
  return (
    <>
      <div>Home Page</div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div>
        Welcome to my website. You can find my <a href="/resume">resume</a>,{" "}
        <a href="/completedProjects">completed projects</a>, and{" "}
        <a href="/wipProjects">work-in-project projects</a>,{" "}
      </div>
    </>
  );
}

export default HomeInfo;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/home";
import About from "../routes/about";
import CompletedProjects from "../routes/completedProjects";
import WipProjects from "../routes/wipProjects";
import Resume from "../routes/resume";
import Skills from "../routes/skills";
import OldSPA from "../components/OldSPA";
import Experience from "../routes/experience";
/*
<Router>
      <div>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/completedProjects">
            <CompletedProjects />
          </Route>
          <Route path="/wipProjects">
            <WipProjects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/oldSPA">
            <OldSPA />
          </Route>
        </Routes>
      </div>
    </Router>
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/CompletedProjects",
    element: <CompletedProjects />
  },
  {
    path: "/WipProjects",
    element: <WipProjects />
  },
  {
    path: "/Resume",
    element: <Resume />
  },
  {
    path: "/Skills",
    element: <Skills />
  },
  {
    path: "/OldSPA",
    element: <OldSPA />
  },
  {
    path: "/Experience",
    element: <Experience />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

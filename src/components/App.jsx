import Navbar from "./Navbar";
import Face from "./Face";
import About from "./About";
import Experience from "./Experience";
import WIP from "./WIP";
import Completed from "./Completed";
import Resume from "./Resume";
import Footer from "./Footer";
import Skills from "./Skills";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-metropolis_base p-4">
        <Face />
        <div id="about"></div>
        <br></br>
        <br></br>
        <About />
      </div>
      <div className="bg-arch_base p-4">
        <div id="skills"></div>
        <br></br>
        <br></br>
        <br></br>

        <Skills />
      </div>
      <div className="bg-playground_base p-4">
        <div id="experience"></div>
        <br></br>
        <br></br>
        <br></br>
        <Experience />
      </div>
      <div className="bg-metropolis_base p-4">
        <div id="WIP"></div>
        <WIP />
      </div>

      <div className="bg-arch_base p-4">
        <div id="completed"></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Completed />
      </div>
      <div className="bg-metropolis_base p-4">
        <div id="resume">
          <br></br>
          <Resume />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import Face from "./Face";
import About from "./About";
import Experience from "./Experience";
import WIP from "./WIP";
import Completed from "./Completed";
import Resume from "./Resume";
import Footer from "./Footer";
import Skills from "./Skills"

function App() {
  return (
    
    <div> 
      <Navbar />
      <Face />
      <About />
      <Skills />
      <Experience />
      <WIP />
      <Completed />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;

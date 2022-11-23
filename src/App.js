import AnimationBox from "./components/AnimationBox";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Resume from "./components/Resume";
import About from "./components/About";

function App() {
  return (
    <div>
      <AnimationBox />
      <About />
      <Navbar />
      <Sidebar />
      <Skills />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

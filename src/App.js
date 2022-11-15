import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Resume from "./components/Resume";
import AnimationBox from "./components/AnimationBox";

function App() {
  return (
    <div>
      <AnimationBox />
      <Navbar />
      <Sidebar />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

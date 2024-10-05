import About from "./Component/About";
import Home from "./Component/Home";
import Section from "./Component/Section";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./Styles/MediaQuery.css";
import {HashRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Home />
        <Routes>
          <Route path="/" element = {<Section />} />
        </Routes>
        <Routes>
          <Route path="/" element = {<About />} />
        </Routes>
        <Routes>
          <Route path="/" element = {<Skills />} />
        </Routes>
        <Routes>
          <Route path="/" element = {<Projects />} />
        </Routes>
        <Routes>
          <Route path="/" element = {<Contact />} />
        </Routes>
        <Footer/>
{/*         
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> */}
      </HashRouter>
    </>
  );
}

export default App;

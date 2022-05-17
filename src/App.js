import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Skill from "./components/skills/skills";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <Skill />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

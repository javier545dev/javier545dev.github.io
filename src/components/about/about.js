import React from "react";
import "./about.css";
import Qualifications from "../qualifications/qualifications";

function About() {
  return (
    <div id="about" className="container2 about-container">
      <h2 className="quali-text">All Projects</h2>
      <Qualifications />
    </div>
  );
}
export default About;

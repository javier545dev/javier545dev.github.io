import React from "react";
import "./home.css";
import img from "../props/img2.jpg";
import { BsMouse } from "react-icons/bs";
import Buttons from "../button/button";

function Home() {
  return (
    <div className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span>
        <br />
        <p>
          My professional objective is based on acquiring new skills and
          abilities that allow me to create new digital solutions that generate
          an impact and benefit to society. Passion and discipline are the key
          tools for creating a new version of ourselves every day.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}
export default Home;

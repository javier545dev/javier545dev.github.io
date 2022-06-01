import React from "react";
import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#members" className="btn pri">
        Learn more
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;

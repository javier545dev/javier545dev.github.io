import React from "react";
import PDF from "../assets/CV-JF.pdf";
import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#members" className="btn pri">
        Learn more
      </a>
      <a
        href={PDF}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="btn sec"
      >
        Get CV
      </a>
    </div>
  );
}

export default Buttons;

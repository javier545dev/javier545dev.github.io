import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiSass,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiFigma,
  SiAdobexd,
  SiMaterialui,
  SiTailwindcss,
  SiBootstrap,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiWebpack,
  SiStrapi,
  SiFirebase,
} from "react-icons/si";
import "./skills.css";

const Skill = () => {
  return (
    <div id="skills" className="container2">
      <h1 className="skill-txt">My Skills</h1>
      <ul className="container-skill">
        <li className="skill-icon">
          <SiHtml5 />
        </li>
        <li className="skill-icon">
          <SiCss3 />
        </li>
        <li className="skill-icon">
          <DiJavascript1 />
        </li>
        {/* <li className="skill-icon">
          <SiTypescript />
        </li> */}
        <li className="skill-icon">
          <DiNodejs />
        </li>
        <li className="skill-icon">
          <SiWebpack />
        </li>
        <li className="skill-icon">
          <SiFirebase />
        </li>
        <li className="skill-icon">
          <DiReact />
        </li>
        <li className="skill-icon">
          <SiRedux />
        </li>
        <li className="skill-icon">
          <DiSass />
        </li>
        <li className="skill-icon">
          <SiMaterialui />
        </li>
        <li className="skill-icon">
          <SiStyledcomponents />
        </li>
        <li className="skill-icon">
          <SiBootstrap />
        </li>
        <li className="skill-icon">
          <SiTailwindcss />
        </li>
        <li className="skill-icon">
          <SiFigma />
        </li>
        <li className="skill-icon">
          <SiAdobexd />
        </li>
        <li className="skill-icon">
          <SiStrapi />
        </li>
        <li className="skill-icon">
          <DiGit />
        </li>
      </ul>
    </div>
  );
};

export default Skill;

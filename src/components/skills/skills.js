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
        <div className="tooltip">
          <li className="skill-icon">
            <SiHtml5 />
          </li>
          <span className="tooltiptext">
            <h3>HTML</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiCss3 />
          </li>
          <span className="tooltiptext">
            <h3>CSS</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <DiJavascript1 />
          </li>
          <span className="tooltiptext">
            <h3>JavaScript</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiTypescript />
          </li>
          <span className="tooltiptext">
            <h3>TypeScript</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <DiNodejs />
          </li>
          <span className="tooltiptext">
            <h3>NodeJS</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiWebpack />
          </li>
          <span className="tooltiptext">
            <h3>Webpack</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiFirebase />
          </li>
          <span className="tooltiptext">
            <h3>Firebase</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <DiReact />
          </li>
          <span className="tooltiptext">
            <h3>ReactJS</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiRedux />
          </li>
          <span className="tooltiptext">
            <h3>ReduxJS</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <DiSass />
          </li>
          <span className="tooltiptext">
            <h3>Sass</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiMaterialui />
          </li>
          <span className="tooltiptext">
            <h3>MaterialUI</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiStyledcomponents />
          </li>
          <span className="tooltiptext">
            <h3>StyledComponent</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiBootstrap />
          </li>
          <span className="tooltiptext">
            <h3>BootsTrapCSS</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiTailwindcss />
          </li>
          <span className="tooltiptext">
            <h3>TailwindsCSS</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiFigma />
          </li>
          <span className="tooltiptext">
            <h3>Figma</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiAdobexd />
          </li>
          <span className="tooltiptext">
            <h3>AdobeXD</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <SiStrapi />
          </li>
          <span className="tooltiptext">
            <h3>Strapi</h3>
          </span>
        </div>

        <div className="tooltip">
          <li className="skill-icon">
            <DiGit />
          </li>
          <span className="tooltiptext">
            <h3>Git</h3>
          </span>
        </div>
      </ul>
    </div>
  );
};

export default Skill;

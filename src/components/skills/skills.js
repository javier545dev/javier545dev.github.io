import React from "react";
import { SkillBars } from "react-skills";
import "./skills.css";

const Skill = () => {
  const skillsData = [
    {
      name: "HTML",
      level: 99,
      color: "#e34c26",
    },
    {
      name: "CSS",
      level: 99,
      color: "#5f26e3",
    },
    {
      name: "JavaScript",
      level: 99,
      color: "#6e26e3",
    },
    {
      name: "BootStrap",
      level: 99,
      color: "#ef0a75",
    },
    {
      name: "MaterialUI",
      level: 99,
      color: "#37b6b8",
    },
    {
      name: "ReactJS",
      level: 100,
      color: "#7341f2",
    },
    {
      name: "Figma",
      level: 85,
      color: "#e3a126",
    },
  ];
  return (
    <div className="container2">
      <h1 className="skill-txt">My Skills</h1>
      <div className="container-skill">
        <SkillBars
          hue="300"
          saturation="40"
          duration={5}
          barsHeight={40}
          labelsWidth={100}
          skills={skillsData}
        />
      </div>
    </div>
  );
};

export default Skill;

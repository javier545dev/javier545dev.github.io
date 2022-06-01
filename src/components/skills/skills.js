import React from "react";
import { SkillBars } from "react-skills";
import "./skills.css";

const Skill = () => {
  const skillsData = [
    {
      name: "HTML",
      level: 70,
      color: "#e34c26",
    },
    {
      name: "CSS",
      level: 45,
      color: "#5f26e3",
    },
    {
      name: "JavaScript",
      level: 50,
      color: "#bc100d",
    },
    {
      name: "BootStrap",
      level: 60,
      color: "#ef0a75",
    },
    {
      name: "MaterialUI",
      level: 70,
      color: "#37b6b8",
    },
    {
      name: "TailwindsCss",
      level: 70,
      color: "#805715",
    },
    {
      name: "ReactJS",
      level: 45,
      color: "#7341f2",
    },
    {
      name: "Hooks",
      level: 70,
      color: "#854a7d",
    },
    {
      name: "Redux",
      level: 40,
      color: "#6baa27",
    },
    {
      name: "Firebase",
      level: 56,
      color: "#8f765f",
    },
    {
      name: "Figma",
      level: 75,
      color: "#e3a126",
    },
  ];
  return (
    <div id="skills" className="container2">
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

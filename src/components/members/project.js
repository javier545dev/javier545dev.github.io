import React from "react";
import "./project.css";

const Projects = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="project-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">InstaPets</h1>
          <h3 className="tecnology">React</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <div className="content-button">
            <a href="#contact" className="contact-member">
              <span>Link</span>
            </a>
            <a href="#contact" className="contact-member">
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">WhatsApp Clone</h1>
          <h3 className="tecnology">React Native</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <div className="content-button">
            <a href="#contact" className="contact-member">
              <span>Link</span>
            </a>
            <a href="#contact" className="contact-member">
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">React Weather</h1>
          <h3 className="tecnology">React</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <div className="content-button">
            <a href="#contact" className="contact-member">
              <span>Link</span>
            </a>
            <a href="#contact" className="contact-member">
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

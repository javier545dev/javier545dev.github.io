import React from "react";
import "./project.css";

const Projects = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="project-txt">Top Projects</h1>
      <div className="container-cards">
        <div className="member member-1">
          <div className="member-img">
            <img
              src="https://i.postimg.cc/Px6B1QVP/Captura-de-Pantalla-2022-06-13-a-la-s-18-14-04.png"
              alt="PaladinTech"
            />
          </div>
          <div className="member-info">
            <h1 className="name">PaladinTech</h1>
            <h3 className="tecnology">NextJs - PaladinTech</h3>
            <h4 className="about">
              Next Landing Page with Theme-UI, Vercel and Netlify deployment
            </h4>
            <div className="content-button">
              <a
                href="https://paladin-tech.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Link</span>
              </a>
              <a
                href="https://github.com/javier545dev/paladin-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>

        <div className="member member-2">
          <div className="member-img">
            <img
              src="https://i.postimg.cc/j22Y1FnH/instapets-X4-1.jpg"
              alt="Instapets"
            />
          </div>
          <div className="member-info">
            <h1 className="name">InstaPets</h1>
            <h3 className="tecnology">React - PWA</h3>
            <h4 className="about">
              Instapets is a PWA for mobile with React, CSS3 and Html5
            </h4>
            <div className="content-button">
              <a
                href="https://practic-instapet.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Link</span>
              </a>
              <a
                href="https://github.com/javier545dev/socialPet"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>

        <div className="member member-3">
          <div className="member-img">
            <img
              src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/03/03/15832721735389.jpg"
              alt="WhatsApp Clone"
            />
          </div>
          <div className="member-info">
            <h1 className="name">WhatsApp Clone</h1>
            <h3 className="tecnology">React Native</h3>
            <h4 className="about">
              Clone of WhatsApp APP with Styled Components, Pendients Deploy in
              AppStore
            </h4>
            <div className="content-button">
              <a
                href="https://github.com/javier545dev/WhatsApp-Clone-in-React-Native"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Link</span>
              </a>
              <a
                href="https://github.com/javier545dev/WhatsApp-Clone-in-React-Native"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>

        <div className="member member-4">
          <div className="member-img">
            <img
              src="https://i.postimg.cc/s2zdzXZD/Captura-de-Pantalla-2022-06-13-a-la-s-17-33-21.png"
              alt="React Weather"
            />
          </div>
          <div className="member-info">
            <h1 className="name">React Weather</h1>
            <h3 className="tecnology">React</h3>
            <h4 className="about">
              Basic weather api consumption with react, styles with native css
            </h4>
            <div className="content-button">
              <a
                href="https://react-weather-app-28b2b.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Link</span>
              </a>
              <a
                href="https://github.com/javier545dev/react-weather-app"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-member"
              >
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

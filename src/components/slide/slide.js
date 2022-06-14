/* eslint-disable react/jsx-key */
import React from "react";
// import paladin from "../../assets/paladin.png";
// import instapets from "../../assets/instapets.jpeg";
// import landing from "../../assets/landing.png";
// import weather from "../../assets/weather.png";
import "./slider.css";

const slidesInfo = [
  {
    src: "https://i.postimg.cc/Px6B1QVP/Captura-de-Pantalla-2022-06-13-a-la-s-18-14-04.png",
    link: "https://paladin-tech.vercel.app/",
    alt: "PaladinTech",
    desc: "Paladin with Next.js",
  },
  {
    src: "https://i.postimg.cc/j22Y1FnH/instapets-X4-1.jpg",
    link: "https://practic-instapet.vercel.app/",
    alt: "Instapet",
    desc: "Instapet PWA for Mobile",
  },
  {
    src: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/03/03/15832721735389.jpg",
    link: "https://github.com/javier545dev/WhatsApp-Clone-in-React-Native",
    alt: "WhatsApp Clone",
    desc: "WhatsApp Clone React Native",
  },
  {
    src: "https://i.postimg.cc/s2zdzXZD/Captura-de-Pantalla-2022-06-13-a-la-s-17-33-21.png",
    link: "https://react-weather-app-28b2b.web.app/",
    alt: "React Weather App",
    desc: "React Weather App",
  },
  {
    src: "https://i.postimg.cc/j5kFDdCf/Captura-de-Pantalla-2022-06-13-a-la-s-17-57-45.png",
    link: "https://javier545dev.github.io/landing-react/",
    alt: "React Landing Page with MaterialUI",
    desc: "React Landing Page",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.link} target="_blank" rel="noopener noreferrer">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </a>
  </div>
));

export default slides;

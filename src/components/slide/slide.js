/* eslint-disable react/jsx-key */
import React from "react";
import "./slider.css";

const slidesInfo = [
  {
    src: "https://cdn.pixabay.com/photo/2022/06/13/23/14/23-14-58-683_960_720.png",
    link: "https://paladin-tech.vercel.app/",
    alt: "PaladinTech",
    desc: "Paladin with Next.js",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/06/13/21/49/21-49-48-917_960_720.jpg",
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
    src: "https://cdn.pixabay.com/photo/2022/06/13/22/38/22-38-37-919_960_720.png",
    link: "https://react-weather-app-28b2b.web.app/",
    alt: "React Weather App",
    desc: "React Weather App",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/06/13/22/59/22-59-42-171_960_720.jpg",
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

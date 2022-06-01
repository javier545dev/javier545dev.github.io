import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import { slidesToShowPlugin, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./slider.css";
import slides from "./slide";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>
      <Carousel
        plugins={[
          "arrows",
          "infinite",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={1000}
        offset={50}
        itemWidth={300}
        slides={slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            itemWidth: 150,
          },
        }}
      />
    </div>
  );
};

export default Slider;

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
              animationDuration: 1000,
              autoplay: true,
              stopOnHover: true,
            },
          },
        ]}
        animationSpeed={2000}
        offset={50}
        itemWidth={400}
        slides={slides}
        breakpoints={{
          2000: {
            slidesPerPage: 5,
            itemWidth: 500,
          },
          1024: {
            slidesPerPage: 3,
            itemWidth: 400,
          },
          960: {
            slidesPerPage: 3,
            itemWidth: 250,
            offset: 50,
          },
          820: {
            slidesPerPage: 2,
            itemWidth: 200,
            offset: 30,
          },
          640: {
            slidesPerPage: 2,
            itemWidth: 200,
            offset: 20,
          },
          320: {
            slidesPerPage: 1,
            itemWidth: 200,
            offset: 5,
          },
        }}
      />
    </div>
  );
};

export default Slider;

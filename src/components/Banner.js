import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="banner-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Carousel fade>
        <Carousel.Item>
          {isSmallScreen ? (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/schoolbanner1.jpg")}
              alt=""
            />
          ) : (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/schoolbanner1.jpg")}
              alt=""
            />
          )}
          <Carousel.Caption>
            <h3 style={{ fontWeight: "700", color: "yellow" }}>
              Extraordinary
            </h3>
            <p style={{ fontWeight: "bold" }} className="d-none d-sm-block">
              Discover a world of knowledge, growth, and opportunities at our
              school, where every student's journey is extraordinary.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {isSmallScreen ? (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/schoolbanner3.jpg")}
              alt=""
            />
          ) : (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/schoolbanner3.jpg")}
              alt=""
            />
          )}
          <Carousel.Caption>
            <h3 style={{ fontWeight: "700", color: "yellow" }}>
              Learning Reimagined
            </h3>
            <p style={{ fontWeight: "bold" }} className="d-none d-sm-block">
              Join us on a path of innovative education that inspires curious
              minds and develops future leaders.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {isSmallScreen ? (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/schoolbanner2.jpg")}
              alt=""
            />
          ) : (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/schoolbanner2.jpg")}
              alt=""
            />
          )}
          <Carousel.Caption>
            <h3 style={{ fontWeight: "700", color: "yellow" }}>
              Inspire and Achieve
            </h3>
            <p style={{ fontWeight: "bold" }} className="d-none d-sm-block">
              Our commitment is to inspire each student to achieve their
              personal best in a supportive and engaging environment.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

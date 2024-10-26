import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Change the breakpoint as per your requirement
    };

    handleResize(); // Call initially to set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
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
              src={require("../assets/school8.jpg")}
              alt=""
            />
          ) : (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/school8.jpg")}
              alt=""
            />
          )}
          <Carousel.Caption>
            <h3 style={{ fontWeight: "700", color: "yellow" }}>
              extraordinary
            </h3>
            <p className="d-none d-sm-block">
              The real voyage of discovery consists not in seeking new
              landscapes, but in having new eyes. Discover it with GT Holidays,
              the No.1 brand in south India.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {isSmallScreen ? (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/school9.jpg")}
              alt=""
            />
          ) : (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/school9.jpg")}
              alt=""
            />
          )}
          <Carousel.Caption>
            <h3 style={{ fontWeight: "700", color: "yellow" }}>
              extraordinary
            </h3>
            <p className="d-none d-sm-block">
              The real voyage of discovery consists not in seeking new
              landscapes, but in having new eyes. Discover it with GT Holidays,
              the No.1 brand in south India.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {isSmallScreen ? (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/school5.jpg")}
              alt=""
            />
          ) : (
            <img
              className="d-block w-100 carousel-image"
              src={require("../assets/school5.jpg")}
              alt=""
            />
          )}
          <Carousel.Caption>
            <h3 style={{ fontWeight: "700", color: "yellow" }}>
              extraordinary
            </h3>
            <p className="d-none d-sm-block">
              The real voyage of discovery consists not in seeking new
              landscapes, but in having new eyes. Discover it with GT Holidays,
              the No.1 brand in south India.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

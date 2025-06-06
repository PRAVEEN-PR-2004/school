import React from "react";
import { Card, Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../assets/lab.webp";
import s2 from "../assets/childrenplayground.jpg";
import s3 from "../assets/computerlab.webp";
import s4 from "../assets/library.webp";

const Slider1 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4, // Shows 4 cards per slide
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3, // Shows 4 cards per slide
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="mt-4 mb-5">
      <Fade delay={1e2} cascade damping={1e-1}>
        <h3 style={{ marginBottom: "25px" }}>Facilities Provided by us</h3>
      </Fade>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {[s1, s2, s3, s4].map((image, index) => (
          <div key={index}>
            <Card style={{ margin: "5px", border: "none", boxShadow: "none" }}>
              <Card.Img
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  height: "250px", // Adjust height as needed
                  width: "100%", // Keeps width consistent
                  objectFit: "cover", // Ensures images scale proportionally
                }}
              />
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider1;

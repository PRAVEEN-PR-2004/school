import React from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../assets/football.jpg";
import s2 from "../assets/basketball.jpg";
import s3 from "../assets/kabaddi.jpg";
import s4 from "../assets/khokho.jpg";
import s5 from "../assets/volleyball.jpg";

const Slider2 = () => {
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
      <h3 style={{ fontFamily: "Playfair Display", color: "#3A3A3A" }}>
        Sports Activities
      </h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {[s1, s2, s3, s4, s5].map((image, index) => (
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

export default Slider2;

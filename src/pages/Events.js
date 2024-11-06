import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import "../components/Spot.css";
import { Fade } from "react-awesome-reveal";
import banner from "../assets/bgbanner.jpg";
import Linkcom from "../components/Linkcom";
import Footer from "../components/Footer";
const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Responsive font sizes
  const isSmallScreen = window.innerWidth <= 768;
  //   const titleFontSize = isSmallScreen ? "1.5rem" : "2.5rem"; // Adjusted size for small screens
  const headingFontSize = isSmallScreen ? "2rem" : "3.5rem"; // Adjusted size for small screens
  //   const textFontSize = isSmallScreen ? "0.9rem" : "1.2rem"; // Adjusted size for small screens

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={banner}
          alt="School Group Banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            maxHeight: "500px",
          }}
        />
        {/* Title Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: headingFontSize,
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 10,
            padding: "10px 20px",
          }}
        >
          EVENTS
        </div>
      </div>
      <Linkcom
        children={"School Events"}
        className="d-flex align-items-center justify-content-center"
      />
      <div>
        <Container className="mt-5 mb-5">
          <Fade delay={1e2} cascade damping={1e-1}>
            <h3 className="heading mb-3">School Events</h3>
          </Fade>
          <Row className="mt-3 mb-2">
            <Col lg={12} md={12} sm={12} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/students2.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{ maxWidth: "100vw", height: "100%" }}
                />
                <div className="overlay-content">
                  <span className="thead">Student Strength</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">1500 STUDENTS</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/sportsday.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Teacher Strength</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">80 TEACHERS</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/christmasday.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Total Classes</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">60 CLASSES</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/schoollab.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Total Classes</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">60 CLASSES</span>
                </div>
              </div>
            </Col>
            <Col lg={8} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/annualday.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Special Labs</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">5 LABS</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/pongalday.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Playgrounds</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">3 GROUNDS</span>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/childrenday.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Playgrounds</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">3 GROUNDS</span>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} className="mb-4">
              <div className="overlay-container">
                <img
                  src={require("../assets/teachersday.jpg")}
                  alt="SchoolWebsite"
                  className="img-fluid pack_img"
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content">
                  <span className="thead">Playgrounds</span>
                  <br></br>
                  <br></br>
                  <span className="tbox">3 GROUNDS</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Events;

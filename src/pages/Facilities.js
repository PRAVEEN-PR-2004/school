import React, { useEffect } from "react";
import lab from "../assets/lab.webp";
import library from "../assets/library.webp";
import computerlab from "../assets/computerlab.webp";
import playground from "../assets/childrenplayground.jpg";
import Linkcom from "../components/Linkcom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import banner from "../assets/bgbanner.jpg";

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Responsive font sizes
  const isSmallScreen = window.innerWidth <= 768;
  const titleFontSize = isSmallScreen ? "1.5rem" : "2.5rem"; // Adjusted size for small screens
  const headingFontSize = isSmallScreen ? "2rem" : "3.5rem"; // Adjusted size for small screens
  const textFontSize = isSmallScreen ? "0.9rem" : "1.2rem"; // Adjusted size for small screens

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
          FACILITIES
        </div>
      </div>

      <Linkcom
        children={"School Facilities"}
        className="d-flex align-items-center justify-content-center"
      />

      <Container className="mt-5">
        {/* Library */}
        <p
          style={{ fontSize: titleFontSize, fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          Library
        </p>
        <Row className="mb-3 gap-md-5">
          <Col className="order-md-2">
            <img
              src={library}
              alt="Library"
              style={{ width: "100%", height: "90%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5} className="order-md-1">
            <p
              style={{
                fontSize: textFontSize,
                lineHeight: "1.5", // Adjusted for better readability on small screens
                letterSpacing: "0.5px", // Reduced letter spacing for small screens
              }}
            >
              Our library offers a wide range of books, magazines, and digital
              resources. It serves as a quiet space where students can engage in
              independent study, conduct research, and cultivate a lifelong love
              for reading. The library is equipped with computers for online
              research, ensuring that students have access to the information
              they need to succeed in their studies. Whether for academic
              projects or personal interests, our library is a central hub of
              knowledge for all students.
            </p>
          </Col>
        </Row>

        {/* Science Lab */}
        <p
          style={{ fontSize: titleFontSize, fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          Science Lab
        </p>
        <Row className="mb-3 gap-md-5">
          <Col>
            <img
              src={lab}
              alt="Science Lab"
              style={{ width: "100%", height: "90%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5}>
            <p
              style={{
                fontSize: textFontSize,
                lineHeight: "1.5",
                letterSpacing: "0.5px",
              }}
            >
              Our fully-equipped science lab provides students with hands-on
              experience in biology, chemistry, and physics. Here, they conduct
              experiments that bring classroom concepts to life. Under the
              guidance of experienced teachers, students learn proper lab safety
              protocols and develop critical thinking skills through
              observation, hypothesis, and experimentation. The lab offers
              state-of-the-art equipment and supplies, fostering curiosity and
              preparing students for future scientific pursuits.
            </p>
          </Col>
        </Row>

        {/* Playground */}
        <p
          style={{ fontSize: titleFontSize, fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          Playground
        </p>
        <Row className="mb-3 gap-md-5">
          <Col className="order-md-2">
            <img
              src={playground}
              alt="Playground"
              style={{ width: "100%", height: "90%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5} className="order-md-1">
            <p
              style={{
                fontSize: textFontSize,
                lineHeight: "1.5",
                letterSpacing: "0.5px",
              }}
            >
              Our spacious playground provides students with an area for
              recreation and sports activities. Equipped with various play
              structures and athletic fields, the playground is designed for
              physical development and teamwork. Activities here help students
              build coordination, resilience, and social skills. From daily
              recess to organized sports, the playground is a vibrant part of
              student life and a place where they can unwind and enjoy their
              school day.
            </p>
          </Col>
        </Row>

        {/* Computer Lab */}
        <p
          style={{ fontSize: titleFontSize, fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          Computer Lab
        </p>
        <Row className="mb-3 gap-md-5">
          <Col className="order-md-1">
            <img
              src={computerlab}
              alt="Computer Lab"
              style={{ width: "100%", height: "90%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5} className="order-md-2">
            <p
              style={{
                fontSize: textFontSize,
                lineHeight: "1.5",
                letterSpacing: "0.5px",
              }}
            >
              The computer lab provides a modern environment for digital
              learning, equipped with the latest technology to support our
              students’ educational needs. Students can work on projects,
              conduct online research, and learn essential skills in programming
              and digital literacy. Supervised by skilled instructors, the
              computer lab is a space where students can explore technology and
              prepare for a digital future. Regular sessions ensure that all
              students develop the technical skills required in today’s world.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Facilities;

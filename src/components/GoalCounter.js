import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const GoalCounter = () => {
  const [startCounter, setStartCounter] = useState(false);

  // Function to handle scroll and start counter
  const handleScroll = () => {
    const element = document.getElementById("goal-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setStartCounter(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      fluid
      id="goal-section"
      className="text-center mt-5 my-5 d-flex flex-column justify-content-start align-items-center mx-auto "
      style={{
        minHeight: "90vh", // Minimum height but can grow
        maxWidth: "90%", // Restrict the container width
        padding: "0 20px", // Padding on the sides
        backgroundColor: "#e2e8f0",
      }}
    >
      {/* Top heading */}
      <h2 className="" style={{ color: "green", marginTop: "5%" }}>
        Our Goal is to Inspire
      </h2>

      {/* Centered content */}
      <div
        className="d-flex flex-column justify-content-center align-items-center w-100 text-white p-4"
        style={{
          flex: 1, // Use remaining space to center vertically
        }}
      >
        <Row className="w-100">
          <Col xs={12} sm={6} md={3} className="mb-3 text-center">
            <p className="fw-bold fs-5">More Than</p>
            <h1 className="fw-bold" style={{ color: "#00f", fontSize: "2rem" }}>
              {startCounter ? <CountUp end={1000} duration={5} /> : 0}+
            </h1>
            <p className="fs-6">Children</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3 text-center">
            <p className="fw-bold fs-5">In the Next</p>
            <h1 className="fw-bold" style={{ color: "#00f", fontSize: "2rem" }}>
              {startCounter ? <CountUp end={365} duration={5} /> : 0}
            </h1>
            <p className="fs-6">Days</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3 text-center">
            <p className="fw-bold fs-5">With a</p>
            <h1 className="fw-bold" style={{ color: "#00f", fontSize: "2rem" }}>
              {startCounter ? <CountUp end={50} duration={5} /> : 0}
            </h1>
            <p className="fs-6">Teachers</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3 text-center">
            <p className="fw-bold fs-5">By becoming the</p>
            <h1 className="fw-bold" style={{ color: "#00f", fontSize: "2rem" }}>
              {startCounter ? <CountUp end={1} duration={5} /> : 0}
            </h1>
            <p className="fs-6">No.1 School</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default GoalCounter;

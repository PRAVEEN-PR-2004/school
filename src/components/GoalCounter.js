import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const GoalCounter = () => {
  const [startCounter, setStartCounter] = useState(false);
  const goalRef = useRef(null);

  // Function to handle scroll and start counter
  const handleScroll = () => {
    if (startCounter) return;
    const element = goalRef.current;
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
  }, [startCounter]);

  return (
    <Container
      fluid
      ref={goalRef}
      id="goal-section"
      className="text-center d-flex flex-column align-items-center mx-auto"
      style={{
        minHeight: "90vh",
        maxWidth: "90%",
        padding: "40px 20px",
        backgroundColor: "#f7fafc",
      }}
    >
      {/* Top heading */}
      <h2
        style={{
          background: "linear-gradient(90deg, #56ab2f, #a8e063)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "clamp(1.8rem, 2.5vw, 3rem)",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Our Goal is to Inspire
      </h2>

      {/* Centered content */}
      <div
        className="d-flex flex-column align-items-center w-100 text-dark p-4"
        style={{ flex: 1 }}
      >
        <Row className="w-100" xs={1} sm={2} md={4} style={{ gap: "1rem" }}>
          <Col className="mb-3 text-center">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                className="fw-bold"
                style={{ fontSize: "1.2rem", color: "#4A5568" }}
              >
                More Than
              </p>
              <h1
                className="fw-bold"
                style={{
                  color: "#7b61ff",
                  fontSize: "2.2rem",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                {startCounter ? <CountUp end={1000} duration={5} /> : 0}+
              </h1>
              <p style={{ color: "#718096", fontSize: "1rem" }}>Children</p>
            </div>
          </Col>
          <Col className="mb-3 text-center">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                className="fw-bold"
                style={{ fontSize: "1.2rem", color: "#4A5568" }}
              >
                In the Next
              </p>
              <h1
                className="fw-bold"
                style={{
                  color: "#f56565",
                  fontSize: "2.2rem",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                {startCounter ? <CountUp end={365} duration={5} /> : 0}
              </h1>
              <p style={{ color: "#718096", fontSize: "1rem" }}>Days</p>
            </div>
          </Col>
          <Col className="mb-3 text-center">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                className="fw-bold"
                style={{ fontSize: "1.2rem", color: "#4A5568" }}
              >
                With a
              </p>
              <h1
                className="fw-bold"
                style={{
                  color: "#63b3ed",
                  fontSize: "2.2rem",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                {startCounter ? <CountUp end={50} duration={5} /> : 0}
              </h1>
              <p style={{ color: "#718096", fontSize: "1rem" }}>Teachers</p>
            </div>
          </Col>
          <Col className="mb-3 text-center">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                className="fw-bold"
                style={{ fontSize: "1.2rem", color: "#4A5568" }}
              >
                By becoming the
              </p>
              <h1
                className="fw-bold"
                style={{
                  color: "#48bb78",
                  fontSize: "2.2rem",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                {startCounter ? <CountUp end={1} duration={5} /> : 0}
              </h1>
              <p style={{ color: "#718096", fontSize: "1rem" }}>No.1 School</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default GoalCounter;

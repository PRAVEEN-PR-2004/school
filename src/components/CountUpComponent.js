import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CountUpComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  const stats = [
    { id: 1, end: 500, label: "Students Enrolled" },
    { id: 2, end: 50, label: "Qualified Teachers" },
    { id: 3, end: 20, label: "Extra-curricular Activities" },
    { id: 4, end: 100, label: "Awards Won" },
  ];

  return (
    <Container
      ref={ref}
      className="my-5 p-3 d-flex justify-content-center align-items-center"
      style={{ minHeight: "400px" }}
    >
      <div className="text-center w-100">
        <h2
          className="text-center pb-5"
          style={{
            fontFamily: "Playfair Display",
            color: "#333",
            fontSize: "2.5rem",
          }}
        >
          Our Achievements
        </h2>
        <Row className="justify-content-center">
          {stats.map((stat) => (
            <Col
              key={stat.id}
              xs={12}
              md={3}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                className="text-center border-0"
                style={{
                  borderRadius: "10px",
                  boxShadow: "none", // Remove default shadow
                  backgroundColor: "transparent", // Remove default card background
                }}
              >
                <Card.Body>
                  <h3 style={{ fontSize: "3rem", color: "#007BFF" }}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.end}
                        duration={3.5}
                        separator=","
                        suffix="+"
                      />
                    )}
                  </h3>
                  <Card.Text
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      color: "#555",
                    }}
                  >
                    {stat.label}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default CountUpComponent;

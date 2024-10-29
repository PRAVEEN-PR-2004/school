import React, { useEffect } from "react";
import Linkcom from "../components/Linkcom";
import companyimg1 from "../assets/companyimg2.jpg";
import companyimg2 from "../assets/com.png";
import owner from "../assets/owner.jpg";

import { Col, Row, Container, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Linkcom children={"About Us"} />
      <Container className="mt-5">
        <Row className="mt-1 mb-5">
          <Col md={6}>
            <img
              src={companyimg1}
              style={{ width: "100%" }}
              alt="School Building"
            />
          </Col>
          <Col md={6}>
            <img
              src={companyimg2}
              style={{ width: "100%" }}
              alt="School Campus"
            />
          </Col>
        </Row>
        <h3
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-center"
        >
          Our Story
        </h3>
        <p
          style={{
            color: "#808080",
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif !important",
          }}
        >
          Founded in 1980, St. Antony's Matriculation Higher Secondary School
          has been dedicated to providing quality education and nurturing the
          young minds of tomorrow. Over the years, we have become one of the
          most respected educational institutions in the region, offering a
          balanced and enriching curriculum.
        </p>
        <p
          style={{
            color: "#808080",
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif !important",
          }}
        >
          We are committed to academic excellence and holistic development,
          ensuring our students grow into responsible, confident, and
          knowledgeable individuals. At St. Antony's, we foster a learning
          environment that encourages innovation, curiosity, and character
          building.
        </p>

        <hr
          style={{
            borderTop: "2px solid #BDBDBD",
            width: "100%",
            marginTop: "3.5%",
            marginBottom: "2%",
          }}
        />

        <Row>
          <Col md={6}>
            <h3 style={{ fontFamily: "Playfair Display, serif" }}>
              Our Mission
            </h3>
            <p
              style={{
                color: "#808080",
                fontSize: "14px",
                fontFamily: "Poppins, sans-serif !important",
              }}
            >
              St. Antony's is devoted to developing well-rounded individuals
              equipped with strong ethical values and the knowledge to thrive in
              a rapidly changing world. Our mission is to foster a supportive
              community that encourages academic excellence, self-discipline,
              and a lifelong love for learning.
            </p>
          </Col>
          <Col md={6}>
            <h3 style={{ fontFamily: "Playfair Display, serif" }}>
              Our Vision
            </h3>
            <p
              style={{
                color: "#808080",
                fontSize: "14px",
                fontFamily: "Poppins, sans-serif !important",
              }}
            >
              Our vision is to become a leading institution that inspires
              students to reach their full potential. We aim to cultivate a
              learning environment that values innovation, inclusion, and
              integrity, preparing students to contribute positively to society.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md={3}>
            <img
              src={owner}
              alt="Principal"
              style={{ width: "100%", height: "80%" }}
            />
            <br></br>
            <br></br>
            <span className="text-center">
              <p
                style={{
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif !important",
                  marginBottom: "0px",
                  fontWeight: "700",
                }}
              >
                Rev. Dr. Maria John
              </p>
              <p
                style={{
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif !important",
                  fontSize: "14px",
                }}
              >
                Principal
              </p>
            </span>
          </Col>
          <Col
            md={9}
            className="d-flex"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div>
              <h3
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-center"
              >
                Principal's Message
              </h3>
              <p
                style={{
                  color: "#808080",
                  fontFamily: "Poppins, sans-serif !important",
                  fontSize: "14px",
                }}
              >
                “At St. Antony's, we believe in empowering our students with the
                knowledge, skills, and values needed to face the challenges of
                tomorrow. Our dedicated team strives to provide a safe,
                nurturing, and stimulating environment where each student can
                flourish and achieve their aspirations.”
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col md={3} sm={12} className="mb-3">
            <Card
              className="h-100 p-5 text-center"
              style={{ border: "4px solid #fcb900" }}
            >
              <Card.Body>
                <Card.Title
                  className="text-center head"
                  style={{ fontFamily: " sans-serif ", fontSize: "25px" }}
                >
                  50+
                </Card.Title>
                <Card.Text className="text-center para">Teachers</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="mb-3">
            <Card
              className="h-100 p-5 text-center"
              style={{ border: "4px solid #fcb900" }}
            >
              <Card.Body>
                <Card.Title
                  className="text-center head"
                  style={{ fontFamily: " sans-serif ", fontSize: "25px" }}
                >
                  3000+
                </Card.Title>
                <Card.Text className="text-center para">Students</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="mb-3">
            <Card
              className="h-100 p-5 text-center"
              style={{ border: "4px solid #fcb900" }}
            >
              <Card.Body>
                <Card.Title
                  className="text-center head"
                  style={{ fontFamily: " sans-serif ", fontSize: "25px" }}
                >
                  50+
                </Card.Title>
                <Card.Text className="text-center para">Classrooms</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="mb-3">
            <Card
              className="h-100 p-5 text-center"
              style={{ border: "4px solid #fcb900" }}
            >
              <Card.Body>
                <Card.Title
                  className="text-center head"
                  style={{ fontFamily: " sans-serif ", fontSize: "25px" }}
                >
                  100+
                </Card.Title>
                <Card.Text className="text-center para">Achievements</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Aboutus;

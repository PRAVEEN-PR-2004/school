import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          height: "160px",
          display: "flex",
          alignItems: "center",
        }}
        className="text-center"
      >
        <Container>
          <Row style={{}} className="text-center">
            <Col md={6} className="text-center">
              <p style={{ fontSize: "2rem" }}>
                <FaMailBulk
                  style={{
                    marginRight: "2%",
                    fontFamily: "Playfair Display, serif",
                  }}
                />
                Get Updates & More
              </p>
            </Col>
            <Col md={6} className="text-center">
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Join in
                <a
                  href="https://chat.whatsapp.com/FenE5bzZMmG7x8rA6seyZI"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "8px",
                    fontSize: "2rem",
                  }}
                >
                  <FaWhatsapp
                    style={{
                      fontSize: "2.3rem",
                      fontFamily: "Playfair Display, serif",
                      color: "black",
                    }}
                  />
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="text-center"
        style={{
          width: "100%",
          padding: "50px 0",
          color: "white",
          backgroundColor: "#1C1C1C",
        }}
      >
        <Container>
          <Row>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Our Address
                </h3>
                <hr style={{ borderTop: "2px solid #BDBDBD", width: "100%" }} />
              </div>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                GJRR+H69,
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                SH 23,
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                Thruthuraipoondi,
              </p>
              <p
                style={{ fontSize: "12px", color: "#BDBDBD" }}
                className="mb-0"
              >
                Tamil Nadu 614713
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  School Name
                </h3>
                <hr
                  style={{ borderTop: "2px solid lightgray", width: "100%" }}
                />
              </div>

              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                St Antony's
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                Matriculation
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                Higher
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                Secondary
              </p>
              <p
                style={{ fontSize: "12px", color: "lightgray" }}
                className="mb-0"
              >
                School.
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Helpful Links
                </h3>
                <hr
                  style={{ borderTop: "2px solid lightgray", width: "100%" }}
                />
              </div>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About us
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link
                    to="/facilities"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Facilities
                  </Link>
                </li>
                <li
                  style={{ fontSize: "12px", color: "#BDBDBD" }}
                  className="mb-0"
                >
                  <Link
                    to="/contactus"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Call Us
                </h3>
                <hr style={{ borderTop: "2px solid white", width: "100%" }} />
              </div>

              <p
                style={{ fontSize: "20px", color: "#BDBDBD" }}
                className="mb-0"
              >
                +91 9940882200
              </p>
            </Col>
            <Col md={4} className="mb-5">
              <div style={{ display: "inline-block" }}>
                <h3
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Email Us
                </h3>
                <hr style={{ borderTop: "2px solid white", width: "100%" }} />
              </div>
              <p
                style={{ fontSize: "20px", color: "#BDBDBD" }}
                className="mb-0"
              >
                mail@stantonys.in
              </p>
            </Col>

            <Col md={4}>
              <div style={{ display: "inline-block" }}>
                <h3
                  style={{
                    color: "#BDBDBD",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  Follow Us
                </h3>
                <hr
                  style={{
                    borderTop: "2px solid white",
                    width: "100%",
                    color: "#BDBDBD",
                  }}
                />

                <p className="mt-4" style={{ color: "#BDBDBD" }}>
                  {" "}
                  <FaInstagram size={25} style={{ marginLeft: "10px" }} />
                  <FaFacebookF size={25} style={{ marginLeft: "10px" }} />
                  <FaLinkedinIn size={25} style={{ marginLeft: "10px" }} />
                  <FaYoutube size={25} style={{ marginLeft: "10px" }} />
                  <FaGoogle size={25} style={{ marginLeft: "10px" }} />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="text-center">
        <Row style={{ marginTop: "2%", marginBottom: "1%" }}>
          <Col sm={6}>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              Copyright © 2024 by ST ANTONY'S MAT. HR. SCHOOL. All Rights
              Reserved.
            </p>
          </Col>
          <Col sm={6}>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              Privacy Policy | Terms & Conditions
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

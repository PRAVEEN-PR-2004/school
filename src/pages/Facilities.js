import React, { useEffect } from "react";
import cruise from "../assets/cruise.png";
import lab from "../assets/lab.webp";
import library from "../assets/library.webp";
import computerlab from "../assets/computerlab.webp";

import Linkcom from "../components/Linkcom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ marginBottom: "1%" }}>
        <img
          src={cruise}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Linkcom
        children={"Cordelia Cruises"}
        className="d-flex  align-items-center justify-content-center"
      />
      <Container style={{}} className="mt-5">
        <p
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          library
        </p>
        <Row className="mb-3 gap-md-5">
          <Col className="order-md-2">
            <img
              src={library}
              alt="c"
              style={{ width: "100%", height: "90%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5} className="order-md-1">
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7", // Adjusts line spacing
                letterSpacing: "0.7px", // Adjusts letter spacing
              }}
            >
              If you were eagerly waiting for a fun family holiday, this is the
              best time for it. Surprise your family with a holiday plan like
              never before. Take them to a new world of amusement on the cruise.
              We assure you that these bunches of amazing provisions by Cordelia
              cruise will be one of your most comfortable journeys. Wait, are
              you pondering upon the Cordelia Cruise prices? Well, you are
              thinking in the right place. However, luxury is not so cheap. But,
              you will be happy to know that the price for the tour will not put
              so much of a burden on your pocket. The Empress is offering so
              many facilities to you, for which the fare, for your tour, is
              justifying. Also, the price depends on your boarding and
              destination point, which may differ. We assure you that these
              bunches of amazing provisions by Cordelia cruise will be one of
              your most comfortable journeys. Wait, are you pondering upon the
              Cordelia Cruise prices?
            </p>
          </Col>
        </Row>
        <p
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          Lab
        </p>
        <Row className="mb-3 gap-md-5">
          <Col className="">
            <img
              src={lab}
              alt="c"
              style={{ width: "100%", height: "90%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5} className="">
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7", // Adjusts line spacing
                letterSpacing: "0.7px", // Adjusts letter spacing
              }}
            >
              If you were eagerly waiting for a fun family holiday, this is the
              best time for it. Surprise your family with a holiday plan like
              never before. Take them to a new world of amusement on the cruise.
              We assure you that these bunches of amazing provisions by Cordelia
              cruise will be one of your most comfortable journeys. Wait, are
              you pondering upon the Cordelia Cruise prices? Well, you are
              thinking in the right place. However, luxury is not so cheap. But,
              you will be happy to know that the price for the tour will not put
              so much of a burden on your pocket. The Empress is offering so
              many facilities to you, for which the fare, for your tour, is
              justifying. Also, the price depends on your boarding and
              destination point, which may differ. We assure you that these
              bunches of amazing provisions by Cordelia cruise will be one of
              your most comfortable journeys. Wait, are you pondering upon the
              Cordelia Cruise prices?
            </p>
          </Col>
        </Row>
        <p
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          className="text-center text-lg-start"
        >
          Computer lab
        </p>
        <Row className="mb-3 gap-md-5">
          <Col className="order-md-2">
            <img
              src={computerlab}
              alt="c"
              style={{ width: "100%", height: "80%" }}
              className="mt-0"
            />
          </Col>
          <Col md={5} className="order-md-1">
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7", // Adjusts line spacing
                letterSpacing: "0.7px", // Adjusts letter spacing
              }}
            >
              If you were eagerly waiting for a fun family holiday, this is the
              best time for it. Surprise your family with a holiday plan like
              never before. Take them to a new world of amusement on the cruise.
              We assure you that these bunches of amazing provisions by Cordelia
              cruise will be one of your most comfortable journeys. Wait, are
              you pondering upon the Cordelia Cruise prices? Well, you are
              thinking in the right place. However, luxury is not so cheap. But,
              you will be happy to know that the price for the tour will not put
              so much of a burden on your pocket. The Empress is offering so
              many facilities to you, for which the fare, for your tour, is
              justifying. Also, the price depends on your boarding and
              destination point, which may differ. We assure you that these
              bunches of amazing provisions by Cordelia cruise will be one of
              your most comfortable journeys. Wait, are you pondering upon the
              Cordelia Cruise prices?
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Facilities;

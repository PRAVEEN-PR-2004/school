import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Location.css"; // Assuming you have a separate CSS file for styles

const Location = () => {
  return (
    <Container className="location-section mt-4 mb-2" style={{ width: "90%" }}>
      <h3
        style={{ fontFamily: "Playfair Display", color: "#3A3A3A" }}
        className="mb-3"
      >
        Location Of Our School
      </h3>
      <Row className="d-flex justify-content-center align-items-stretch">
        <Col
          lg={4}
          md={12}
          className="d-flex align-items-stretch order-md-2  mb-4"
        >
          <Card
            className="location-info-card p-4 shadow-sm d-flex flex-column justify-content-center w-100"
            style={{}}
          >
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="text-center mb-4">
                <i className="fas fa-school fa-3x mb-3 location-icon"></i>
                <h4 className="location-title">Sri Chaitanya School</h4>
              </Card.Title>
              <Card.Text className="text-center location-text">
                Plot No: 80, Sri Sai Plaza,
                <br />
                Ayyappa Society Main Road,
                <br />
                Ayyappa Society, Madhapur,
                <br />
                Hyderabad, Telangana - 500081
              </Card.Text>
              <hr />
              <div className="text-center">
                <p className="location-phone">
                  <strong>Phone:</strong> 040-44600600 / 69106666 Ext. 401/402
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Column for Google Map */}
        <Col lg={8} md={12} className="map-column mb-lg-0 order-md-1">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.1000939410524!2d79.63802863828838!3d10.541404661420987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a555be2d1821f2f%3A0xea670ab8ef4c7667!2sSt.%20Antonys%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1729681469448!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </Col>

        {/* Column for Card Info */}
      </Row>
    </Container>
  );
};

export default Location;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Location.css"; // Make sure you have this CSS file for custom styling

const Location = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          {/* Map Section */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.1000939410524!2d79.63802863828838!3d10.541404661420987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a555be2d1821f2f%3A0xea670ab8ef4c7667!2sSt.%20Antonys%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1729681469448!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col md={4}>
          {/* Location Details Card */}
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>
                St. Antony's Matriculation Higher Secondary School
              </Card.Title>
              <Card.Text>
                [School Address]
                <br />
                [City], [State] - [Postal Code]
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> [School Contact Number]
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;

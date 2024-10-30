import React, { useEffect } from "react";
import { SCHOOL_GROUPS } from "../components/Group.js";
import { useParams } from "react-router-dom";
import Linkcom from "../components/Linkcom";
import { Container, ListGroup } from "react-bootstrap";

import Footer from "../components/Footer";

const ContactForGroup = () => {
  const { group } = useParams();
  const contactGroup = SCHOOL_GROUPS.find((groups) => groups.sgroup === group);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contactGroup) {
    return <p>Group not found. Please check the URL.</p>;
  }

  return (
    <>
      {/* Image and Title Section */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={contactGroup.bimg}
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
            fontSize: window.innerWidth < 768 ? "1.5rem" : "3.5rem",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 10,
            padding: "10px 20px",
          }}
        >
          {contactGroup.sgroup}
        </div>
      </div>
      <Linkcom>{contactGroup.sgroup}</Linkcom>
      <Container style={{ marginTop: "3%" }} className="mb-5">
        <p style={{ fontSize: "30px" }}>{contactGroup.head1}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>{contactGroup.para1}</p>
        <p style={{ fontSize: "30px" }}>{contactGroup.head2}</p>
        <p style={{ fontSize: "15px", color: "gray" }}>{contactGroup.para2}</p>

        <h3 style={{ marginTop: "2rem" }}>Coach: {contactGroup.coach}</h3>
        <p style={{ color: "gray" }}>{contactGroup.description}</p>

        <h4>Facilities Provided</h4>
        <ListGroup variant="flush">
          {contactGroup.facilities.map((facility, index) => (
            <ListGroup.Item key={index}>{facility}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>

      <Footer />
    </>
  );
};

export default ContactForGroup;

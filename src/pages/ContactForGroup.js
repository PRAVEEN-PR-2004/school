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

  // Responsive font sizes
  const isSmallScreen = window.innerWidth < 768; // Change the width as needed
  const titleFontSize = isSmallScreen ? "1rem" : "2rem"; // Adjusted title size for small and large screens
  const headingFontSize = isSmallScreen ? "1.3rem" : "2rem"; // Adjusted heading size
  const paraFontSize = isSmallScreen ? "0.8rem" : "1rem"; // Adjusted paragraph size

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
            fontSize: titleFontSize, // Use the responsive title size
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
        <p style={{ fontSize: headingFontSize, margin: "1rem 0" }}>
          {contactGroup.head1}
        </p>
        <p
          style={{ fontSize: paraFontSize, color: "gray", margin: "0.5rem 0" }}
        >
          {contactGroup.para1}
        </p>
        <p style={{ fontSize: headingFontSize, margin: "1rem 0" }}>
          {contactGroup.head2}
        </p>
        <p
          style={{ fontSize: paraFontSize, color: "gray", margin: "0.5rem 0" }}
        >
          {contactGroup.para2}
        </p>

        <h3 style={{ marginTop: "2rem", fontSize: headingFontSize }}>
          Coach: {contactGroup.coach}
        </h3>
        <p style={{ fontSize: paraFontSize, color: "gray" }}>
          {contactGroup.description}
        </p>

        <h4 style={{ fontSize: headingFontSize }}>Facilities Provided</h4>
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

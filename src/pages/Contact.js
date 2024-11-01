import React, { useEffect } from "react";
import { CITY } from "../components/City";
import { useParams } from "react-router-dom";
import Linkcom from "../components/Linkcom";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const Contact = () => {
  const { city } = useParams();
  const contactcity = CITY.find((cities) => cities.scity === city);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contactcity) {
    return <p>City not found. Please check the URL.</p>;
  }

  // Responsive font sizes
  const isSmallScreen = window.innerWidth <= 768; // Change the width as needed
  const headingFontSize = isSmallScreen ? "1.3rem" : "2rem"; // Heading size for small screens
  const paraFontSize = isSmallScreen ? "0.8rem" : "1rem"; // Paragraph size for small screens

  return (
    <>
      {/* Image and Title Section */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={contactcity.bimg}
          alt="Holidays Banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover", // Ensures the image covers the container without distortion
            maxHeight: "500px", // Set a max height for large screens
          }}
        />
        {/* Title Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centers the text
            color: "white", // Text color
            fontSize: headingFontSize, // Use the responsive heading size
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: adds a slight background to make text more readable
            padding: "10px 20px", // Optional: adds some padding around the text
          }}
        >
          {contactcity.scity} {/* Displays the title from CITY.js */}
        </div>
      </div>
      <Linkcom>{contactcity.scity}</Linkcom>
      <Container style={{ marginTop: "3%" }} className="mb-5">
        <p style={{ fontSize: headingFontSize }}>{contactcity.head1}</p>
        <p style={{ fontSize: paraFontSize, color: "gray" }}>
          {contactcity.para1}
        </p>
        <p style={{ fontSize: headingFontSize }}>{contactcity.head2}</p>
        <p style={{ fontSize: paraFontSize, color: "gray" }}>
          {contactcity.para2}
        </p>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;

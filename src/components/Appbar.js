import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./Appbar.css";

function Appbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="changenav mb-3 sticky-top"
        >
          <Container fluid>
            <Navbar.Brand
              href="#home"
              className="d-flex justify-content-center ml-md-3"
            >
              <div className="logo-text">
                <span className="main-text">ST ANTONY'S</span>
                <span className="sub-text">
                  matriculation higher secondary school
                </span>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  GT HOLIDAYS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link to="/" className="nav-link" onClick={closeOffcanvas}>
                    HOME
                  </Link>
                  <Link
                    to="/aboutus"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    ABOUT US
                  </Link>
                  <Link
                    to="/facilities"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    FACILITIES
                  </Link>
                  <Link
                    to="/contactus"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    CONTACT US
                  </Link>
                  <NavDropdown
                    title="SPORT"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* Dropdown items */}
                  </NavDropdown>
                  <NavDropdown
                    title="GROUP"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* Dropdown items */}
                  </NavDropdown>
                </Nav>
                <Navbar.Text className="justify-content-end">
                  <span className="noo">+91 9195412160</span>
                </Navbar.Text>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Appbar;

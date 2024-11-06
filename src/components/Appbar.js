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
              href="/"
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
                  <NavDropdown
                    title="GROUP"
                    id={`offcanvasNavbarDropdown-group-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/ContactForGroup/BioMath"
                      onClick={closeOffcanvas}
                    >
                      Bio-Math
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/ContactForGroup/Commerce"
                      onClick={closeOffcanvas}
                    >
                      Commerce
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/ContactForGroup/ComputerScience"
                      onClick={closeOffcanvas}
                    >
                      Computer Science
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="SPORT"
                    id={`offcanvasNavbarDropdown-sport-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Football"
                      onClick={closeOffcanvas}
                    >
                      Football
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Basketball"
                      onClick={closeOffcanvas}
                    >
                      Basketball
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Volleyball"
                      onClick={closeOffcanvas}
                    >
                      Volleyball
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Kabaddi"
                      onClick={closeOffcanvas}
                    >
                      Kabaddi
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/KhoKho"
                      onClick={closeOffcanvas}
                    >
                      KhoKho
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    to="/events"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    EVENTS
                  </Link>
                  <Link
                    to="/contactus"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    CONTACT US
                  </Link>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./Appbar.css";
import logog from "../assets/GT-Holidays-Logo.jpg";

function Appbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };
  const isSmallScreen = windowWidth <= 768;

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
              className="d-flex justify-content-center  ml-md-3"
            >
              <img
                src={logog}
                width={isSmallScreen ? "150" : "250"}
                height="100"
                className="d-inline-block align-top img-fluid mx-auto img-responsive"
                alt="GT Holidays Logo"
              />
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
                    to="/grouptour"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    GROUP TOUR
                  </Link>
                  <Link
                    to="/packages"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    PACKAGES
                  </Link>
                  <Link
                    to="/honeymoon"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    HONEYMOON
                  </Link>
                  <Link
                    to="/cruises"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    CRUISES
                  </Link>
                  <Link
                    to="/wedding"
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    WEDDING
                  </Link>
                  <NavDropdown
                    title="SPORT"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Football"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Football
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Basketball"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Basketball
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Volleyball"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Volleyball
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/Kabaddi"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Kabaddi
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/contact/KhoKho"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      KhoKho
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="GROUP"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/ContactForGroup/BioMath"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Bio-Math
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/ContactForGroup/Commerce"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Commerce
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/ContactForGroup/ComputerScience"
                      className="dropdown-item"
                      onClick={closeOffcanvas}
                    >
                      Computer Science
                    </NavDropdown.Item>
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

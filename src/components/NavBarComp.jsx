import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
const NavBarComp = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);
  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    const resize = window.addEventListener("resize", () => {
      window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <>
      <Navbar
        variant="dark"
        collapseOnSelect
        expand="lg"
        className={`${
          isOpen || path === "/career" ? "bg-[#090622]" : "bg-transparent"
        } absolute top-0 w-full z-[100] `}>
        <Container>
          {isMobile && (
            <Navbar.Brand
              to="/"
              as={Link}
              className="fw-semibold text-light mix-blend-screen">
              <img
                src={logo}
                alt=""
                className="me-2 h-12 w-12 object-contain "
                style={{
                  filter: "invert(1)",
                }}
              />
            </Navbar.Brand>
          )}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto w-100 d-flex align-items-start align-items-md-center justify-content-between">
              {!isMobile && (
                <Navbar.Brand to="/" as={Link}>
                  <img
                    src={logo}
                    alt=""
                    className="me-2 h-12 w-12 object-contain "
                    style={{
                      mixBlendMode: "screen",
                      filter: "invert(1)",
                    }}
                  />
                </Navbar.Brand>
              )}
              <div
                className="d-flex flex-column flex-md-row mt-4 mt-lg-0"
                style={{ gap: `${isMobile ? "20px" : "48px"}` }}>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="1"
                  className={`${
                    location.pathname === "/"
                      ? "custom-nav-links-active text-light"
                      : "custom-nav-links"
                  }`}>
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  eventKey="2"
                  className={`${
                    location.pathname === "/about"
                      ? "custom-nav-links-active text-light"
                      : "custom-nav-links"
                  }`}>
                  About
                </Nav.Link>
                <Nav.Link
                  href="mailto:contact@buybitz.in"
                  eventKey="3"
                  className={`${
                    location.pathname === "/contact"
                      ? "custom-nav-links-active text-light"
                      : "custom-nav-links"
                  }`}>
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="https://cointelegraph.com/"
                  target="_blank"
                  eventKey="4"
                  className={`${
                    location.pathname === "https://cointelegraph.com/"
                      ? "custom-nav-links-active text-light"
                      : "custom-nav-links"
                  }`}>
                  News
                </Nav.Link>
              </div>
              <div
                className="d-flex flex-column flex-md-row mt-3 mt-lg-0"
                style={{ gap: `${isMobile ? "15px" : null}` }}>
                <Nav.Link as={Link} to="http://app.buybitz.com" target="_blank">
                  <Button variant="secondary-btn text-light">Login</Button>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="https://app.buybitz.com/signup"
                  target="_blank">
                  <Button className="bg-[#4700FB] border-none">
                    Get Started
                  </Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComp;

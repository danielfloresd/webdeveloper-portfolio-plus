import "./App.css";

import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";

import { LinkContainer } from "react-router-bootstrap";

class AppNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-expand-lg navbar-dark bg-primary">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/about-me">
                  <Nav.Link>About Me</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <Nav.Link>Porfolio</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <Nav.Link href="./assets/documents/resume.pdf">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="hero">
          <div className="hero-background"></div>
          <img
            src="assets/images/headshot2.png"
            id="mypicture"
            alt="Daniel Fores
                    Picture"
          />
          <h1>DanielFloresD</h1>
        </section>
      </>
    );
  }
}
export default AppNavbar;

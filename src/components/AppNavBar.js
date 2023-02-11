// import 'bootswatch/dist/flatly/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import React from "react";

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="sm" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link active href="#">
                Home
              </Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default AppNavbar;

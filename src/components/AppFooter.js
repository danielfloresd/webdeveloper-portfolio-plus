// import 'bootswatch/dist/flatly/bootstrap.min.css';
import { Nav, Container } from "react-bootstrap";
import React from "react";

class AppFooter extends React.Component {
  render() {
    return (
      <Container className="footer">
        <Container>
          <Container className="row d-flex align-items-center">
            <Container className="col-md-6">
              <Nav.Link className="navbar-brand" exact to="/">
                {/* <Logo alt="logo" /> */}
              </Nav.Link>
            </Container>
            <Container className="col-md-6 d-flex justify-content-around">
              <Nav.Link exact to="/">
                Home
              </Nav.Link>
              <Nav.Link to="/about-us">About Us</Nav.Link>
              <Nav.Link to="/contact">Contact</Nav.Link>
            </Container>
          </Container>
          </Container>
      </Container>
    );
  }
}
export default AppFooter;

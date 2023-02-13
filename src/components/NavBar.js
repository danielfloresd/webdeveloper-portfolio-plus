import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  useEffect(() => {
    document.title = `DanielFloresD - ${currentPage.name}`;
  }, [currentPage]);
  return (
    <>
      <Navbar className="navbar-expand-lg navbar-dark bg-primary" expand="lg">
        <Container>
          <Navbar.Brand>DanielFloresD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {pages.map((page) => (
                <Nav.Link key={page.name}>
                  <li
                    className={`${
                      currentPage.name === page.name && "navActive "
                    } `}
                    key={page.name}
                  >
                    <span onClick={() => setCurrentPage(page)}>
                      {page.name}
                    </span>
                  </li>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="hero">
        <div className="hero-background"></div>
      </section>
    </>
  );
}

export default NavBar;

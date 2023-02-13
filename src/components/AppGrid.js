import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Project from "./Project";
import PROJECTS  from "./ProjectList";

function AppGrid() {
  return (
    <Container>
      <Row>
        {PROJECTS.map((project) => (
          <Col>
            <Project
              title={project.title}
              description={project.description}
              url={project.url}
              github={project.github}
              tech={project.tech}
              image={project.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AppGrid;

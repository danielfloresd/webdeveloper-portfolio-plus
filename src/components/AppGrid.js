import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppCard from "./AppCard";
import PROJECTS  from "./ProjectList";

function AppGrid() {
  return (
    <Container>
      <Row>
        {PROJECTS.map((project) => (
          <Col>
            <AppCard
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

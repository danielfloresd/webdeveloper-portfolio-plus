import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import Project from "../components/Project";

import PROJECTS from "./projects";

function Portfolio() {
  return (
    <main>
      <Container>
        <Row>
          {PROJECTS.map((project) => (
            <Col sm={12} lg={4} key={project.title}>
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
          <br />
          <a
            href="https://github.com/danielfloresd?tab=repositories"
            target="_blank"
          >
            <Button variant="info" size="sm">
              View More...
            </Button>
          </a>
        </Row>
      </Container>
    </main>
  );
}

export default Portfolio;

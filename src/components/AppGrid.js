import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppCard from "./AppCard";

function AppGrid() {
  return (
    <Container>
      <Row>
        <Col>
          <AppCard />
        </Col>
        <Col>
          <AppCard />
        </Col>
        <Col>
          <AppCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <AppCard />
        </Col>
        <Col>
          <AppCard />
        </Col>
        <Col>
          <AppCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <AppCard />
        </Col>
        <Col>
          <AppCard />
        </Col>
        <Col>
          <AppCard />
        </Col>
      </Row>
    </Container>
  );
}

export default AppGrid;

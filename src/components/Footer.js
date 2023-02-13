import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Linkedin,
  Github,
  Instagram,
  Google,
  Bootstrap,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer">
      <Row className="social-container">
        <Col>
          <a className="social-inner"></a>
        </Col>
        <Col>
          <a
            className="social-inner"
            href="https://www.linkedin.com/in/danielfloresd/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </Col>
        <Col>
          <a
            className="social-inner"
            href="https://github.com/danielfloresd"
            target="_blank"
          >
            <Github />
          </a>
        </Col>
        <Col>
          <a
            className="social-inner"
            href="mailto:daniel.flor3s.d@gmail.com"
            target="_blank"
          >
            <Google />
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Instagram />
          </a>
        </Col>
      </Row>
      <Row className="social-container">
        <Col>
          <a className="social-inner"></a>
        </Col>
        <Col>
          <a
            className="social-inner"
            href="https://www.bootswatch.com"
            target="_blank"
          >
            <span style={{ fontSize: "xx-small" }}>Powered by</span>{" "}
            <Bootstrap />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

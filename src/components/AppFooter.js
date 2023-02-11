import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  Wifi,
} from "react-bootstrap-icons";

function AppFooter() {
  return (
    <footer
      className="bg-primary text-white text-center text-lg-start"
      //   style={{ background: "#2d3246" }}
    >
      <Row noGutters className="social-container">
        <Col>
          <a className="social-inner" href="#">
            {/* <span className="icon mdi mdi-facebook"></span> */}
            <Facebook />
            {/* <span>Facebook</span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Instagram />
            {/* <span>instagram</span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Twitter />
            {/* <span>twitter</span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Google />
            {/* <span>google</span> */}
          </a>
        </Col>
      </Row>
    </footer>
  );
}

export default AppFooter;

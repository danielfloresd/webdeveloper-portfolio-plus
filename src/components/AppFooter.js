import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Wifi,
  Linkedin,
  Github,
  Twitter,
  Google,
  Bootstrap,
} from "react-bootstrap-icons";

function AppFooter({ theme }) {
  return (
    <div
    // className="bg-secondary"// text-white text-center text-lg-start"
    //   style={{ background: "#2d3246" }}
    >
      <Row className="social-container">
        <Col>
          <a className="social-inner" href="#">
            {/* <span className="icon mdi mdi-facebook"></span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            {/* <span className="icon mdi mdi-facebook"></span> */}
            <Linkedin />
            {/* <span>Facebook</span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Github />
            {/* <span>instagram</span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Google />
            {/* <span>google</span> */}
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            <Bootstrap />
            <span style={{fontSize:"xx-small"}}>{theme}</span>
          </a>
        </Col>
        <Col>
          <a className="social-inner" href="#">
            {/* <span className="icon mdi mdi-facebook"></span> */}
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default AppFooter;

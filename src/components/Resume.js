import React from "react";
import Card from "react-bootstrap/Card";

function Resume() {
  return (
    <div>
      <Card>
        <Card.Body>
          <embed
            src="assets/documents/resume.pdf"
            width="100%"
            height="1000px"
          />{" "}
          <Card.Footer className="text-center">
            <a href="assets/documents/resume.pdf">Download Resume</a>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Resume;

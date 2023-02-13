import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
// import Button from 'react-bootstrap/Button';
// import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import { Github } from "react-bootstrap-icons";

function Project({ title, description, url, github, tech, image }) {
  return (
    <Card style={{ marginBottom: "10px" }}>
    {/* <Card style={{ width: "380px", marginBottom:"20"}}> */}
      <Card.Header>{title}</Card.Header>
      <a href={url} target="_blank" variant="link">
        {/* <Card.Img src={image} style={{ width: "400px", height: "200px" }} /> */}
        <Card.Img src={image} style={{ height: "200px" }} />
      </a>
      <Card.Body>
        <Card.Text style={{ height: "50px", fontSize: "small" }}>
          {description}
        </Card.Text>
        <Card.Footer>
          <Badge bg="secondary">
            <a href={github} target="_blank" data-tooltip="danielfloresd">
              <Github />
              {tech}
            </a>
          </Badge>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default Project;

import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
// import Button from 'react-bootstrap/Button';
// import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import { Github } from "react-bootstrap-icons";

function AppCard({ title, description, url, github, tech, image }) {
  return (
    <Card style={{ width: "400px"}}>
      <Card.Header>{title}</Card.Header>
      <a href={url} variant="link">
        <Card.Img src={image} style={{ width: "400px", height: "200px" }} />
      </a>
      <Card.Body>
        <Card.Text
          style={{ width: "380px", height: "50px", fontSize: "small" }}
        >
          {description}
        </Card.Text>
        <Card.Footer>
        <Badge bg="secondary">
          <a href={github} data-tooltip="danielfloresd">
            <Github />
          </a>
        </Badge>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default AppCard;

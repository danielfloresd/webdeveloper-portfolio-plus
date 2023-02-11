import React from "react";
// import Button from 'react-bootstrap/Button';
// import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';
import { Github } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function AppCard({ title, description, url, github, tech, image }) {
  return (
    <Card>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={url} variant="link">
          {url}
        </a>
      </Card.Body>
      <Card.Footer>
        <Badge bg="secondary">
          <a href={github} data-tooltip="danielfloresd">
            <Github />
          </a>
        </Badge>
      </Card.Footer>
    </Card>
  );
}
export default AppCard;

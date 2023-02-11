import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
// import Button from 'react-bootstrap/Button';
// import { CardBody, CardTitle, CardText } from 'react-bootstrap/Card';

import logo from "./website.PNG";

class AppCard extends React.Component {
  render() {
    return (
      <Card>
        {/* style={{ width: '250px', height: '150px' }}> */}
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="#" variant="link">
            Go somewhere
          </a>
        </Card.Body>
        <Card.Footer>
          <Badge bg="secondary">GitHub</Badge>
          <a
            href="https://github.com/danielfloresd/"
            target="_blank"
            data-tooltip="danielfloresd"
          >
            <i class="github large icon"></i>
          </a>
        </Card.Footer>
      </Card>
    );
  }
}
export default AppCard;

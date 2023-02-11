import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import AppCard from "./AppCard";

function AppGrid() {
  return (
    <Container>
      <Row>
        <Col>
          <AppCard
            title="Aptly"
            description="A Web app for property management companies to streamline the way they manage their organization"
            url="https://maintenance-portal.herokuapp.com/"
            github="https://github.com/WittyInventor/MaintenancePortal"
            tech="Handlebars/Node.js"
            image="assets/images/aptly.png"
          />{" "}
        </Col>
        <Col>
          <AppCard
            title="Employee Tracker CMS"
            description="A CLI powerful tool for businesses looking to streamline the way they manage their organization"
            tech="Node.js/SQL
      "
            image="assets/images/employee-track-cms.png"
            url="https://danielfloresd.github.io/employee-track-cms/"
            github="https://github.com/danielfloresd/employee-track-cms"
          />{" "}
        </Col>
        <Col>
          <AppCard
            title="Team Profile Generator"
            description="A web app created to automatically generate a styled HTML file displaying all members of a development team."
            tech="Node.js/Jest /
          Foundation "
            image="assets/images/team-profile-generator.png"
            url="https://danielfloresd.github.io/team-profile-generator/"
            github="https://github.com/danielfloresd/team-profile-generator"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <AppCard
            title="Watch-This-Now"
            description="A web app that allows users to search for movies and TV shows and add them to their watchlist."
            tech="jQuery/SemanticUI"
            image="assets/images/watch-this-now.gif"
            url="https://danielfloresd.github.io/my-watch-this-now/"
            github="https://github.com/danielfloresd/my-watch-this-now"
          />{" "}
        </Col>
        <Col>
          <AppCard
            title="Professional README.md Generator"
            description="A node.js and web app used to generate professional readme.md file for github projects"
            tech="Node.js/Inquirer
      "
            image="assets/images/professional-readme-generator.gif"
            url="https://danielfloresd.github.io/professional-readme-generator/"
            github="https://github.com/danielfloresd/professional-readme-generator"
          />{" "}
        </Col>
        <Col>
          <AppCard
            title="OpenWeather Dashboard"
            description="A web app that allows users to search for the weather in any city."
            tech="jQuery/Bootstrap
      "
            image="assets/images/openweather-dashboard.png"
            url="https://danielfloresd.github.io/openweather-dashboard/"
            github="https://github.com/danielfloresd/openweather-dashboard"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AppGrid;

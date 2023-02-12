import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppCard from "./AppCard";

const PROJECTS = [
  {
    title: "Aptly",
    description:
      "A Web app for property management companies to streamline the way they manage their organization",
    tech: "Handlebars/Node.js",
    image: "assets/images/aptly.png",
    url: "https://maintenance-portal.herokuapp.com/",
    github: "https://github.com/WittyInventor/MaintenancePortal",
  },
  {
    title: "Employee Tracker CMS",
    description:
      "A CLI powerful tool for businesses looking to streamline the way they manage their organization",
    tech: "Node.js/SQL",
    image: "assets/images/employee-track-cms.png",
    url: "https://danielfloresd.github.io/employee-track-cms/",
    github: "https://github.com/danielfloresd/employee-track-cms",
  },
  {
    title: "Team Profile Generator",
    description:
      "A web app created to automatically generate a styled HTML file displaying all members of a development team.",
    tech: "Node.js/Jest/Foundation",
    image: "assets/images/team-profile-generator.png",
    url: "https://danielfloresd.github.io/team-profile-generator/",
    github: "https://github.com/danielfloresd/team-profile-generator",
  },
  {
    title: "Watch-This-Now",
    description:
      "A web app that allows users to search for movies and TV shows and add them to their watchlist.",
    tech: "jQuery/SemanticUI",
    image: "assets/images/watch-this-now.gif",
    url: "https://danielfloresd.github.io/my-watch-this-now/",
    github: "https://github.com/danielfloresd/my-watch-this-now",
  },
  {
    title: "Pro README.md Generator",
    description:
      "A node.js and web app used to generate professional readme.md file for github projects",
    tech: "Node.js/Inquirer",
    image: "assets/images/professional-readme-generator.gif",
    url: "https://danielfloresd.github.io/professional-readme-generator/",
    github: "https://github.com/danielfloresd/professional-readme-generator",
  },
  {
    title: "OpenWeather Dashboard",
    description:
      "A web app that allows users to search for the weather in any city.",
    tech: "jQuery/Bootstrap",
    image: "assets/images/openweather-dashboard.png",
    url: "https://danielfloresd.github.io/openweather-dashboard/",
    github: "https://github.com/danielfloresd/openweather-dashboard",
  },
  {
    title: "Bootcamp Coding Quiz",
    description:
      "A web app that allows users to take a timed quiz on JavaScript fundamentals.",
    tech: "HTML/CSS/JavaScript",
    image: "assets/images/bootcamp-coding-quiz.png",
    url: "https://danielfloresd.github.io/bootcamp-coding-quiz/",
    github: "https://github.com/danielfloresd/bootcamp-coding-quiz",
  },
  {
    title: "Casa del Muelle San Carlos",
    description:
      "Rental property website for a vacation home in San Carlos, Sonora, Mexico.",
    tech: "HTML/CSS/JavaScript",
    image: "assets/images/casa-del-muelle-san-carlos.png",
    url: "https://www.casadelmuellesancarlos.com/",
    github: "https://github.com/danielfloresd/casa-del-muelle-san-carlos",
  },
  {
    title: "Work Day Scheduler",
    description: "A web app that allows users to create a daily schedule.",
    tech: "jQuery/Bootstrap",
    image: "assets/images/work-day-scheduler.png",
    url: "https://danielfloresd.github.io/work-day-scheduler/",
    github: "https://github.com/danielfloresd/work-day-scheduler",
  },
];

function AppGrid() {
  return (
    <Container>
      <Row>
        {PROJECTS.map((project) => (
          <Col>
            <AppCard
              title={project.title}
              description={project.description}
              url={project.url}
              github={project.github}
              tech={project.tech}
              image={project.image}
            />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
}

export default AppGrid;

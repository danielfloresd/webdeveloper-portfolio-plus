import React from "react";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <main>
    <br />
    <img
        src="assets/images/headshot2.png"
        id="mypicture"
        alt="Daniel Fores
                Picture"
      />
   <Card className="mb-10">
    <Card.Body>
      <p  className="m-20 p-20">
        Hi, I'm Daniel Flores, a software engineer and innovator with over 20
        years of experience in the design, development, and implementation
        of embedded systems. Throughout my career, I've been a key player in
        the success of multiple projects, leveraging my passion for
        technology to bring innovative solutions to life. I've been involved
        in every aspect of the business, from start-up to development and
        operations, and my attention to detail and problem-solving skills
        have proven invaluable time and time again. 
      </p>
      <p> 
        I'm also a strong believer in lifelong learning. I believe that in order to stay at
        the forefront of my field, I must continuously seek out new
        knowledge and opportunities to improve. This drive to learn and grow
        has allowed me to tackle complex projects with confidence and bring
        my best to every task. Whether working independently or as part of a
        team, I am committed to excellence in all that I do.
      </p>
      </Card.Body>
    </Card>
  </main>
  );
}

export default About;

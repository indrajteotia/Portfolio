import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Indraj Singh Teotia </span>
            from <span className="purple"> Ghaziabad, UP, India.</span>
            <br />
            I am currently a BTech(CSE) student.
            <br />
            I am pursing my BTech at RKGIT, Ghaziabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live Yourself"{" "}
          </p>
          <footer className="blockquote-footer">Indraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

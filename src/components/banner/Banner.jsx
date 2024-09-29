import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row className="justify-content-start">
          <Col lg={6}>
            <div class="ban-text">
              <h1>I'M Fahim Sarker</h1>
              <TypeAnimation
                sequence={[
                  "I am a Front-End Developer",
                  "I am a Bootstrap Developer",
                  1000,
                  "I am a Tailwind CSS Developer",
                  1000,
                  "I am a SASS Developer",
                  1000,
                  "I am a React Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "32px",
                  display: "inline-block",
                  fontWeight: "600",
                  color: "white",
                  paddingLeft: "70px",
                }}
                repeat={Infinity}
              />
              <p>
                I'm a professional <b>Front-End Developer </b> and focused on
                crafting clean & user‑friendly experiences. I am passionate
                about building excellent web applications that improves the
                lives of those around me. With expertise in Bootstrap, Tailwind
                CSS, and React JS. I bring innovative web solutions to life.
                Let's build something great together!
              </p>
              <a href="#">
                <button>MORE ABOUT ME</button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

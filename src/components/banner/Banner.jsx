import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row className="justify-content-start">
          <Col lg={6}>
            <div className="ban-text">
              <span className="ban-hello">👋 Hello, World!</span>
              <h1>
                I'm <span className="ban-name">Fahim Sarker</span>
              </h1>

              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  1500,
                  "React & Next.js Engineer",
                  1500,
                  "React Native App Builder",
                  1500,
                  "UI Craftsman",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "32px",
                  display: "inline-block",
                  fontWeight: "600",
                  color: "antiquewhite",
                }}
                repeat={Infinity}
              />

              <p>
                I turn complex ideas into <b>fast, polished, and intuitive</b>{" "}
                digital experiences. With 2 years of hands-on experience, I
                build scalable web apps using <b>React, Next.js, TypeScript</b>{" "}
                and <b>Tailwind CSS</b>, and bring products to mobile with{" "}
                <b>React Native</b>. Currently expanding my toolkit with
                Flutter, because great products deserve to live everywhere.
              </p>

              <div className="ban-actions">
                <a href="#contact">
                  <button className="btn-primary-custom">HIRE ME</button>
                </a>
                <a href="#about">
                  <button className="btn-outline-custom">MORE ABOUT ME</button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
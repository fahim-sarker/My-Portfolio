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
              <h1>I'M Fahim Sarker</h1>
              <TypeAnimation
                sequence={[
                  "I am a Front-End Developer",
                  1000,
                  "I am a React Developer",
                  1000,
                  "I am a React Native Developer",
                  1000,
                  "I am a Next Js Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "32px",
                  display: "inline-block",
                  fontWeight: "600",
                  color: "antiquewhite",
                  paddingLeft: "20px",
                }}
                repeat={Infinity}
              />
              <p>
                I'm a professional <b>Front-End Developer</b> with 2 years of
                experience building fast, responsive web applications. At
                Softvence Agency, I co-lead the frontend team and turn ideas
                into clean, user-friendly interfaces with React, Next.js,
                TypeScript & Tailwind CSS. I also build mobile apps with React
                Native and I'm currently learning Flutter. Let's build
                something great together!
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
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about_me.css";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaGraduationCap, FaPenRuler, FaBullhorn } from "react-icons/fa6";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import CV from "../../assets/cv.pdf";
import CountUp from "react-countup";

const About_me = () => {
  const stats = [
    { value: 1, label: "Years of Experience" },
    { value: 5, label: "Happy Customers" },
    { value: 15, label: "Projects Done" },
    { value: 3, label: "Awards Won" },
  ];
  const skills = [
    { name: "HTML", value: 85 },
    { name: "CSS", value: 80 },
    { name: "JavaScript", value: 65 },
    { name: "Bootstrap", value: 90 },
    { name: "Tailwind CSS", value: 90 },
    { name: "React JS", value: 80 },
    { name: "Next JS", value: 70 },
    { name: "GitHub", value: 85 },
  ];
  return (
    <section id="about">
      <Container>
        <Row className="text-center">
          <div class="about-head">
            <h2>RESUME</h2>
            <h3>about</h3>
            <h4>me</h4>
          </div>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <div class="all-head">
                <h2>PERSONAL INFOS</h2>
              </div>
              <Col lg={6}>
                <div class="about-left-left">
                  <ul>
                    <li>
                      <p>First Name:</p> <span>fahim</span>
                    </li>
                    <li>
                      <p>Last Name:</p> <span>Sarker</span>
                    </li>
                    <li>
                      <p>Age:</p> <span>22 Years</span>
                    </li>
                    <li>
                      <p>Nationality:</p> <span>Bangladeshi</span>
                    </li>
                    <li>
                      <p>Freelance:</p> <span>Available</span>
                    </li>
                  </ul>
                  <a href={CV} download>
                    <button>
                      Download cv <i class="fa-solid fa-cloud-arrow-down"></i>
                    </button>
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div class="about-left-right">
                  <ul>
                    <li>
                      <p>Address:</p> <span>jatrabari,Dhaka</span>
                    </li>
                    <li>
                      <p>Phone:</p>{" "}
                      <span>
                        <a href="tel:+8801609302239">+880 1647389997</a>
                      </span>
                    </li>
                    <li>
                      <p>Email:</p>{" "}
                      <span>
                        <a href="mailto:sarkerfahim599@gmail.com">
                          sarker@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <p>Linkedin:</p> <span>Sarkerfahim</span>
                    </li>
                    <li>
                      <p>Languages:</p> <span>Bangla, English</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              {stats.map((stat, index) => (
                <Col lg={6} key={index}>
                  <div className="about-right">
                    <h2>
                      <CountUp end={stat.value} duration={3} />+
                    </h2>
                    <h3>{stat.label}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row>
          <div class="skill-head">
            <h2>My Skills</h2>
          </div>
          <Col>
            <Row>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={85}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>85%</h2>
                    <h2>HTML</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={80}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>80%</h2>
                    <h2>CSS</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={65}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>65%</h2>
                    <h2>Javascript</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={90}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>90%</h2>
                    <h2>Bootstrap</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={90}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>90%</h2>
                    <h2>Tailwind CSS</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={70}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>80%</h2>
                    <h2>React JS</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={70}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>70%</h2>
                    <h2>NEXT JS</h2>
                  </div>
                </div>
              </Col>
              <Col lg={3} xs={6}>
                <div className="circle_mother">
                  <div className="circle">
                    <CircularProgressbarWithChildren
                      value={85}
                    ></CircularProgressbarWithChildren>
                  </div>
                  <div className="center_text">
                    <h2>85%</h2>
                    <h2>GitHub</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <div class="ex-head">
            <h2>Experiences & Education</h2>
          </div>
          <Col>
            <Row>
              <Col lg={6}>
                <div class="ex-item">
                  <h4>2023 - PRESENT</h4>
                  <h2>
                    WEB DEVELOPER<span> - Creative IT</span>
                  </h2>
                  <p>
                    At Creative IT Institute, pioneering avant-garde web
                    solutions, fostering synergy, and mastering emerging
                    technologies.
                  </p>
                  <RiHomeOfficeLine className="icon" />
                </div>
              </Col>
              <Col lg={6}>
                <div class="ex-item">
                  <h4>2023 - 2024</h4>
                  <h2>
                    Frontend Developement<span> - creative it</span>
                  </h2>
                  <p>
                    Development graduate from Creative IT Institute, achieving
                    excellence and distinction in web development with top
                    honors.
                  </p>
                  <FaGraduationCap className="icon" />
                </div>
              </Col>
              <Col lg={6}>
                <div class="ex-item">
                  <h4>2023 - PRESENT</h4>
                  <h2>
                    Front-End Developer<span> - Upwork</span>
                  </h2>
                  <p>
                    On Fiverr: Navigating dynamic challenges, coding innovation,
                    and sculpting digital landscapes as a full-stack virtuoso.
                  </p>
                  <FaPenRuler className="icon" />
                </div>
              </Col>
              <Col lg={6}>
                <div class="ex-item">
                  <h4>2020 - 2021</h4>
                  <h2>
                    Higher Secondary<span>-M.W</span>
                  </h2>
                  <p>
                    Higher Secondary Graduate from Adomjinogor M.W College,
                    achieving GPA-4.25, demonstrating academic excellence.
                  </p>
                  <FaGraduationCap className="icon" />
                </div>
              </Col>
              <Col lg={6}>
                <div class="ex-item">
                  <h4>2022 - 2022</h4>
                  <h2>
                    Front-End DEVELOPER<span> - Fiverr</span>
                  </h2>
                  <p>
                    Fiverr front-end dev: Customized web solutions for diverse
                    clients worldwide, honing versatility and client rapport.
                  </p>
                  <FaBullhorn className="icon" />
                </div>
              </Col>
              <Col lg={6}>
                <div class="ex-item">
                  <h4>2018 - 2019</h4>
                  <h2>
                    Secondary<span> - M.A.H.S</span>
                  </h2>
                  <p>
                    Secondary School graduate from Mathabhanga Adarsha High
                    School with perfect GPA 3.44, showcasing academic excellence
                    and dedication.
                  </p>
                  <FaGraduationCap className="icon" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About_me;

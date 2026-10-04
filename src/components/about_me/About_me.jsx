import "./about_me.css";
import CountUp from "react-countup";
import CV from "../../assets/cv.pdf";
import { Container, Row, Col } from "react-bootstrap";
import { RiHomeOfficeLine } from "react-icons/ri";
import {
  FaGraduationCap,
  FaPenRuler,
  FaBullhorn,
  FaCloudArrowDown,
} from "react-icons/fa6";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/* ---------- Data: edit these to update the section ---------- */

const personalLeft = [
  { label: "First Name", value: "Fahim" },
  { label: "Last Name", value: "Sarker" },
  { label: "Age", value: "22 Years" },
  { label: "Nationality", value: "Bangladeshi" },
  { label: "Freelance", value: "Available" },
];

const personalRight = [
  { label: "Address", value: "Mohakhali, Dhaka" },
  {
    label: "Phone",
    value: "+880 1647389997",
    href: "tel:+8801647389997",
  },
  {
    label: "Email",
    value: "sarkerfahim599@gmail.com",
    href: "mailto:sarkerfahim599@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fahim-sarker",
    href: "https://www.linkedin.com/in/fahim-sarker-089817312/",
    external: true,
  },
];

const stats = [
  { value: 2, label: "Years of Experience" },
  { value: 20, label: "Happy Customers" },
  { value: 30, label: "Projects Done" },
  { value: 3, label: "Awards Won" },
];

// Each level controls how full the circle is
const LEVELS = {
  Advanced: 90,
  Proficient: 75,
  Intermediate: 60,
  Learning: 30,
};

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "JavaScript", level: "Proficient" },
  { name: "TypeScript", level: "Proficient" },
  { name: "React JS", level: "Proficient" },
  { name: "Next JS", level: "Proficient" },
  { name: "React Native", level: "Proficient" },
  { name: "Redux", level: "Proficient" },
  { name: "TanStack Query", level: "Proficient" },
  { name: "REST API", level: "Proficient" },
  { name: "GSAP", level: "Intermediate" },
  { name: "Framer Motion", level: "Intermediate" },
  { name: "Storybook", level: "Intermediate" },
  { name: "GitHub", level: "Proficient" },
  { name: "Flutter", level: "Learning" },
];

const timeline = [
  {
    period: "2024 - Present",
    title: "Front-End Developer (Full Time)",
    place: "Softvence Agency",
    text: "Building high-performance, responsive web apps with React, Next.js, TypeScript and Tailwind CSS. Working closely with backend developers to integrate REST APIs, manage state and ship real-time features.",
    Icon: RiHomeOfficeLine,
  },
  {
    period: "2023 - Present",
    title: "Front-End Developer",
    place: "Upwork",
    text: "Delivering modern, pixel-perfect websites and web apps for international clients, from idea to deployment.",
    Icon: FaPenRuler,
  },
  {
    period: "2023 - 2024",
    title: "Front-End Development",
    place: "Creative IT Institute",
    text: "Graduated from Creative IT Institute with distinction in web development, finishing with top honors.",
    Icon: FaGraduationCap,
  },
  {
    period: "2022 - Ongoing",
    title: "Bachelor of Business Administration (BBA)",
    place: "National University",
    text: "Currently pursuing a BBA at National University, building a strong foundation in management, marketing and business strategy alongside my development career.",
    Icon: FaGraduationCap,
  },
  {
    period: "2022",
    title: "Front-End Developer",
    place: "Fiverr",
    text: "Built custom web solutions for clients around the world, sharpening my versatility and client communication.",
    Icon: FaBullhorn,
  },
  {
    period: "2020 - 2021",
    title: "Higher Secondary",
    place: "Adamjinagar M.W College",
    text: "Completed Higher Secondary with a GPA of 4.25, reflecting consistent academic dedication.",
    Icon: FaGraduationCap,
  },
];

/* ---------- Small helper for info rows ---------- */

const InfoList = ({ items }) => (
  <ul className="info-list">
    {items.map(({ label, value, href, external }) => (
      <li key={label}>
        <p>{label}:</p>
        {href ? (
          <span>
            <a
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {value}
            </a>
          </span>
        ) : (
          <span>{value}</span>
        )}
      </li>
    ))}
  </ul>
);

/* ---------- Component ---------- */

const About_me = () => {
  return (
    <section id="about">
      <Container>
        <Row className="text-center">
          <div className="about-head">
            <h2>Resume</h2>
            <h3>About</h3>
            <h4>Me</h4>
          </div>
        </Row>

        {/* Personal info + stats */}
        <Row>
          <Col lg={6}>
            <Row>
              <div className="all-head">
                <h2>Personal Infos</h2>
              </div>
              <Col lg={6}>
                <InfoList items={personalLeft} />
                <a href={CV} download className="cv-link">
                  <button className="cv-btn">
                    Download CV <FaCloudArrowDown />
                  </button>
                </a>
              </Col>
              <Col lg={6}>
                <InfoList items={personalRight} />
              </Col>
            </Row>
          </Col>

          <Col lg={6}>
            <Row>
              {stats.map((stat) => (
                <Col lg={6} xs={6} key={stat.label}>
                  <div className="about-right">
                    <h2>
                      <CountUp
                        end={stat.value}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      +
                    </h2>
                    <h3>{stat.label}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Skills */}
        <Row>
          <div className="skill-head">
            <h2>My Skills</h2>
          </div>
          {skills.map((skill) => (
            <Col lg={3} xs={6} key={skill.name}>
              <div className="circle_mother">
                <div className="circle">
                  <CircularProgressbarWithChildren
                    value={LEVELS[skill.level]}
                  />
                </div>
                <div className="center_text">
                  <h2>{skill.name}</h2>
                  <span>{skill.level}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Experience & education */}
        <Row>
          <div className="ex-head">
            <h2>Experiences & Education</h2>
          </div>
          {timeline.map(({ period, title, place, text, Icon }) => (
            <Col lg={6} key={`${period}-${place}`}>
              <div className="ex-item">
                <h4>{period}</h4>
                <h2>
                  {title}
                  <span> - {place}</span>
                </h2>
                <p>{text}</p>
                <Icon className="icon" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About_me;
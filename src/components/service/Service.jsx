import "./service.css";
import { Container, Row } from "react-bootstrap";
import {
  FaCode,
  FaReact,
  FaMobileScreenButton,
  FaPenRuler,
  FaFigma,
  FaGaugeHigh,
} from "react-icons/fa6";
import Servicereusable from "../servicereusable/Servicereusable";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Engineering",
    para: "I build fast, scalable, and user-friendly web interfaces using modern frontend technologies like React, Next.js, HTML, CSS, and JavaScript. My focus is on clean code, performance optimization, accessibility, and seamless user experiences across all devices.",
  },
  {
    icon: <FaReact />,
    title: "React & Next.js Development",
    para: "I develop dynamic, component-based web applications using React and Next.js with reusable components, efficient state management, and modern best practices. From single-page applications to complex dashboards.",
  },
  {
    icon: <FaMobileScreenButton />,
    title: "React Native App Development",
    para: "I create high-quality cross-platform mobile applications using React Native for both Android and iOS. My apps are optimized for performance, follow platform-specific UI guidelines, and deliver smooth, native-like user experiences.",
  },
  {
    icon: <FaPenRuler />,
    title: "UI/UX Design & Implementation",
    para: "I design and implement intuitive, visually appealing, and user-centered interfaces. From wireframes to final UI, I focus on usability, consistency, and accessibility to ensure an engaging experience that aligns with your brand.",
  },
  {
    icon: <FaFigma />,
    title: "Figma to Responsive Code",
    para: "I convert Figma, Adobe XD, PSD, or AI designs into pixel-perfect, fully responsive web and mobile interfaces. The final output maintains design accuracy, cross-browser compatibility, and clean, well-structured code.",
  },
  {
    icon: <FaGaugeHigh />,
    title: "Web & Mobile UI Optimization",
    para: "I enhance existing web and mobile applications by improving UI consistency, responsiveness, and performance. This includes refactoring UI components and ensuring a smooth experience across different screen sizes and devices.",
  },
];

const Service = () => {
  return (
    <section id="service">
      <Container>
        <Row className="text-center">
          <div className="service-head">
            <h2>Service</h2>
            <h3>What I</h3>
            <h4>Offer</h4>
          </div>
        </Row>
        <Row className="g-4">
          {services.map((service) => (
            <Servicereusable key={service.title} {...service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
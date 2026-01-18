import "./service.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Servicereusable from "../servicereusable/Servicereusable";

const Service = () => {
  return (
    <>
      <section id="service">
        <Container>
          <Row className="text-center">
            <div className="service-head">
              <h2>Service</h2>
              <h3>We</h3>
              <h4>Offer</h4>
            </div>
          </Row>
          <Row>
            <Servicereusable
              title="Frontend Engineering"
              para="I build fast, scalable, and user-friendly web interfaces using modern frontend technologies like React, Next.js, HTML, CSS, and JavaScript. My focus is on clean code, performance optimization, accessibility, and seamless user experiences across all devices."
            />

            <Servicereusable
              title="React & Nextjs Development"
              para="I develop dynamic, component-based web applications using React & Next js with reusable components, efficient state management, and modern best practices. From single-page applications to complex dashboards."
            />

            <Servicereusable
              title="React Native Mobile App Development"
              para="I create high-quality cross-platform mobile applications using React Native for both Android and iOS. My apps are optimized for performance, follow platform-specific UI guidelines, and deliver smooth, native-like user experiences."
            />

            <Servicereusable
              title="UI/UX Design & Implementation"
              para="I design and implement intuitive, visually appealing, and user-centered interfaces. From wireframes to final UI, I focus on usability, consistency, and accessibility to ensure an engaging experience that aligns with your brand."
            />

            <Servicereusable
              title="Figma to Responsive Code"
              para="I convert Figma, Adobe XD, PSD, or AI designs into pixel-perfect, fully responsive web and mobile interfaces. The final output maintains design accuracy, cross-browser compatibility, and clean, well-structured code."
            />

            <Servicereusable
              title="Web & Mobile UI Optimization"
              para="I enhance existing web and mobile applications by improving UI consistency, responsiveness, and performance. This includes refactoring UI components, and ensuring a smooth experience across different screen sizes and devices."
            />

          </Row>
        </Container>
      </section >
    </>
  );
};

export default Service;

import React from "react";
import "./service.css";
import { Col, Container, Row } from "react-bootstrap";
import Servicereusable from "../servicereusable/Servicereusable";
import EmailSig from "../../assets/figma.png";
import WebDgn from "../../assets/web design.png";
import WebDev from "../../assets/web development.png";

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
              sampleimg={EmailSig}
              title="Figma to HTML"
              para="If you have a design in Figma, Adobe XD, PSD, or AI, I can transform it into a fully responsive, high-quality Responsive Design
              Cross-Browser Compatibility HTML website that maintains the integrity of your original vision and Pixel-Perfect Conversion."
            />

            <Servicereusable
              sampleimg={WebDgn}
              title="Web Design"
              para="In today’s business world, growth means using lead-generating websites that engage customers and search engines. Your website is a vital marketing asset, shaping your digital presence and delivering business results."
            />

            <Servicereusable
              sampleimg={WebDev}
              title="Web Development"
              para="In our tech-driven world, globalization's rapid advancement affects various sectors. Whether a small or large business, software simplifies operations, enabling effective management and facilitating success.Technology Life Productivity."
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Service;

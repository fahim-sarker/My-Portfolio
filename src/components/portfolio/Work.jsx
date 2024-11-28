import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./work.css";
import Port1 from "../../assets/port1.png";
import Quiz1 from "../../assets/js3.png";
import Port3 from "../../assets/steadfast.png";
import Agency from "../../assets/agency.png";
import Port9 from "../../assets/education.png";
import { Tabs, Tab } from "react-bootstrap";
import Workreusable from "../workreusable/Workreusable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from "../reviewreusable/Reviewreusable";
import RazibSir from "../../assets/Razibsir.jpeg";
import Orebi from "../../assets/orebi.png";
import Hekto from "../../assets/hekton.png";
import NewsPro from "../../assets/newspro.png";
import Project2 from "../../assets/agenci.png";
import Project3 from "../../assets/js1.png";
import Project4 from "../../assets/js2.png";
import Flip from "../../assets/flip.png"
import Soft from "../../assets/softnio.png"
import Todo from "../../assets/todo.png"

const Work = () => {
  var settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
  };
  return (
    <section id="work">
      <Container>
        <Row className="text-center">
          <div className="work_head">
            <h2>Works</h2>
            <h3>My</h3>
            <h4>Portfolio</h4>
          </div>
        </Row>
        <Row className="text-center flex">
          <Tabs defaultActiveKey="ecommerce" className="mb-4 list11">
            <Tab eventKey="ecommerce" title="E-Commerce">
              <Row>
                <Workreusable
                  image={Orebi}
                  title="Orebi Ecommerce"
                  content="Orebi is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/E-COMMERECE"
                  livesite="https://fs-ecommerce.netlify.app/"
                />

                <Workreusable
                  image={Hekto}
                  title="Hekto Ecommerce"
                  content="Hekto is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/hekto"
                  livesite="https://lucky-peony-d1ab04.netlify.app/"
                />
                <Workreusable
                  image={Flip}
                  title="FlipKart Ecommerce"
                  content="FlipKart is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/cap-ecommerce"
                  livesite="https://incredible-malasada-81f780.netlify.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="business" title="Javascript">
              <Row>
                <Workreusable
                  image={Quiz1}
                  title="Quiz Applicaton"
                  content="This project is an Interactive Quiz-Application and showing final result building using HTML, CSS, and JavaScript  knowledge."
                  github="https://github.com/fahim-sarker/Quiz-Application"
                  livesite="https://dancing-semifreddo-982a32.netlify.app/"
                />
                <Workreusable
                  image={Project3}
                  title="Weather Application"
                  content="About
                   A user-friendly weather application that allows you to check current and forecasted weather conditions for any county."
                  github="https://github.com/fahim-sarker/Weather-Application"
                  livesite="https://papaya-sunflower-a01a29.netlify.app/"
                />
                  <Workreusable
                    image={Todo}
                    title="JavaScript To-Do List"
                    content="I built a dynamic and interactive to-do list application using vanilla JavaScript, focusing on providing  way to manage daily tasks"
                    github="https://github.com/fahim-sarker/Javascript-To-do"
                    livesite="https://fascinating-nougat-b22f65.netlify.app/"
                  />
                <Workreusable
                  image={Project4}
                  title="Food Order Section"
                  content="A food item section with Add to Cart for each item.
                  A dynamic sidebar displaying added items to adjust quantities and remove items."
                  github="https://github.com/fahim-sarker/Bangla-Puzzle"
                  livesite="https://banglapuzzleltd.netlify.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="education" title="React Js">
              <Row>
              <Workreusable
                  image={Orebi}
                  title="Orebi Multipage"
                  content="Orebi is a fully functional e-commerce site with a user-friendly interface built with modern technologies."
                  github="https://github.com/fahim-sarker/E-COMMERECE"
                  livesite="https://fs-ecommerce.netlify.app/"
                />
                 <Workreusable
                  image={Project2}
                  title="Agency Website"
                  content="Agency website contains 10 pages built with React.Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker/Cap-project"
                  livesite="https://careeradvanceprograming.netlify.app/"
                 />
                 <Workreusable
                  image={Port3}
                  title="Courier service"
                  content="Steadfast is user-friendly website for a courier service business, with an easy way to send and track packages."
                  github="https://github.com/fahim-sarker/React-Task"
                  livesite="https://steadfast-react-task.netlify.app/"
                />
                 <Workreusable
                  image={Soft}
                  title="Restaurant Website"
                  content="I designed and developed a 
                  for a restaurant, providing a seamless online experience for customers to explore the menu, place orders."
                  github="https://github.com/fahim-sarker/Softnion-Task"
                  livesite="https://softnion.netlify.app/"
                />
                  <Workreusable
                  image={Hekto}
                  title="Hekto Ecommerce"
                  content="Hekto is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/hekto"
                  livesite="https://lucky-peony-d1ab04.netlify.app/"
                />
                <Workreusable
                  image={Flip}
                  title="FlipKart Ecommerce"
                  content="FlipKart is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/cap-ecommerce"
                  livesite="https://incredible-malasada-81f780.netlify.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="newspaper" title="Web Design">
              <Row>
              <Workreusable
                  image={Port1}
                  title="Finsweet Multipage"
                  content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker/multipage"
                  livesite="https://enchanting-cascaron-c7198f.netlify.app/"
                />
                 <Workreusable
                  image={Port9}
                  title="Academic Site"
                  content="I developed a comprehensive, user-friendly website for a school, designed to improve communication for students, parents, and staff."
                  github="https://github.com/fahim-sarker/M.A.H.S"
                  livesite="https://mathabhangaadarshahighschool.netlify.app/"
                />
                <Workreusable
                  image={Agency}
                  title="BWFC Agency"
                  content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I"
                  github="https://github.com/fahim-sarker/react-figma"
                  livesite="https://cerulean-seahorse-3730b2.netlify.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="portfolio" title="HTML CSS">
              <Row>
                <Workreusable
                  image={Port1}
                  title="Finsweet Multipage"
                  content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker/multipage"
                  livesite="https://enchanting-cascaron-c7198f.netlify.app/"
                />
                 <Workreusable
                  image={NewsPro}
                  title="Newspaper"
                  content="Newspro Agency website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker/Newspaper"
                  livesite="https://fahim-sarker.github.io/Newspaper/"
                />
                <Workreusable
                  image={Agency}
                  title="BWFC Agency"
                  content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I"
                  github="https://github.com/fahim-sarker"
                  livesite="https://cerulean-seahorse-3730b2.netlify.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="restaurant" title="Bootstrap">
              <Row>
                <Workreusable
                  image={Port9}
                  title="Academic Site"
                  content="I developed a comprehensive, user-friendly website for a school, designed to improve communication for students, parents, and staff"
                  github="https://github.com/fahim-sarker/M.A.H.S"
                  livesite="https://mathabhangaadarshahighschool.netlify.app/"
                />
                <Workreusable
                  image={Port1}
                  title="Finsweet Multipage"
                  content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker"
                  livesite="https://aquamarine-bublanina-e9df9d.netlify.app/"
                />
                <Workreusable
                  image={Agency}
                  title="BWFC Agency"
                  content="BWFC is a stylish agency website built with React and Bootstrap. It features clean design and comprehensive service details I"
                  github="https://github.com/fahim-sarker"
                  livesite="https://cerulean-seahorse-3730b2.netlify.app/"
                />
              </Row>
            </Tab>
          </Tabs>
        </Row>
        <Row>
          <div className="review">
            <div className="review-head text-center">
              <h2>Testimonials</h2>
            </div>
            <Slider {...settings}>
              <Reviewreusable
                img={RazibSir}
                name="Razibur Rahman"
                designation="Sr Faculty, Creative IT Institute"
                company="Creative IT Institute"
                comment="He completed the course with great skill and dedication. I personally recommend him for perfect work."
              />
              <Reviewreusable
                img={RazibSir}
                name="Razibur Rahman"
                designation="Sr Faculty, Creative IT Institute"
                comment="He completed the course with great skill and dedication. I personally recommend him for perfect work."
              />
            </Slider>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Work;

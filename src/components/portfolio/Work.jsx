import { Container, Row } from "react-bootstrap";
import "./work.css";
import Port1 from "../../assets/port1.png";
import Port2 from "../../assets/gym1.png";
import Quiz1 from "../../assets/js3.png";
import Port3 from "../../assets/car.png";
import Bar from "../../assets/bar.png";
import Port9 from "../../assets/education.png";
import { Tabs, Tab } from "react-bootstrap";
import Workreusable from "../workreusable/Workreusable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from "../reviewreusable/Reviewreusable";
import RazibSir from "../../assets/Razibsir.jpeg";
import Orebi1 from "../../assets/filecheck.png";
import Orebi from "../../assets/orebi.png";
import Hekto from "../../assets/hekton.png";
import Viridian from "../../assets/viridian.png";
import Project2 from "../../assets/reminder.png";
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
            <Tab eventKey="education" title="React Js">
              <Row>
              <Workreusable
                  image={Bar}
                  title="Multi-Vendor Bar"
                  content="The site features a dedicated multi-vendor bar that allows users to easily filter and browse products by vendor."
                  github="https://github.com/fahim-sarker/alex420"
                  livesite="https://shipawayy.netlify.app/"
                />
                 <Workreusable
                  image={Project2}
                  title="Reminder Website "
                  content="This is a clean and user-friendly Reminder website built to help users manage tasks and stay organized."
                  github="https://github.com/fahim-sarker/Duelert"
                  livesite="https://vair-cloud.netlify.app/"
                 />
                 <Workreusable
                  image={Port3}
                  title="Car Recovery"
                  content="This project is a responsive and user-focused website designed for a car recovery and roadside assistance service"
                  github="https://github.com/fahim-sarker/Car-Breakdown"
                  livesite="https://www.car-recovery-network.co.uk/"
                />
              </Row>
            </Tab>
            <Tab eventKey="TypeScript" title="TypeScript">
              <Row>
                <Workreusable
                  image={Orebi1}
                  title=" Fraud File Checker Website"
                  content="This website is designed to help users upload and scan files to detect potential fraud, malware, or malicious content."
                  github="https://github.com/fahim-sarker/Xeltra"
                  livesite="https://xeltra.netlify.app/"
                />

                <Workreusable
                  image={Viridian}
                  title="Business Task Management"
                  content="This project is a full-featured task management web application built for teams and businesses to organize, track, and manage tasks efficiently."
                  github="https://github.com/fahim-sarker/Viridian"
                  livesite="https://viridianbray-client.netlify.app"
                />
                <Workreusable
                  image={Port2}
                  title="Fitness Gym"
                  content="This is a modern, responsive website designed for a fitness gym. The project showcases my frontend development skills with a clean UI."
                  github="https://github.com/fahim-sarker/My-Projecct"
                  livesite="https://galaxy-gym.netlify.app/"
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
              </Row>
            </Tab>
            
            <Tab eventKey="newspaper" title="Web Design">
              <Row>
              <Workreusable
                  image={Port2}
                  title="Fitness Gym"
                  content="This is a modern, responsive website designed for a fitness gym. The project showcases my frontend development skills with a clean UI."
                  github="https://github.com/fahim-sarker/My-Projecct"
                  livesite="https://galaxy-gym.netlify.app/"
                />
                 <Workreusable
                  image={Port9}
                  title="Educational Site"
                  content="I developed a comprehensive, user-friendly website for a Education, designed to improve communication for students, parents, and staff."
                  github="https://github.com/fahim-sarker/cap-education"
                  livesite="https://capeducation.netlify.app/"
                />
                <Workreusable
                  image={Port1}
                  title="Finsweet Multipage"
                  content="Finsweet Agency's website contains 12 pages built with Bootstrap. Responsive designed to work smoothly on different devices I"
                  github="https://github.com/fahim-sarker/multipage"
                  livesite="https://enchanting-cascaron-c7198f.netlify.app/"
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

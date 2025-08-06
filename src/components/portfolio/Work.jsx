import { Container, Row } from "react-bootstrap";
import "./work.css";
import Port1 from "../../assets/port1.png";
import Port2 from "../../assets/gym1.png";
import Ten from "../../assets/10.png";
import Quiz1 from "../../assets/js3.png";
import Port3 from "../../assets/sava.png";
import Bar from "../../assets/bar.png";
import Port9 from "../../assets/vue.png";
import { Tabs, Tab } from "react-bootstrap";
import Workreusable from "../workreusable/Workreusable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewreusable from "../reviewreusable/Reviewreusable";
import RazibSir from "../../assets/Razibsir.jpeg";
import Orebi1 from "../../assets/swift.png";
import Orebi from "../../assets/orebi.png";
import Hekto from "../../assets/hekton.png";
import Viridian from "../../assets/viridian.png";
import Project2 from "../../assets/reminder.png";
import Project3 from "../../assets/drinks.png";
import Flip from "../../assets/falcon.png"
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
                  title="Falcon Ecommerce"
                  content="Falcon is a fully functional e-commerce site with a user-friendly interface and product management, built with modern technologies."
                  github="https://github.com/fahim-sarker/Falcon-Test"
                  livesite="https://falcon-store-test.netlify.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="education" title="React & Next Js">
              <Row>
              <Workreusable
                  image={Bar}
                  title="Multi-Vendor Bar"
                  content="The site features a dedicated multi-vendor bar that allows users to easily filter and browse products by vendor."
                  github="https://github.com/fahim-sarker/alex420"
                  livesite="https://sipawayy.com/"
                />
                 <Workreusable
                  image={Project2}
                  title="Reminder Website "
                  content="This is a clean and user-friendly Reminder website built to help users manage tasks and stay organized."
                  github="https://github.com/fahim-sarker/Duelert"
                  livesite="https://duelert.netlify.app/"
                 />
                 <Workreusable
                  image={Port3}
                  title="Sava Logistics"
                  content="This project is a responsive and user-focused website designed for a Logistic
                   company, showcasing their services and capabilities."
                  github="https://github.com/fahim-sarker/vladimirac"
                  livesite="https://vladimirac.vercel.app/"
                />
              </Row>
            </Tab>
            <Tab eventKey="TypeScript" title="TypeScript">
              <Row>
                <Workreusable
                  image={Orebi1}
                  title="Cargo Website"
                  content="This project is a responsive and user-focused website designed for 
                  a Cargo company, showcasing their services and capabilities."
                  github="https://github.com/fahim-sarker/swift-express-cargo"
                  livesite="https://swifttcargo.netlify.app/"
                />

                <Workreusable
                  image={Viridian}
                  title="Business Task Management"
                  content="This project is a full-featured task management web application built for teams and businesses to organize, track, and manage tasks efficiently."
                  github="https://github.com/fahim-sarker/Viridian"
                  livesite="https://viridianbray-client.netlify.app"
                />
                <Workreusable
                  image={Ten}
                  title="10 Minute Scholl Ielts"
                  content="This is a modern, responsive website  for  10 Minute Ielts Course. The project showcases
                   my frontend development skills with a clean UI."
                  github="https://github.com/fahim-sarker/10-Minute-Task"
                  livesite="https://10-minute-task-ten.vercel.app/en/product/ielts-course"
                />
              </Row>
            </Tab>
            <Tab eventKey="business" title="JS & GSAP">
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
                  title="Drinks Website Made with GSAP"
                  content="This project is a Drinks Website made with GSAP, showcasing my skills in creating interactive and visually appealing web experiences."
                  github="https://github.com/fahim-sarker/SPYLT-GSAP"
                  livesite="https://spylt-gsap.netlify.app/"
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
            
            <Tab eventKey="newspaper" title="Web Design & Vue Js">
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
                  title="Vue Js Project"
                  content="This project is a Vue.js-based web application that demonstrates
                   my skills in building interactive user interfaces using Vue.js."
                  github="https://github.com/fahim-sarker/Vue-JS"
                  livesite="https://myvuejsproject.netlify.app/"
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
